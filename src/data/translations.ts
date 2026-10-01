import { Language } from '../types';

export const UI_TRANSLATIONS: Record<Language, {
  brandName: string;
  brandSub: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroSpeechPrompt: string;
  startSpeaking: string;
  stopSpeaking: string;
  listening: string;
  processing: string;
  typeNeed: string;
  typePlaceholder: string;
  send: string;
  orDivider: string;
  quickSamplesTitle: string;
  samples: string[];
  iDontKnowButton: string;
  iDontKnowExplanationTitle: string;
  matchedTitle: string;
  whyThisFits: string;
  eligibilityTitle: string;
  documentsTitle: string;
  actionStepsTitle: string;
  officialSourceBtn: string;
  readAloud: string;
  stopAudio: string;
  explainDocument: string;
  howToFindDoc: string;
  nextStep: string;
  tryDemoBtn: string;
  demoLabel: string;
  resetChat: string;
  explainThisBtn: string;
  explainThisTitle: string;
  explainThisSub: string;
  trustBadge: string;
  trustSub: string;
  privacyNotice: string;
  accessibilitySettings: string;
  fontSize: string;
  speechRate: string;
  highContrast: string;
  autoSpeak: string;
  close: string;
  traditionalVsPenmaiTitle: string;
  traditionalPortal: string;
  penmaiWay: string;
  whyPenmaiTitle: string;
  impactTitle: string;
  impactSubtitle: string;
  philosophyQuote: string;
  disclaimerNotice: string;
  noMatchFallback: string;
  verifiedOfficialBadge: string;
  readyToApply: string;
}> = {
  ta: {
    brandName: 'penmAI',
    brandSub: 'பெண்மை + AI',
    tagline: 'அவள் குரல். அவள் மொழி. அவள் உரிமை.',
    heroHeadline: 'அவளுக்கு எங்கு தேடுவது என்று தெரியாது. தெரிய வேண்டிய அவசியமும் இல்லை.',
    heroSubheadline: 'அவள் தன் சொந்த மொழியில் பேசினாலே போதும்.',
    heroSpeechPrompt: 'உங்களுக்கு என்ன உதவி வேண்டும்?',
    startSpeaking: 'பேச தொடங்குங்கள்',
    stopSpeaking: 'பேச்சை முடிக்கவும்',
    listening: 'நான் கேட்கிறேன், தயங்காமல் பேசுங்கள்...',
    processing: 'புரிந்துகொள்கிறேன், காத்திருக்கவும்...',
    typeNeed: 'அல்லது உங்கள் தேவையை தட்டச்சு செய்யுங்கள்',
    typePlaceholder: 'உதாரணம்: எனக்கு வீட்டில் இருந்து செய்ய வேலை பயிற்சி வேண்டும்...',
    send: 'அனுப்பு',
    orDivider: 'அல்லது',
    quickSamplesTitle: 'தொட்டு பேச எளிய உதாரணங்கள்:',
    samples: [
      'எனக்கு வேலை வேண்டும். நான் அதிகம் படிக்கவில்லை. எனக்கு என்ன உதவி கிடைக்கும்?',
      'வீட்டில் இருந்து தையல் தொழில் செய்ய பயிற்சி மற்றும் கருவி உதவி கிடைக்குமா?',
      'குடும்ப செலவுக்கு மாதாந்திர மகளிர் உரிமைத் தொகை எப்படி பெறுவது?',
      'சிறு கடை வைக்க அடமானம் இல்லாமல் கடன் கிடைக்குமா?'
    ],
    iDontKnowButton: '❓ எனக்குத் தெரியாது',
    iDontKnowExplanationTitle: 'பரவாயில்லை, இதை எப்படி கண்டுபிடிப்பது என்று நான் சொல்கிறேன்:',
    matchedTitle: 'உங்களுக்கு மிகவும் பொருத்தமான அரசு உதவி',
    whyThisFits: 'ஏன் இது உங்களுக்கு பொருத்தமாக இருக்கலாம்?',
    eligibilityTitle: 'யாரெல்லாம் பயன்பெறலாம்? (எளிய தகுதிகள்)',
    documentsTitle: 'தேவையான ஆவணங்கள் சரிபார்ப்பு பட்டியல்',
    actionStepsTitle: 'அடுத்ததாக நீங்கள் செய்ய வேண்டிய எளிய 4 படிகள்',
    officialSourceBtn: 'அதிகாரப்பூர்வ அரசு இணையதளத்திற்கு செல்ல',
    readAloud: 'குரல் வழி கேட்க',
    stopAudio: 'நிறுத்து',
    explainDocument: 'இந்த ஆவணம் எதற்கு?',
    howToFindDoc: 'இதை எங்கே கண்டுபிடிப்பது?',
    nextStep: 'அடுத்த படி',
    tryDemoBtn: '60 வினாடி நேரடி மாதிரி (Try Demo)',
    demoLabel: 'நீதிபதிகளுக்கான 60-வினாடி டெமோ',
    resetChat: 'புதிய உரையாடலை தொடங்க',
    explainThisBtn: 'டிஜிட்டல் அகராதி (Explain Terms)',
    explainThisTitle: 'அரசு இணையதளங்களில் குழப்பும் சொற்களுக்கு எளிய விளக்கம்',
    explainThisSub: 'தொழில்நுட்ப சொற்களைக் கண்டு பயப்பட வேண்டாம். ஒவ்வொன்றையும் தொட்டு எளிய தமிழில் புரிந்து கொள்ளுங்கள்.',
    trustBadge: 'நம்பகத்தன்மை & வெளிப்படைத்தன்மை',
    trustSub: 'penmAI உங்களுக்கு வழிகாட்ட மட்டுமே செய்கிறது. இது அரசு முடிவுகளை எடுக்காது. இறுதி தகுதியை அதிகாரப்பூர்வ அரசு தளத்தில் சரிபார்க்கவும்.',
    privacyNotice: 'உங்கள் தனியுரிமை பாதுகாப்பானது: கடவுச்சொல் (Password), வங்கி ரகசிய குறியீடு (PIN) போன்றவற்றை இதில் பகிர வேண்டாம்.',
    accessibilitySettings: 'எழுத்து & குரல் அமைப்புகள்',
    fontSize: 'எழுத்து அளவு',
    speechRate: 'குரல் வேகம்',
    highContrast: 'அதிக மாறுபட்ட நிறம் (High Contrast)',
    autoSpeak: 'பதில்களை தானாக வாசிக்கவும்',
    close: 'மூடுக',
    traditionalVsPenmaiTitle: 'வழக்கமான அரசு போர்ட்டல் vs penmAI',
    traditionalPortal: 'பழைய முறை: மனிதர் கணினி முறையை கற்றுக்கொள்ள வேண்டும் (Search → Understand → Fill → Submit)',
    penmaiWay: 'penmAI முறை: கணினி பெண்ணை புரிந்துகொள்கிறது (Speak → Understand → Guide → Access)',
    whyPenmaiTitle: 'ஏன் penmAI?',
    impactTitle: 'டிஜிட்டல் விலக்கலில் இருந்து டிஜிட்டல் சுதந்திரத்திற்கு',
    impactSubtitle: 'தொழில்நுட்பம் அறியாத பெண்களுக்கான முதல் எளிய குரல் பாலம்.',
    philosophyQuote: 'ஒரு சேவையை இணையத்தில் ஏற்றுவதால் மட்டும் டிஜிட்டல் உள்ளடக்கம் வந்துவிடுவதில்லை. இணையத்தையே பயன்படுத்தாத ஒரு பெண் அதை சுயமாக பயன்படுத்தும் போதே உண்மையான உள்ளடக்கம் மலர்கிறது.',
    disclaimerNotice: 'அரசு சேவைகள் குறித்த நம்பகமான தகவல்களுக்காக அதிகாரப்பூர்வ தளங்களை பார்வையிடவும்.',
    noMatchFallback: 'இந்த நேரத்தில் எனது தகவல்களில் உங்களுக்கு நேரடி பொருத்தம் கிடைக்கவில்லை. அருகில் உள்ள இ-சேவை மையம் அல்லது மாவட்ட அலுவலகத்தை தொடர்பு கொள்ளலாம்.',
    verifiedOfficialBadge: 'அங்கீகரிக்கப்பட்ட அரசு ஆதாரம்',
    readyToApply: 'நீங்கள் தயாரா?'
  },
  en: {
    brandName: 'penmAI',
    brandSub: 'பெண்மை (Womanhood) + AI',
    tagline: 'Her Voice. Her Language. Her Access.',
    heroHeadline: "She doesn't know what to search. She doesn't need to.",
    heroSubheadline: 'She just speaks in her own mother tongue.',
    heroSpeechPrompt: 'What kind of help or support do you need?',
    startSpeaking: 'Start Speaking',
    stopSpeaking: 'Stop Speaking',
    listening: 'I am listening, please speak freely...',
    processing: 'Understanding your need, please wait...',
    typeNeed: 'Or type what you need in simple words',
    typePlaceholder: 'e.g. I need skill training to earn from home...',
    send: 'Send',
    orDivider: 'or',
    quickSamplesTitle: 'Tap any example to speak or test:',
    samples: [
      'I need a job or skill training. I have only basic school education.',
      'Can I get free training and toolkit to do tailoring from home?',
      'How can I get the monthly financial assistance for women heads of family?',
      'Can I get a small business loan without any property collateral?'
    ],
    iDontKnowButton: "❓ I don't know",
    iDontKnowExplanationTitle: "That's completely fine. Here is how you can find this answer:",
    matchedTitle: 'Most Relevant Government Support for You',
    whyThisFits: 'Why might this be relevant to you?',
    eligibilityTitle: 'Who is eligible? (Simple criteria)',
    documentsTitle: 'Required Document Readiness Checklist',
    actionStepsTitle: 'Next 4 Simple Steps You Should Take',
    officialSourceBtn: 'Open Official Government Portal',
    readAloud: 'Read Aloud (Voice)',
    stopAudio: 'Stop Audio',
    explainDocument: 'Why is this document needed?',
    howToFindDoc: 'Where can I find this?',
    nextStep: 'Next Step',
    tryDemoBtn: 'Try 60-Second Guided Demo',
    demoLabel: 'Judges 60-Second Quick Scenario',
    resetChat: 'Start Fresh Conversation',
    explainThisBtn: 'Digital Jargon Translator',
    explainThisTitle: 'Simple Explanations for Confusing Portal Terminology',
    explainThisSub: "Don't let complex digital words stop you. Tap any term to understand it in plain words.",
    trustBadge: 'Trust & Safety Assurance',
    trustSub: 'penmAI guides and empowers you. It does not make government decisions. Always verify on official portals.',
    privacyNotice: 'Your privacy is respected: Never enter passwords, OTPs, or bank PINs.',
    accessibilitySettings: 'Accessibility & Audio Settings',
    fontSize: 'Font Size',
    speechRate: 'Speech Speed',
    highContrast: 'High Contrast Mode',
    autoSpeak: 'Auto-read AI responses',
    close: 'Close',
    traditionalVsPenmaiTitle: 'Traditional Government Portal vs penmAI',
    traditionalPortal: 'Old Way: Human must adapt to system (Search → Understand → Fill → Submit)',
    penmaiWay: 'penmAI Way: System adapts to the woman (Speak → Understand → Guide → Access)',
    whyPenmaiTitle: 'Why penmAI?',
    impactTitle: 'From Digital Exclusion to Digital Independence',
    impactSubtitle: 'Bridging the last-mile digital literacy barrier with compassionate AI.',
    philosophyQuote: 'Digital inclusion is not achieved when a service is put online. It is achieved when a person who has never used the internet can independently use it.',
    disclaimerNotice: 'Always verify final eligibility and details on the official government website.',
    noMatchFallback: 'At this moment, no exact match was found in our curated records. You can visit the nearest e-Sevai or District office for personal assistance.',
    verifiedOfficialBadge: 'Verified Official Resource',
    readyToApply: 'Are you ready to take the next step?'
  },
  hi: {
    brandName: 'penmAI',
    brandSub: 'स्त्रीत्व + AI',
    tagline: 'उसकी आवाज़। उसकी भाषा। उसका अधिकार।',
    heroHeadline: 'उसे नहीं पता कि क्या खोजना है। उसे जानने की जरूरत भी नहीं है।',
    heroSubheadline: 'वह बस अपनी भाषा में बोल सकती है।',
    heroSpeechPrompt: 'आपको किस प्रकार की सहायता चाहिए?',
    startSpeaking: 'बोलना शुरू करें',
    stopSpeaking: 'बोलना समाप्त करें',
    listening: 'मैं सुन रही हूँ, कृपया बोलिए...',
    processing: 'समझ रही हूँ, प्रतीक्षा करें...',
    typeNeed: 'या अपनी आवश्यकता सरल शब्दों में लिखें',
    typePlaceholder: 'उदा. मुझे घर से काम करने के लिए सिलाई प्रशिक्षण चाहिए...',
    send: 'भेजें',
    orDivider: 'या',
    quickSamplesTitle: 'बोलने या परीक्षण के लिए उदाहरण:',
    samples: [
      'मुझे काम चाहिए। मेरी पढ़ाई ज्यादा नहीं हुई है। मुझे क्या सहायता मिलेगी?',
      'क्या मुझे घर पर सिलाई का काम करने के लिए प्रशिक्षण और उपकरण मिल सकते हैं?',
      'महिलाओं के लिए मासिक वित्तीय सहायता कैसे प्राप्त करें?',
      'क्या बिना किसी संपत्ति गारंटी के छोटा व्यवसाय ऋण मिल सकता है?'
    ],
    iDontKnowButton: '❓ मुझे नहीं पता',
    iDontKnowExplanationTitle: 'कोई बात नहीं, इसे कैसे पता करें मैं बताती हूँ:',
    matchedTitle: 'आपके लिए सबसे उपयुक्त सरकारी सहायता',
    whyThisFits: 'यह आपके लिए क्यों उपयुक्त हो सकता है?',
    eligibilityTitle: 'पात्रता की सरल शर्तें',
    documentsTitle: 'आवश्यक दस्तावेजों की सूची',
    actionStepsTitle: 'अगले 4 आसान कदम',
    officialSourceBtn: 'आधिकारिक सरकारी पोर्टल पर जाएं',
    readAloud: 'आवाज़ में सुनें',
    stopAudio: 'रोकें',
    explainDocument: 'यह दस्तावेज क्यों चाहिए?',
    howToFindDoc: 'यह कहाँ मिलेगा?',
    nextStep: 'अगला कदम',
    tryDemoBtn: '60 सेकंड का डेमो देखें',
    demoLabel: 'जजों के लिए 60 सेकंड का त्वरित परिदृश्य',
    resetChat: 'नई बातचीत शुरू करें',
    explainThisBtn: 'डिजिटल शब्दकोश (Explain Terms)',
    explainThisTitle: 'कठिन सरकारी व डिजिटल शब्दों का सरल अर्थ',
    explainThisSub: 'कठिन शब्दों से घबराएं नहीं। किसी भी शब्द पर टैप करके सरल भाषा में समझें।',
    trustBadge: 'विश्वसनीयता एवं सुरक्षा',
    trustSub: 'penmAI केवल मार्गदर्शन करता है, सरकारी निर्णय नहीं लेता।',
    privacyNotice: 'अपनी गोपनीयता सुरक्षित रखें: पासवर्ड, ओटीपी या बैंक पिन साझा न करें।',
    accessibilitySettings: 'पहुंच एवं आवाज़ सेटिंग्स',
    fontSize: 'अक्षर आकार',
    speechRate: 'बोलने की गति',
    highContrast: 'हाई कंट्रास्ट',
    autoSpeak: 'उत्तर स्वतः बोलकर सुनाएं',
    close: 'बंद करें',
    traditionalVsPenmaiTitle: 'पारंपरिक पोर्टल बनाम penmAI',
    traditionalPortal: 'पुराना तरीका: इंसान को सिस्टम सीखना पड़ता है (Search → Understand → Fill → Submit)',
    penmaiWay: 'penmAI तरीका: सिस्टम महिला को समझता है (Speak → Understand → Guide → Access)',
    whyPenmaiTitle: 'penmAI क्यों?',
    impactTitle: 'डिजिटल दूरी से डिजिटल स्वतंत्रता की ओर',
    impactSubtitle: 'बिना तकनीक ज्ञान वाली महिलाओं के लिए पहली आवाज़-आधारित पहुंच।',
    philosophyQuote: 'डिजिटल समावेशन केवल किसी सेवा को ऑनलाइन करने से नहीं होता। यह तब होता है जब एक व्यक्ति जिसने कभी इंटरनेट नहीं चलाया, वह भी स्वतंत्र रूप से इसका उपयोग कर सके।',
    disclaimerNotice: 'कृपया अंतिम पात्रता की पुष्टि आधिकारिक सरकारी पोर्टल पर करें।',
    noMatchFallback: 'वर्तमान में कोई सटीक योजना नहीं मिली। नजदीकी ई-सेवा केंद्र से संपर्क करें।',
    verifiedOfficialBadge: 'सत्यापित आधिकारिक स्रोत',
    readyToApply: 'क्या आप अगला कदम उठाने के लिए तैयार हैं?'
  }
};
