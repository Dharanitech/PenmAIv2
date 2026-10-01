import { JargonTerm } from '../types';

export const JARGON_TERMS: JargonTerm[] = [
  {
    id: 'beneficiary-id',
    term: 'Beneficiary ID',
    localizedTerm: {
      ta: 'பயனாளி எண் (Beneficiary ID)',
      en: 'Beneficiary ID',
      hi: 'लाभार्थी आईडी (Beneficiary ID)',
    },
    simpleExplanation: {
      ta: 'இது இந்த திட்டத்தில் பயன்பெறும் பெண்ணாக உங்களை அரசாங்கம் அடையாளம் காண வழங்கும் ஒரு தனிப்பட்ட பதிவு எண்.',
      en: 'A unique identification number assigned by the government so they can recognize your application and records.',
      hi: 'सरकार द्वारा आपको दी जाने वाली एक विशिष्ट संख्या जिससे योजना में आपकी पहचान होती है।',
    },
    realWorldExample: {
      ta: 'மருத்துவமனையில் உங்கள் மருத்துவ குறிப்புக்கு ஒரு எண் கொடுப்பது போல, அரசு திட்டத்தில் உங்கள் கணக்கிற்கு இந்த எண் தரப்படுகிறது.',
      en: 'Just like a hospital case sheet number, this number keeps track of your assistance status.',
      hi: 'जैसे अस्पताल में पर्ची का नंबर होता है, वैसे ही यह सरकारी योजना में आपका पहचान नंबर है।',
    },
    audioExplanation: {
      ta: 'பயனாளி எண் என்பது திட்டத்தில் உங்களை அடையாளம் காண அரசு வழங்கும் பிரத்யேக எண். இதை குறித்து வைத்துக்கொண்டால் போதும்.',
      en: 'Beneficiary ID is a unique tracking number given to you. Just keep it written down safely.',
      hi: 'लाभार्थी आईडी योजना में आपकी पहचान संख्या है। इसे सुरक्षित लिखकर रख लें।',
    }
  },
  {
    id: 'upload-document',
    term: 'Upload Supporting Document',
    localizedTerm: {
      ta: 'ஆவணம் பதிவேற்றம் (Upload Document)',
      en: 'Upload Supporting Document',
      hi: 'दस्तावेज अपलोड करें (Upload Document)',
    },
    simpleExplanation: {
      ta: 'உங்கள் ஆதார் அல்லது ரேஷன் கார்டை செல்போனில் புகைப்படம் எடுத்து, இணையதள படிவத்தில் இணைக்கும் எளிய செயல்.',
      en: 'Taking a clear photo of your paper certificate or card and attaching it to the digital form.',
      hi: 'अपने आधार या राशन कार्ड की फोटो खींचकर कंप्यूटर फॉर्म में जोड़ना।',
    },
    realWorldExample: {
      ta: 'தபாலில் ஒரு கடிதத்துடன் சான்றிதழ் நகலை இணைத்து அனுப்புவது போன்றது இது. இ-சேவை மையத்தில் அவர்களே படம் எடுத்து அனுப்பிவிடுவார்கள்.',
      en: 'Like stapling a photocopy to a paper application. If you visit an e-Sevai center, the operator does it for you.',
      hi: 'जैसे डाक से फॉर्म भेजते समय फोटोकॉपी नत्थी करते हैं, वैसे ही कंप्यूटर पर फोटो जोड़ना। ई-सेवा केंद्र पर कर्मचारी यह कर देते हैं।',
    },
    audioExplanation: {
      ta: 'ஆவணம் பதிவேற்றம் என்பது உங்கள் ஆதார் அல்லது ரேஷன் கார்டை படம் பிடித்து கணினியில் சேர்ப்பது. இ-சேவை மையத்தில் இதை அவர்களே செய்து தருவார்கள்.',
      en: 'Uploading simply means attaching a photo of your document. e-Sevai staff will do it for you.',
      hi: 'दस्तावेज अपलोड का मतलब है अपने कागज की फोटो जोड़ना। केंद्र वाले इसे आसानी से कर देते हैं।',
    }
  },
  {
    id: 'application-status',
    term: 'Application Status',
    localizedTerm: {
      ta: 'விண்ணப்ப நிலை (Application Status)',
      en: 'Application Status',
      hi: 'आवेदन की स्थिति (Application Status)',
    },
    simpleExplanation: {
      ta: 'நீங்கள் கொடுத்த விண்ணப்பம் இப்போது எந்த அரசு அதிகாரியிடம் உள்ளது, ஏற்கப்பட்டுவிட்டதா என்பதை அறிந்துகொள்ளும் வழி.',
      en: 'Checking whether your request is currently pending, approved, or under field verification.',
      hi: 'यह देखना कि आपका आवेदन स्वीकार हुआ है या अभी जांच चल रही है।',
    },
    realWorldExample: {
      ta: 'அனுப்பிய பார்சல் அல்லது தபால் எங்கு போய்ச் சேர்ந்திருக்கிறது என்று விசாரிப்பது போன்றது.',
      en: 'Similar to tracking where a registered post parcel has reached along the road.',
      hi: 'जैसे डाक या पार्सल की स्थिति देखते हैं कि वह कहाँ पहुँचा है।',
    },
    audioExplanation: {
      ta: 'விண்ணப்ப நிலை என்பது உங்கள் மனு ஏற்கப்பட்டதா அல்லது பரிசீலனையில் உள்ளதா என்பதை காட்டும் தகவல்.',
      en: 'Application status shows if your request is approved or still being reviewed.',
      hi: 'यह बताता है कि आपका फॉर्म पास हो गया या अभी जांच में है।',
    }
  },
  {
    id: 'annual-income',
    term: 'Annual Family Income',
    localizedTerm: {
      ta: 'ஆண்டு வருமானம் (Annual Income)',
      en: 'Annual Family Income',
      hi: 'वार्षिक पारिवारिक आय (Annual Income)',
    },
    simpleExplanation: {
      ta: 'உங்கள் வீட்டில் உள்ள அனைவரும் சேர்ந்து ஒரு முழு வருடத்தில் (12 மாதங்களில்) சம்பாதிக்கும் மொத்த உத்தேச தொகை.',
      en: 'The combined approximate earnings of all earning members of your household across a 12-month period.',
      hi: 'आपके परिवार के सभी कमाने वाले सदस्यों की 12 महीनों की कुल अनुमानित कमाई।',
    },
    realWorldExample: {
      ta: 'மாதத்திற்கு ₹10,000 வருமானம் வருகிறது என்றால், 12 மாதங்களுக்கு ₹1,20,000 என்பது உங்கள் ஆண்டு வருமானம்.',
      en: 'If a household earns around ₹10,000 monthly, the annual income is roughly ₹1,20,000.',
      hi: 'यदि महीने में लगभग ₹10,000 मिलते हैं, तो साल की आय लगभग ₹1,20,000 हुई।',
    },
    audioExplanation: {
      ta: 'வருமானம் சரியாக தெரியாவிட்டால் கவலைப்பட வேண்டாம். உங்கள் கிராம நிர்வாக அலுவலர் தரும் வருமானச் சான்றிதழில் உள்ள தொகையே கணக்கில் எடுத்துக்கொள்ளப்படும்.',
      en: 'If you are unsure of the exact figure, don’t worry. The amount stated in your Village Administrative Officer income certificate is used.',
      hi: 'सही आय नहीं मालूम तो चिंता न करें, आय प्रमाण पत्र में जो राशि लिखी होती है वही मानी जाती है।',
    }
  },
  {
    id: 'direct-benefit-transfer',
    term: 'Direct Benefit Transfer (DBT)',
    localizedTerm: {
      ta: 'நேரடி வங்கி பணப்பரிமாற்றம் (DBT)',
      en: 'Direct Benefit Transfer (DBT)',
      hi: 'प्रत्यक्ष लाभ अंतरण (DBT)',
    },
    simpleExplanation: {
      ta: 'அரசு உதவித்தொகை எந்த இடைத்தரகரும் இல்லாமல், நேரடியாக உங்கள் சொந்த வங்கி கணக்கில் வந்து சேரும் பாதுகாப்பான முறை.',
      en: 'Government assistance credited directly to your bank account without any middlemen taking a cut.',
      hi: 'सरकारी सहायता राशि बिना किसी बिचौलिए के सीधे आपके बैंक खाते में आने की सुरक्षित प्रणाली।',
    },
    realWorldExample: {
      ta: 'கலைஞர் மகளிர் உரிமைத் தொகையான ₹1,000 ஒவ்வொரு மாதமும் உங்கள் வங்கிக் கணக்கில் நேரடியாக வரவு வைக்கப்படுவது இதன் மூலமே.',
      en: 'Like how the ₹1,000 monthly assistance arrives safely directly into your bank passbook.',
      hi: 'जैसे हर महीने योजना के पैसे सीधे आपकी पासबुक में बिना किसी कटौती के जमा होते हैं।',
    },
    audioExplanation: {
      ta: 'டி.பி.டி என்பது அரசு பணம் யாரிடமும் போகாமல் நேரடியாக உங்கள் வங்கி கணக்கிற்கு வரும் முறையாகும்.',
      en: 'DBT ensures funds reach your own bank account directly and securely.',
      hi: 'डीबीटी का अर्थ है सरकारी पैसे का सीधे आपके खाते में आना।',
    }
  },
  {
    id: 'aadhaar-otp',
    term: 'Aadhaar Seeding / OTP',
    localizedTerm: {
      ta: 'ஆதார் இணைப்பு & ஓடிபி (OTP)',
      en: 'Aadhaar Seeding / OTP Verification',
      hi: 'आधार लिंक और ओटीपी (OTP)',
    },
    simpleExplanation: {
      ta: 'உங்கள் செல்போன் எண்ணிற்கு வரும் 6 இலக்க ரகசிய குறியீட்டை உறுதி செய்து, நீங்கள் தான் உண்மையான விண்ணப்பதாரர் என்று அரசு அறிந்து கொள்ளும் முறை.',
      en: 'A 6-digit verification code sent to your phone to confirm your identity securely.',
      hi: 'आपके फोन पर आने वाला 6 अंकों का गुप्त कोड जिससे आपकी पहचान सत्यापित होती है।',
    },
    realWorldExample: {
      ta: 'கையொப்பம் இடுவதற்கு பதிலாக, செல்போனுக்கு வரும் எண்ணை சொல்வது போன்ற எளிய பாதுகாப்பு வழி.',
      en: 'Like a digital signature through your personal mobile phone.',
      hi: 'हस्ताक्षर की जगह मोबाइल पर आए कोड से पहचान पक्की करना।',
    },
    audioExplanation: {
      ta: 'ஓடிபி என்பது உங்கள் அடையாளத்தை உறுதி செய்ய போனுக்கு வரும் 6 எண் குறியீடு. இதை அரசு அதிகாரியிடம் மட்டுமே சரிபார்க்க வேண்டும்.',
      en: 'OTP is a 6-digit confirmation code. Only share it on verified government counters.',
      hi: 'ओटीपी आपके फोन पर आने वाला 6 अंकों का कोड है। इसे केवल सरकारी काउंटर पर ही बताएं।',
    }
  }
];
