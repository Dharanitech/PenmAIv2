import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize server-side Gemini client if API key exists
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  try {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.warn('Could not initialize GoogleGenAI client:', err);
  }
}

// POST /api/chat - Server-side Gemini processing
app.post('/api/chat', async (req: Request, res: Response) => {
  const { message, language, profile, isIDontKnow, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // If Gemini client is not initialized or key missing, send 503 so client uses local deterministic engine
  if (!ai || !apiKey) {
    return res.status(503).json({ 
      error: 'Gemini API key not configured on server', 
      useFallback: true 
    });
  }

  try {
    const langPrompt = language === 'ta' 
      ? 'Respond strictly in simple, conversational, warm everyday Tamil (NOT high formal government Tamil).'
      : language === 'hi'
      ? 'Respond strictly in simple, respectful everyday Hindi.'
      : 'Respond strictly in simple, empathetic, plain English without any bureaucratic jargon.';

    const systemInstruction = `
You are penmAI (பெண்மை + AI) – a gentle, warm, patient, and empowering digital accessibility companion designed for a first-time woman user with no tech background, no English, and no one to ask.

PHILOSOPHY:
"Don't make the woman learn the system. Make the system understand the woman."
Her Voice. Her Language. Her Access.

RULES:
1. ${langPrompt}
2. Ask only ONE simple question at a time. Never overwhelm with multiple questions or long paragraphs.
3. If the user indicates "I don't know" (எனக்குத் தெரியாது / मुझे नहीं पता / I don't know), reassure them with deep kindness ("பரவாயில்லை..."). Then explain WHERE they can find this answer (e.g. looking at their Aadhaar card, ration card, or asking the local VAO / e-Sevai staff).
4. Strictly match only from this curated set of real government initiatives when enough info is known:
   - "tnsdc-skills": Tamil Nadu Skill Development & Naan Mudhalvan free women courses (tailoring, nursing assistant, computer)
   - "magalir-urimai": Kalaignar Magalir Urimai Thittam (₹1,000/mo basic income for women heads of family)
   - "pm-vishwakarma": PM Vishwakarma for women tailors, basket makers (free training, ₹500/day stipend, ₹15,000 tool voucher)
   - "mudra-women": PMMY Shishu/Kishore micro-business loan without property collateral
   - "pudhumai-penn": Moovalur Ramamirtham Higher Education support for girl students (₹1,000/mo)
5. Return your response as a valid JSON object strictly adhering to this structure:
{
  "text": "Your warm, plain-language message to the woman",
  "isQuestion": true or false,
  "matchedResourceId": "scheme_id or null",
  "quickOptions": ["Option 1", "Option 2", "❓ எனக்குத் தெரியாது"],
  "iDontKnowHint": "Brief hint on where to look if unsure"
}
`;

    const prompt = `
Current User Profile: ${JSON.stringify(profile || {})}
User Language: ${language}
Did user click "I don't know": ${isIDontKnow}
User message: "${message}"
Recent history: ${JSON.stringify(history || [])}
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
      },
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error('Empty response from Gemini');
    }

    try {
      const parsed = JSON.parse(responseText.trim());
      return res.json(parsed);
    } catch (parseErr) {
      return res.json({
        text: responseText,
        isQuestion: false,
        matchedResourceId: null,
      });
    }
  } catch (apiErr: any) {
    console.error('Gemini server call error:', apiErr);
    return res.status(500).json({ error: apiErr.message, useFallback: true });
  }
});

// Setup Vite middleware in development or serve static in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`penmAI full-stack server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
