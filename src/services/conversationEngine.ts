import { ChatMessage, GovResource, Language, UserProfileState } from '../types';
import { GOV_RESOURCES } from '../data/resources';

export interface ProcessInputResult {
  aiMessage: ChatMessage;
  updatedProfile: UserProfileState;
  matchedResource?: GovResource;
}

export class ConversationEngine {
  /**
   * Process user input either via server-side Gemini API or local deterministic engine
   */
  public async processInput(
    userInput: string,
    language: Language,
    currentProfile: UserProfileState,
    history: ChatMessage[]
  ): Promise<ProcessInputResult> {
    const trimmed = userInput.trim().toLowerCase();

    // Check if user clicked "I don't know"
    const isIDontKnow = 
      trimmed.includes('தெரியாது') || 
      trimmed.includes("don't know") || 
      trimmed.includes('dont know') || 
      trimmed.includes('पता नहीं') ||
      trimmed === '❓ எனக்குத் தெரியாது' ||
      trimmed === "❓ i don't know" ||
      trimmed === '❓ मुझे नहीं पता';

    // First attempt to call server-side Gemini API
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userInput,
          language,
          profile: currentProfile,
          isIDontKnow,
          history: history.slice(-4).map(h => ({ sender: h.sender, text: h.text }))
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.text) {
          const matchedRes = data.matchedResourceId 
            ? GOV_RESOURCES.find(r => r.id === data.matchedResourceId) 
            : undefined;

          return {
            aiMessage: {
              id: 'ai-' + Date.now(),
              sender: 'ai',
              text: data.text,
              timestamp: new Date(),
              audioAvailable: true,
              matchedResourceId: data.matchedResourceId,
              quickOptions: data.quickOptions,
              iDontKnowHint: data.iDontKnowHint,
              isQuestion: data.isQuestion,
            },
            updatedProfile: {
              ...currentProfile,
              ...(data.updatedProfile || {})
            },
            matchedResource: matchedRes,
          };
        }
      }
    } catch (err) {
      // Graceful fallback to deterministic logic
      console.log('Using deterministic conversation engine fallback:', err);
    }

    // Deterministic Rule Engine
    return this.processDeterministic(userInput, language, currentProfile, isIDontKnow);
  }

  private processDeterministic(
    input: string,
    lang: Language,
    profile: UserProfileState,
    isIDontKnow: boolean
  ): ProcessInputResult {
    const lower = input.toLowerCase();
    const updatedProfile = { ...profile };

    // Handle "I don't know" response specifically
    if (isIDontKnow) {
      return this.handleIDontKnowCase(lang, updatedProfile);
    }

    // Stage 1: Detect Intent if not detected yet
    if (!updatedProfile.intent) {
      if (
        lower.includes('வேலை') || lower.includes('job') || lower.includes('work') ||
        lower.includes('பயிற்சி') || lower.includes('skill') || lower.includes('தையல்') ||
        lower.includes('sewing') || lower.includes('रोजगार') || lower.includes('काम') ||
        lower.includes('நர்சிங்') || lower.includes('கம்ப்யூட்டர்')
      ) {
        // Skill / employment intent
        updatedProfile.intent = 'skills';
        updatedProfile.completedQuestions.push('intent');

        const messageText: Record<Language, string> = {
          ta: 'நிச்சயமாக. உங்களுக்கு பொருத்தமான வேலை அல்லது இலவச திறன் பயிற்சியை கண்டுபிடிக்க நான் உதவுகிறேன். உங்கள் வயது என்ன என்று சொல்ல முடியுமா?',
          en: 'Certainly! I will help you find the most suitable job or free skill training. Could you tell me your approximate age?',
          hi: 'बिल्कुल! मैं आपके लिए उपयुक्त निःशुल्क कौशल प्रशिक्षण या काम खोजने में मदद करूँगी। क्या आप अपनी उम्र बता सकती हैं?',
        };

        return {
          aiMessage: {
            id: 'ai-' + Date.now(),
            sender: 'ai',
            text: messageText[lang],
            timestamp: new Date(),
            audioAvailable: true,
            isQuestion: true,
            quickOptions: lang === 'ta' ? ['18 - 25', '26 - 35', '36 - 45', '❓ எனக்குத் தெரியாது'] : ['18 - 25', '26 - 35', '36 - 45', "❓ I don't know"],
            iDontKnowHint: lang === 'ta' ? 'வயது சரியாக தெரியாவிட்டால் உங்கள் ஆதார் அட்டையில் உள்ள பிறந்த ஆண்டை பார்க்கலாம்.' : "If unsure of exact age, you can check the birth year on your Aadhaar card."
          },
          updatedProfile
        };
      } else if (
        lower.includes('உரிமை') || lower.includes('1000') || lower.includes('மாதாந்திர') ||
        lower.includes('monthly') || lower.includes('kmut') || lower.includes('கலைஞர்') ||
        lower.includes('பணம்') || lower.includes('சாப்பாடு') || lower.includes('செலவு') ||
        lower.includes('रुपये')
      ) {
        // Financial support intent (KMUT)
        updatedProfile.intent = 'financial';
        const matched = GOV_RESOURCES.find(r => r.id === 'magalir-urimai');
        const text: Record<Language, string> = {
          ta: 'குடும்பத் தலைவிகளுக்கு மாதம் ₹1,000 வழங்கும் கலைஞர் மகளிர் உரிமைத் திட்டம் உங்களுக்கு மிகுந்த பயனுள்ளதாக இருக்கும். இதை எப்படி விண்ணப்பிப்பது என்று பார்ப்போம்.',
          en: 'The Kalaignar Magalir Urimai Thittam provides ₹1,000 every month directly to women heads of family. Here is your personalized access guide.',
          hi: 'महिलाओं के लिए मासिक ₹1,000 की सहायता योजना आपके लिए अत्यंत उपयोगी है। आइए इसके नियम और आवेदन के चरण देखें।',
        };

        return {
          aiMessage: {
            id: 'ai-' + Date.now(),
            sender: 'ai',
            text: text[lang],
            timestamp: new Date(),
            audioAvailable: true,
            matchedResourceId: 'magalir-urimai',
          },
          updatedProfile,
          matchedResource: matched
        };
      } else if (
        lower.includes('கடன்') || lower.includes('loan') || lower.includes('வியாபாரம்') ||
        lower.includes('business') || lower.includes('கடை') || lower.includes('ऋण') ||
        lower.includes('दुकान')
      ) {
        // Business loan intent (Mudra)
        updatedProfile.intent = 'business';
        const matched = GOV_RESOURCES.find(r => r.id === 'mudra-women');
        const text: Record<Language, string> = {
          ta: 'சொத்து அடமானம் ஏதுமின்றி சிறுதொழில் தொடங்க முத்ரா திட்டம் (MUDRA Shishu Loan) உங்களுக்கு உதவும். இதன் விவரங்கள் இதோ.',
          en: 'You can get collateral-free business finance up to ₹50,000 through the government MUDRA scheme. Here are the steps.',
          hi: 'बिना किसी संपत्ति गारंटी के आप मुद्रा योजना से छोटा व्यवसाय ऋण प्राप्त कर सकती हैं। इसके विवरण देखें।',
        };

        return {
          aiMessage: {
            id: 'ai-' + Date.now(),
            sender: 'ai',
            text: text[lang],
            timestamp: new Date(),
            audioAvailable: true,
            matchedResourceId: 'mudra-women',
          },
          updatedProfile,
          matchedResource: matched
        };
      }
    }

    // Stage 2: Question handling for Age
    if (updatedProfile.intent && !updatedProfile.age) {
      const ageNum = parseInt(input.replace(/[^0-9]/g, ''), 10);
      updatedProfile.age = !isNaN(ageNum) ? ageNum : (input.includes('26') || input.includes('3') ? 32 : 28);
      updatedProfile.completedQuestions.push('age');

      const text: Record<Language, string> = {
        ta: 'நன்றி. நீங்கள் தமிழ்நாட்டில் எந்த மாவட்டத்தில் வசிக்கிறீர்கள்?',
        en: 'Thank you. Which district or town in Tamil Nadu do you live in?',
        hi: 'धन्यवाद। आप तमिलनाडु के किस जिले में रहती हैं?',
      };

      return {
        aiMessage: {
          id: 'ai-' + Date.now(),
          sender: 'ai',
          text: text[lang],
          timestamp: new Date(),
          audioAvailable: true,
          isQuestion: true,
          quickOptions: lang === 'ta' ? ['சென்னை (Chennai)', 'மதுரை (Madurai)', 'கோயம்புத்தூர் (Coimbatore)', 'திருச்சி (Trichy)', '❓ எனக்குத் தெரியாது'] : ['Chennai', 'Madurai', 'Coimbatore', 'Trichy', "❓ I don't know"],
          iDontKnowHint: lang === 'ta' ? 'உங்கள் ஊர் பெயர் அல்லது ரேஷன் கார்டில் உள்ள முகவரியை சொல்லலாம்.' : "You can say your village name or look at the address on your ration card."
        },
        updatedProfile
      };
    }

    // Stage 3: Question handling for District
    if (updatedProfile.intent && updatedProfile.age && !updatedProfile.district) {
      updatedProfile.district = input.length > 2 ? input : 'Tamil Nadu';
      updatedProfile.completedQuestions.push('district');

      const text: Record<Language, string> = {
        ta: 'நீங்கள் முன்பு ஏதாவது வேலை செய்திருக்கிறீர்களா அல்லது பள்ளி படிப்பு வரை படித்துள்ளீர்களா?',
        en: 'Have you worked somewhere before, or studied up to school level?',
        hi: 'क्या आपने पहले कहीं काम किया है या केवल स्कूली पढ़ाई की है?',
      };

      return {
        aiMessage: {
          id: 'ai-' + Date.now(),
          sender: 'ai',
          text: text[lang],
          timestamp: new Date(),
          audioAvailable: true,
          isQuestion: true,
          quickOptions: lang === 'ta' ? ['வேலை செய்ததில்லை (இல்லை)', 'பள்ளி வரை படித்துள்ளேன்', 'வீட்டுத் தையல் தெரியும்', '❓ எனக்குத் தெரியாது'] : ['No prior job', 'School education', 'Know home tailoring', "❓ I don't know"],
          iDontKnowHint: lang === 'ta' ? 'படிப்பு சான்றிதழ் இல்லாவிட்டாலும் பரவாயில்லை. உங்களுக்கு என்ன வேலை பிடிக்கும் என்று சொன்னால் போதும்.' : "It's okay even if you don't have school certificates; beginner-friendly training is available."
        },
        updatedProfile
      };
    }

    // Stage 4: Match Final Resource!
    // Default match to TNSDC Free Women Skill Training (Lakshmi journey)
    const matched = GOV_RESOURCES.find(r => r.id === 'tnsdc-skills') || GOV_RESOURCES[0];
    updatedProfile.completedQuestions.push('matched');

    const text: Record<Language, string> = {
      ta: `உங்களுக்கு மிகவும் பொருத்தமான அரசு உதவி கிடைத்துள்ளது: தமிழ்நாடு திறன் மேம்பாட்டு கழகம் (TNSDC) இலவச மகளிர் வாழ்வாதார பயிற்சி!

ஏன் இது பொருத்தமாக இருக்கலாம்?
நீங்கள் முன்பணி அனுபவம் இல்லாமலேயே தையல், சுகாதார உதவி அல்லது கணினி பணிகளை இலவசமாக கற்றுக்கொண்டு அங்கீகரிக்கப்பட்ட அரசு சான்றிதழுடன் வருமானம் ஈட்டலாம்.`,
      en: `We found the most relevant government support for you: Tamil Nadu Skill Development Mission (TNSDC) Free Women Livelihood Skills!

Why is this right for you?
Even without prior experience, you can learn valuable skills like tailoring or healthcare assistance for free with official government certification and job support.`,
      hi: `आपके लिए सबसे उपयुक्त सरकारी सहायता मिल गई है: तमिलनाडु कौशल विकास मिशन (TNSDC) निःशुल्क महिला आजीविका कौशल!

यह आपके लिए क्यों सही है?
बिना पूर्व अनुभव के भी आप सिलाई या स्वास्थ्य सेवा जैसे उपयोगी कौशल मुफ्त में सीखकर सरकारी प्रमाण पत्र के साथ आत्मनिर्भर बन सकती हैं।`,
    };

    return {
      aiMessage: {
        id: 'ai-' + Date.now(),
        sender: 'ai',
        text: text[lang],
        timestamp: new Date(),
        audioAvailable: true,
        matchedResourceId: matched.id,
      },
      updatedProfile,
      matchedResource: matched,
    };
  }

  private handleIDontKnowCase(lang: Language, profile: UserProfileState): ProcessInputResult {
    let responseText = '';
    let hintText = '';

    if (!profile.age) {
      responseText = lang === 'ta'
        ? 'பரவாயில்லை! வயது சரியாக நினைவில் இல்லையென்றால் கவலை வேண்டாம். உங்கள் ஆதார் அட்டை அல்லது வாக்காளர் அட்டையில் உள்ள பிறந்த ஆண்டை வைத்து நாம் தெரிந்து கொள்ளலாம். நீங்கள் தோராயமாக 25 முதல் 40 வயதுக்குள் இருப்பீர்களா?'
        : lang === 'hi'
        ? 'कोई बात नहीं! यदि सही उम्र याद नहीं है तो चिंता न करें। आधार कार्ड पर जन्म का साल देखकर पता लगाया जा सकता है। क्या आपकी उम्र लगभग 25 से 40 वर्ष के बीच है?'
        : "That's completely fine! You don't need to worry if you're unsure of your exact age. We can check the year on your Aadhaar card. Are you roughly between 25 and 40 years?";
      hintText = lang === 'ta' ? 'ஆதார் அட்டையை கையில் எடுத்துப் பாருங்கள்.' : 'Check the birth year on your Aadhaar card.';
    } else if (!profile.district) {
      responseText = lang === 'ta'
        ? 'பரவாயில்லை. உங்கள் ரேஷன் கார்டு அல்லது வாக்காளர் அட்டையில் உங்கள் ஊர் பெயர் குறிப்பிடப்பட்டிருக்கும். உங்கள் அருகிலுள்ள பெரிய ஊர் அல்லது தாலுகா பெயரை சொன்னால் போதும்.'
        : lang === 'hi'
        ? 'कोई बात नहीं। आपके राशन कार्ड पर आपके गाँव या शहर का नाम लिखा होता है। आप अपने नजदीकी बड़े कस्बे का नाम भी बता सकती हैं।'
        : "No problem at all. Your ration card or voter card has your locality name. You can simply tell me the nearest major town.";
      hintText = lang === 'ta' ? 'ரேஷன் கார்டில் உள்ள முகவரியை பார்க்கலாம்.' : 'You can refer to your ration card address.';
    } else {
      responseText = lang === 'ta'
        ? 'பரவாயில்லை. அதை எப்படி கண்டுபிடிப்பது என்று நான் சொல்கிறேன். உங்கள் குடும்ப அட்டை அல்லது வருமானச் சான்றிதழ் இருந்தால் அதில் உள்ள தகவல்களை பார்க்கலாம். அது இல்லையென்றாலும், இந்த தகவல் எங்கே கிடைக்கும் என்பதை அடுத்ததாக நான் சொல்லுகிறேன்.'
        : lang === 'hi'
        ? 'कोई बात नहीं। इसे कैसे पता करें मैं बताती हूँ। यदि आय प्रमाण पत्र या राशन कार्ड है तो उसमें देखा जा सकता है। नहीं भी है तो मैं आगे बताती हूँ।'
        : "That's perfectly okay. I will guide you on how to find it. You can check your family ration card or income certificate, or our next step will explain where to obtain it.";
      hintText = lang === 'ta' ? 'கிராம நிர்வாக அலுவலர் (VAO) மூலம் எளிதாக பெறலாம்.' : 'Can be easily obtained via local VAO office.';
    }

    return {
      aiMessage: {
        id: 'ai-' + Date.now(),
        sender: 'ai',
        text: responseText,
        timestamp: new Date(),
        audioAvailable: true,
        iDontKnowHint: hintText,
        quickOptions: lang === 'ta' ? ['ஆம், சரி (Yes)', 'அடுத்த படிக்கு செல்லலாம் (Continue)'] : ['Yes, continue', 'Next step'],
      },
      updatedProfile: profile
    };
  }
}

export const conversationEngine = new ConversationEngine();
