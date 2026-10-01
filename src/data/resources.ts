import { GovResource } from '../types';

export const GOV_RESOURCES: GovResource[] = [
  {
    id: 'tnsdc-skills',
    category: 'employment_skills',
    badge: {
      ta: '💼 இலவச திறன் பயிற்சி & வேலைவாய்ப்பு',
      en: '💼 Free Skill Training & Job Placement',
      hi: '💼 निःशुल्क कौशल प्रशिक्षण एवं रोजगार',
    },
    name: {
      ta: 'தமிழ்நாடு திறன் மேம்பாட்டு கழகம் (TNSDC) & மகளிர் வாழ்வாதார பயிற்சி',
      en: 'Tamil Nadu Skill Development Mission (TNSDC) - Women Livelihood Skills',
      hi: 'तमिलनाडु कौशल विकास मिशन (TNSDC) - महिला आजीविका कौशल',
    },
    department: {
      ta: 'தொழிலாளர் நலன் மற்றும் திறன் மேம்பாட்டுத் துறை, தமிழ்நாடு அரசு',
      en: 'Department of Labour Welfare and Skill Development, Govt. of Tamil Nadu',
      hi: 'श्रम कल्याण और कौशल विकास विभाग, तमिलनाडु सरकार',
    },
    simpleSummary: {
      ta: 'வீட்டில் இருக்கும் பெண்கள் இலவசமாக தையல், நர்சிங் உதவி, கணினி தரவுப் பதிவு போன்ற பயனுள்ள வேலை வாய்ப்பு திறன்களை கற்றுக்கொண்டு வேலை பெற உதவும் அரசு திட்டம்.',
      en: 'A government program helping homemakers and women learn in-demand skills like tailoring, healthcare assistant, and computer work for free, with recognized certificates and job assistance.',
      hi: 'घर पर रहने वाली महिलाओं को सिलाई, नर्सिंग सहायता और कंप्यूटर कार्य जैसे उपयोगी कौशल मुफ्त में सीखने और रोजगार पाने में मदद करने वाली सरकारी योजना।',
    },
    whyRelevant: {
      ta: 'நீங்கள் வீட்டில் இருந்து சொந்த காலில் நிற்க விரும்புகிறீர்கள். படிப்பு குறைவாக இருந்தாலும், உங்களுக்கு பொருத்தமான எளிய பயிற்சி இதில் இலவசமாக கிடைக்கும்.',
      en: 'You want to earn independently from home or nearby. Even with basic school education, you get hands-on free training with no fees.',
      hi: 'आप आत्मनिर्भर बनना चाहती हैं। बुनियादी शिक्षा के साथ भी, आपको बिना किसी शुल्क के व्यावहारिक प्रशिक्षण और प्रमाण पत्र मिलता है।',
    },
    targetUser: {
      ta: '18 முதல் 45 வயது வரை உள்ள பெண்கள், இல்லத்தரசிகள், வேலை தேடுபவர்கள்',
      en: 'Women aged 18 to 45, homemakers, first-time job seekers',
      hi: '18 से 45 वर्ष की महिलाएं, गृहिणियां, पहली बार रोजगार तलाशने वाली महिलाएं',
    },
    eligibility: {
      ta: [
        'தமிழ்நாட்டில் வசிப்பவராக இருக்க வேண்டும்',
        'வயது 18 முதல் 45 வரை',
        'பள்ளிக் கல்வி (5-ஆம் வகுப்பு / 8-ஆம் வகுப்பு / 10-ஆம் வகுப்பு) போதுமானது',
        'முன் பணி அனுபவம் தேவையில்லை; ஆரம்ப நிலையில் இருந்து கற்றுத்தரப்படும்'
      ],
      en: [
        'Must be a resident of Tamil Nadu',
        'Age between 18 and 45 years',
        'School level education (5th / 8th / 10th pass or fail) is accepted',
        'No prior work experience required; beginners are fully welcome'
      ],
      hi: [
        'तमिलनाडु का स्थायी निवासी होना चाहिए',
        'आयु 18 से 45 वर्ष के बीच',
        'स्कूली शिक्षा (5वीं/8वीं/10वीं) पर्याप्त है',
        'पूर्व कार्य अनुभव की आवश्यकता नहीं है'
      ]
    },
    documents: [
      {
        id: 'aadhaar',
        name: { ta: 'ஆதார் அட்டை', en: 'Aadhaar Card', hi: 'आधार कार्ड' },
        description: {
          ta: 'உங்கள் பெயர், முகவரி மற்றும் வயதை உறுதி செய்யும் அடையாள அட்டை.',
          en: 'Proof of identity, age, and local residential address.',
          hi: 'पहचान, आयु और पते का प्रमाण पत्र।'
        },
        howToFind: {
          ta: 'உங்களிடம் உள்ள அசல் ஆதார் அட்டை அல்லது ஜெராக்ஸ் நகல் போதுமானது.',
          en: 'Original Aadhaar card or a photocopy is sufficient.',
          hi: 'मूल आधार कार्ड या फोटोकॉपी पर्याप्त है।'
        },
        isMandatory: true,
      },
      {
        id: 'smart-card',
        name: { ta: 'குடும்ப அட்டை (Smart Ration Card)', en: 'Family Ration Card', hi: 'राशन कार्ड' },
        description: {
          ta: 'உங்கள் குடும்பத்தின் இருப்பிடத்தை உறுதி செய்ய தேவைப்படுகிறது.',
          en: 'Verifies your family residence within Tamil Nadu.',
          hi: 'परिवार के निवास प्रमाण के लिए आवश्यक है।'
        },
        howToFind: {
          ta: 'ரேஷன் கடையில் வாங்கிய குடும்ப அட்டை அல்லது TNPDS அட்டை.',
          en: 'Your Tamil Nadu digital smart ration card.',
          hi: 'आपका पारिवारिक राशन कार्ड।'
        },
        isMandatory: true,
      },
      {
        id: 'bank-passbook',
        name: { ta: 'வங்கி கணக்கு புத்தகம்', en: 'Bank Passbook Copy', hi: 'बैंक पासबुक' },
        description: {
          ta: 'பயிற்சி உதவித்தொகை அல்லது சான்றிதழ் கட்டணம் பெற உங்கள் சொந்த வங்கிக் கணக்கு.',
          en: 'Your bank account front page for attendance stipends or DBT assistance.',
          hi: 'प्रशिक्षण वजीफा प्राप्त करने के लिए आपका व्यक्तिगत बैंक खाता।'
        },
        howToFind: {
          ta: 'உங்கள் பெயரில் உள்ள தேசியமயமாக்கப்பட்ட அல்லது கூட்டுறவு வங்கி கணக்குப் புத்தகம்.',
          en: 'First page of your bank passbook showing account number and IFSC code.',
          hi: 'बैंक पासबुक का पहला पन्ना जिसमें खाता संख्या और IFSC कोड हो।'
        },
        isMandatory: false,
      },
      {
        id: 'photo',
        name: { ta: '2 பாஸ்போர்ட் அளவு புகைப்படம்', en: '2 Passport-size Photos', hi: '2 पासपोर्ट फोटो' },
        description: {
          ta: 'மாணவர் அடையாள அட்டை மற்றும் சான்றிதழுக்காக.',
          en: 'For your student ID and government training certificate.',
          hi: 'प्रशिक्षण पहचान पत्र एवं प्रमाण पत्र के लिए।'
        },
        howToFind: {
          ta: 'அருகிலுள்ள புகைப்பட கடையில் எளிதாக எடுத்துக்கொள்ளலாம்.',
          en: 'Any recent passport photo taken at a nearby studio.',
          hi: 'नजदीकी स्टूडियो में खींची गई कोई भी हालिया फोटो।'
        },
        isMandatory: true,
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          ta: 'ஆவணங்களை கையில் தயார் செய்து வைத்துக்கொள்ளுங்கள்',
          en: 'Keep your documents ready',
          hi: 'अपने दस्तावेज तैयार रखें',
        },
        description: {
          ta: 'ஆதார் அட்டை, குடும்ப அட்டை நகல் மற்றும் 2 புகைப்படங்களை ஒரு உறையில் எடுத்து வைத்துக்கொள்ளுங்கள்.',
          en: 'Keep your Aadhaar card, ration card photocopy, and 2 passport photos ready in an envelope.',
          hi: 'आधार कार्ड, राशन कार्ड की प्रति और 2 पासपोर्ट फोटो तैयार रखें।'
        },
        audioHint: {
          ta: 'முதலில் உங்கள் ஆதார் மற்றும் ரேஷன் கார்டை மட்டும் கையில் எடுத்து வைத்துக்கொள்ளுங்கள்.',
          en: 'First, just keep your Aadhaar and Ration card in hand.',
          hi: 'पहले केवल अपना आधार और राशन कार्ड पास रख लें।'
        }
      },
      {
        stepNumber: 2,
        title: {
          ta: 'அருகிலுள்ள அரசு திறன் மையத்தை தெரிந்துகொள்ளுங்கள்',
          en: 'Locate your nearest Govt Skill Center',
          hi: 'नजदीकी सरकारी कौशल केंद्र का पता लगाएं',
        },
        description: {
          ta: 'உங்கள் மாவட்ட ஆட்சியர் அலுவலகம் அல்லது தாலுகா அலுவலகத்தில் உள்ள மகளிர் திட்ட அலுவலகம் (TNCDW/TNSDC) மூலம் அருகிலுள்ள இலவச பயிற்சி மைய முகவரியைப் பெறலாம்.',
          en: 'Find the nearest accredited center through your District Collectorate, Taluk office, or Naan Mudhalvan portal.',
          hi: 'जिला कलेक्ट्रेट या नजदीकी केंद्र से मुफ्त प्रशिक्षण केंद्र की जानकारी प्राप्त करें।'
        },
        audioHint: {
          ta: 'உங்கள் ஊரில் எங்கு பயிற்சி நடக்கிறது என்பதை நாங்கள் காட்டும் இணையதளத்தில் அல்லது தாலுகா அலுவலகத்தில் பார்க்கலாம்.',
          en: 'You can check the training location on the portal or visit your Taluk office.',
          hi: 'आप पोर्टल पर या अपने ब्लॉक कार्यालय में जाकर केंद्र जान सकते हैं।'
        }
      },
      {
        stepNumber: 3,
        title: {
          ta: 'இலவச சேர்க்கை படிவத்தை பூர்த்தி செய்யுங்கள்',
          en: 'Fill the free admission form',
          hi: 'निःशुल्क आवेदन फॉर्म भरें',
        },
        description: {
          ta: 'மையத்தில் எளிய தமிழ் விண்ணப்பப் படிவத்தை வழங்குவார்கள். தெரியாத தகவல்களை அங்குள்ள பெண் பயிற்றுநர்கள் உங்களுக்கு எழுதி உதவுவார்கள்.',
          en: 'A simple admission form will be provided. The staff at the center will help you fill it if you need assistance.',
          hi: 'केंद्र पर सरल फॉर्म मिलेगा। वहां मौजूद सहायक कर्मचारी आपको भरने में पूरी मदद करेंगे।'
        },
        audioHint: {
          ta: 'படிவத்தை நிரப்ப தெரியாவிட்டால் கவலைப்பட வேண்டாம், மையத்தில் உள்ளவர்கள் உங்களுக்கு உதவுவார்கள்.',
          en: 'Do not worry about form filling; counselors at the center will guide you.',
          hi: 'फॉर्म भरने में कोई परेशानी हो तो केंद्र के साथी पूरी मदद करेंगे।'
        }
      },
      {
        stepNumber: 4,
        title: {
          ta: 'பயிற்சியில் சேர்ந்து அரசு சான்றிதழ் பெறுங்கள்',
          en: 'Attend training & receive Govt Certificate',
          hi: 'प्रशिक्षण पूरा करें और प्रमाण पत्र प्राप्त करें',
        },
        description: {
          ta: 'பயிற்சி காலம் முடிந்ததும் தமிழ்நாடு அரசின் அங்கீகரிக்கப்பட்ட சான்றிதழ் மற்றும் வேலைவாய்ப்பு முகாம் மூலம் வேலை உதவி கிடைக்கும்.',
          en: 'Upon completion, receive a recognized Govt certificate and direct job placement support in local enterprises.',
          hi: 'प्रशिक्षण पूर्ण होने पर सरकारी प्रमाण पत्र और रोजगार सहायता प्राप्त करें।'
        },
        audioHint: {
          ta: 'சான்றிதழ் பெற்றவுடன் நீங்கள் சொந்தமாகவோ அல்லது நிறுவனங்களிலோ பணிபுரிய முடியும்.',
          en: 'With this certificate, you can work independently from home or join an organization.',
          hi: 'प्रमाण पत्र मिलने के बाद आप घर से या किसी संस्थान में काम कर सकेंगी।'
        }
      }
    ],
    officialUrl: 'https://www.naanmudhalvan.tn.gov.in',
    officialPortalName: 'TNSDC / Naan Mudhalvan Portal',
    disclaimer: {
      ta: 'இது தமிழ்நாடு அரசின் அதிகாரப்பூர்வ தகவல்களை அடிப்படையாகக் கொண்டது. தற்போதைய இடங்கள் மற்றும் சேர்க்கை விவரங்களை அதிகாரப்பூர்வ தளத்தில் சரிபார்க்கவும்.',
      en: 'Based on official Government of Tamil Nadu guidelines. Please verify current batch availability and centers on the official portal.',
      hi: 'तमिलनाडु सरकार की आधिकारिक जानकारी पर आधारित। बैच उपलब्धता की जांच आधिकारिक पोर्टल पर करें।'
    },
    supportHelpline: '1800-425-6226 (Toll-Free Tamil Nadu Skill Helpline)'
  },
  {
    id: 'magalir-urimai',
    category: 'financial_support',
    badge: {
      ta: '🪙 மாதாந்திர உரிமைத் தொகை ₹1,000',
      en: '🪙 Monthly Basic Support ₹1,000',
      hi: '🪙 मासिक अधिकार राशि ₹1,000',
    },
    name: {
      ta: 'கலைஞர் மகளிர் உரிமைத் திட்டம் (KMUT)',
      en: 'Kalaignar Magalir Urimai Thittam (Women Basic Income Scheme)',
      hi: 'कलैग्नार महिला अधिकार योजना (KMUT)',
    },
    department: {
      ta: 'சிறப்பு திட்ட செயலாக்கத் துறை, தமிழ்நாடு அரசு',
      en: 'Special Programme Implementation Department, Govt. of Tamil Nadu',
      hi: 'विशेष कार्यक्रम क्रियान्वयन विभाग, तमिलनाडु सरकार',
    },
    simpleSummary: {
      ta: 'குடும்பத் தலைவிகளுக்கு மாதந்தோறும் ₹1,000 அவர்களது வங்கிக் கணக்கில் நேரடியாக வழங்கப்பட்டு குடும்பச் சுமையை குறைக்கும் உன்னத திட்டம்.',
      en: 'Direct benefit transfer of ₹1,000 per month directly into the bank accounts of women heads of eligible households to recognize their unpaid care work.',
      hi: 'पात्र परिवारों की महिला मुखियाओं के बैंक खाते में सीधे ₹1,000 प्रति माह प्रदान करने वाली ऐतिहासिक योजना।',
    },
    whyRelevant: {
      ta: 'குடும்ப செலவுகளுக்கு மாதாந்திர நிதி உதவி தேவைப்படும் பெண்களுக்கு இது மிகப்பெரிய ஆதரவாக இருக்கும்.',
      en: 'Provides essential monthly financial security directly into your bank account with zero middlemen.',
      hi: 'बिचौलियों के बिना सीधे आपके खाते में मासिक वित्तीय सहायता प्रदान करता है।',
    },
    targetUser: {
      ta: '21 வயது நிரம்பிய குடும்பத் தலைவிகள், ஆதரவற்ற பெண்கள், முதிய பெண்கள்',
      en: 'Women heads of household aged 21 and above residing in Tamil Nadu',
      hi: '21 वर्ष या उससे अधिक आयु की महिला मुखिया',
    },
    eligibility: {
      ta: [
        'விண்ணப்பிக்கும் பெண் 21 வயது பூர்த்தியடைந்தவராக இருக்க வேண்டும்',
        'குடும்பத்தின் ஆண்டு வருமானம் ₹2.5 லட்சத்திற்குள் இருக்க வேண்டும்',
        'குடும்பத்தில் 5 ஏக்கருக்கு குறைவான நன்செய் நிலம் அல்லது 10 ஏக்கருக்கு குறைவான புன்செய் நிலம்',
        'வீட்டு மின்சார நுகர்வு ஆண்டிற்கு 3600 யூனிட்டுக்கு குறைவாக இருக்க வேண்டும்'
      ],
      en: [
        'Applicant must have completed 21 years of age',
        'Annual household income should be below ₹2.5 Lakhs',
        'Landholding should be less than 5 acres (wetland) or 10 acres (dryland)',
        'Household electricity consumption below 3,600 units per year'
      ],
      hi: [
        'महिला की आयु 21 वर्ष पूरी होनी चाहिए',
        'वार्षिक पारिवारिक आय ₹2.5 लाख से कम हो',
        'घर की बिजली खपत 3600 यूनिट प्रति वर्ष से कम हो'
      ]
    },
    documents: [
      {
        id: 'aadhaar',
        name: { ta: 'ஆதார் அட்டை', en: 'Aadhaar Card', hi: 'आधार कार्ड' },
        description: { ta: 'குடும்பத் தலைவியின் ஆதார் அட்டை.', en: 'Woman head of household Aadhaar.', hi: 'महिला मुखिया का आधार।' },
        howToFind: { ta: 'உங்கள் அசல் ஆதார் அட்டை.', en: 'Original card.', hi: 'मूल आधार कार्ड।' },
        isMandatory: true,
      },
      {
        id: 'smart-card',
        name: { ta: 'ஸ்மார்ட் குடும்ப அட்டை', en: 'Smart Family Ration Card', hi: 'स्मार्ट राशन कार्ड' },
        description: { ta: 'குடும்பத் தலைவி பெயர் உள்ள ரேஷன் அட்டை.', en: 'Ration card listing woman as head.', hi: 'राशन कार्ड।' },
        howToFind: { ta: 'உங்கள் நியாயவிலைக்கடை அட்டை.', en: 'Your TN digital ration card.', hi: 'आपका राशन कार्ड।' },
        isMandatory: true,
      },
      {
        id: 'bank-passbook',
        name: { ta: 'ஆதாருடன் இணைக்கப்பட்ட வங்கிக் கணக்கு', en: 'Aadhaar-Linked Bank Account', hi: 'आधार से जुड़ा बैंक खाता' },
        description: { ta: '₹1,000 நேரடியாக வரவு வைக்கப்பட ஆதார் எண் இணைக்கப்பட்ட வங்கி பாஸ்புக்.', en: 'Passbook of bank account seeded with Aadhaar.', hi: 'आधार लिंक बैंक पासबुक।' },
        howToFind: { ta: 'அஞ்சலக சேமிப்பு வங்கி அல்லது வணிக வங்கி கணக்கு.', en: 'Post office bank or commercial bank.', hi: 'डाकघर या बैंक पासबुक।' },
        isMandatory: true,
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { ta: 'குடும்ப அட்டையை சரிபார்க்கவும்', en: 'Check your family card', hi: 'अपना राशन कार्ड देखें' },
        description: { ta: 'உங்கள் குடும்ப அட்டையில் உங்கள் பெயர் குடும்பத் தலைவியாக இருப்பதை உறுதி செய்யவும்.', en: 'Confirm your name is listed as head or woman member.', hi: 'सुनिश्चित करें कि राशन कार्ड में आपका नाम दर्ज है।' },
        audioHint: { ta: 'உங்கள் ரேஷன் அட்டையை எடுத்து அதில் உள்ள பெயர்களை சரிபார்க்கவும்.', en: 'Check your ration card to confirm woman member details.', hi: 'राशन कार्ड में विवरण देखें।' }
      },
      {
        stepNumber: 2,
        title: { ta: 'இ-சேவை அல்லது சிறப்பு முகாமிற்கு செல்லவும்', en: 'Visit nearest e-Sevai / Camp', hi: 'नजदीकी ई-सेवा केंद्र जाएं' },
        description: { ta: 'உங்கள் கிராம நிர்வாக அலுவலர் (VAO) அல்லது நியாயவிலைக் கடைக்கு அருகிலுள்ள இ-சேவை மையத்தில் கைரேகை பதிவு மூலம் விண்ணப்பிக்கலாம்.', en: 'Apply via the bio-metric verification camp or government e-Sevai centre.', hi: 'ई-सेवा केंद्र पर जाकर बायोमेट्रिक से आवेदन करें।' },
        audioHint: { ta: 'அருகிலுள்ள இ-சேவை மையத்திற்கு உங்கள் ரேஷன் கார்டுடன் செல்லுங்கள்.', en: 'Go to the nearest e-Sevai center with your ration card.', hi: 'राशन कार्ड लेकर नजदीकी ई-सेवा केंद्र पर जाएं।' }
      },
      {
        stepNumber: 3,
        title: { ta: 'விண்ணப்ப ஏற்பு & வங்கி வரவு', en: 'Approval & monthly transfer', hi: 'स्वीकृति और मासिक जमा' },
        description: { ta: 'விண்ணப்பம் பரிசீலிக்கப்பட்டு, மாதந்தோறும் 15-ஆம் தேதி உங்கள் கணக்கில் ₹1,000 நேரடியாக செலுத்தப்படும்.', en: 'Once verified, ₹1,000 is directly deposited every month on the 15th.', hi: 'सत्यापन के बाद हर महीने ₹1,000 सीधे खाते में आएंगे।' },
        audioHint: { ta: 'தொகை உங்கள் கணக்கிற்கு வந்தவுடன் உங்கள் மொபைலுக்கு குறுஞ்செய்தி வரும்.', en: 'You will receive an SMS alert when money is credited.', hi: 'पैसे जमा होने पर मोबाइल पर एसएमएस मिलेगा।' }
      }
    ],
    officialUrl: 'https://kmut.tn.gov.in',
    officialPortalName: 'KMUT Official Government Portal',
    disclaimer: {
      ta: 'இறுதி தகுதி மற்றும் ஒப்புதல் வருவாய்த்துறை கள ஆய்வின் அடிப்படையில் தமிழ்நாடு அரசால் தீர்மானிக்கப்படும்.',
      en: 'Final verification and sanction is subject to Tamil Nadu Revenue Department guidelines.',
      hi: 'अंतिम स्वीकृति राजस्व विभाग के सत्यापन पर निर्भर करती है।'
    },
    supportHelpline: '044-25619222 (KMUT Helpline)'
  },
  {
    id: 'pm-vishwakarma',
    category: 'entrepreneurship',
    badge: {
      ta: '🪡 கைவினைக் கலைஞர் & தையல் திட்டம்',
      en: '🪡 Traditional Artisans & Tailoring Scheme',
      hi: '🪡 पारंपरिक शिल्पकार एवं सिलाई योजना',
    },
    name: {
      ta: 'பிரதமர் விஸ்வகர்மா திட்டம் (தையல் & கைவினைப் பெண்கள் உதவி)',
      en: 'PM Vishwakarma Scheme for Women Artisans & Tailors (Darzi)',
      hi: 'पीएम विश्वकर्मा योजना (महिला दर्जी एवं शिल्पकार)',
    },
    department: {
      ta: 'மத்திய குறு, சிறு மற்றும் நடுத்தர தொழில் அமைச்சகம்',
      en: 'Ministry of Micro, Small and Medium Enterprises, Govt. of India',
      hi: 'सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय, भारत सरकार',
    },
    simpleSummary: {
      ta: 'வீட்டிலேயே தையல் தைக்கும் பெண்கள், கூடை முடைபவர்கள், பொம்மை செய்பவர்களுக்கு 5 நாள் இலவச பயிற்சி, ஒரு நாளுக்கு ₹500 உதவித்தொகை, ₹15,000 மதிப்புள்ள இலவச தையல் இயந்திரம்/கருவிகள் கூப்பன் மற்றும் எளிய கடன் வழங்கும் திட்டம்.',
      en: 'Offers women tailors, basket makers, and craftswomen 5 days free training with ₹500/day stipend, a ₹15,000 modern toolkit e-voucher, and collateral-free loans at 5% interest.',
      hi: 'सिलाई करने वाली महिलाओं और शिल्पकारों को 5 दिन का मुफ्त प्रशिक्षण, ₹500/दिन वजीफा, ₹15,000 का टूलकिट वाउचर और कम ब्याज पर ऋण।',
    },
    whyRelevant: {
      ta: 'தையல் அல்லது பாரம்பரிய கைவினை மூலம் சொந்தமாக வருமானம் ஈட்ட விரும்பும் பெண்களுக்கு புதிய கருவிகளும் நிதி உதவியும் கிடைக்கும்.',
      en: 'Perfect if you already sew or make handicrafts and want modern equipment and working capital without any property mortgage.',
      hi: 'यदि आप सिलाई या हस्तशिल्प से कमाना चाहती हैं तो नई मशीन और वित्तीय सहायता मिलती है।',
    },
    targetUser: {
      ta: '18 வயதுக்கு மேற்பட்ட தையல் கலைஞர்கள், கைவினைஞர்கள், சுயதொழில் பெண்கள்',
      en: 'Traditional craftswomen, tailors (darzi), basket weavers aged 18+',
      hi: 'पारंपरिक महिला दर्जी और शिल्पकार',
    },
    eligibility: {
      ta: [
        'பாரம்பரிய கைவினை அல்லது தையல் வேலையில் ஈடுபாடு கொண்டிருக்க வேண்டும்',
        'விண்ணப்பிக்கும் போது வயது 18 பூர்த்தியடைந்திருக்க வேண்டும்',
        'குடும்பத்தில் ஒருவர் மட்டுமே இத்திட்டத்தில் பயன்பெற முடியும்',
        'அரசு ஊழியர்கள் குடும்பத்திற்கு பொருந்தாது'
      ],
      en: [
        'Must be engaged in traditional craft or tailoring trade',
        'Minimum age of 18 years',
        'One benefit per household',
        'No government employees in the family'
      ],
      hi: [
        'पारंपरिक शिल्प या सिलाई से जुड़ी हों',
        'न्यूनतम आयु 18 वर्ष',
        'परिवार में एक सदस्य को लाभ'
      ]
    },
    documents: [
      {
        id: 'aadhaar',
        name: { ta: 'ஆதார் அட்டை & இணைக்கப்பட்ட மொபைல்', en: 'Aadhaar & linked mobile', hi: 'आधार और मोबाइल नंबर' },
        description: { ta: 'ஓடிபி (OTP) பெற ஆதார் கார்டுடன் போன் நம்பர் இணைக்கப்பட்டிருக்க வேண்டும்.', en: 'Active mobile number to receive verification OTP.', hi: 'ओटीपी के लिए मोबाइल जुड़ा आधार।' },
        howToFind: { ta: 'உங்கள் மொபைல் போன் மற்றும் ஆதார்.', en: 'Your mobile phone.', hi: 'आपका फोन।' },
        isMandatory: true,
      },
      {
        id: 'bank-passbook',
        name: { ta: 'வங்கி பாஸ்புக்', en: 'Bank Passbook', hi: 'बैंक पासबुक' },
        description: { ta: '₹15,000 கருவி கூப்பன் மற்றும் உதவித்தொகை வரவு வைக்க.', en: 'To receive training stipend and toolkit voucher.', hi: 'वजीफा व टूलकिट राशि के लिए।' },
        howToFind: { ta: 'உங்கள் வங்கிக் கணக்கு புத்தகம்.', en: 'Your bank passbook.', hi: 'पासबुक।' },
        isMandatory: true,
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { ta: 'பொது சேவை மையத்தில் (CSC) பதிவு', en: 'Register at CSC / e-Sevai', hi: 'सीएससी केंद्र पर पंजीकरण' },
        description: { ta: 'அருகிலுள்ள பொது சேவை மையத்திற்கு சென்று தையல் (Darzi) பிரிவில் இலவசமாக கைரேகை வைத்து பதிவு செய்யுங்கள்.', en: 'Visit your nearest CSC centre and register under the Tailor (Darzi) or artisan category.', hi: 'नजदीकी सीएससी पर दर्जी श्रेणी में पंजीकरण कराएं।' },
        audioHint: { ta: 'ஊரில் உள்ள பொது சேவை மையத்தில் தையல் பிரிவில் பதிவு செய்ய சொல்லுங்கள்.', en: 'Ask for PM Vishwakarma registration under Tailor trade.', hi: 'दर्जी श्रेणी में पंजीकरण के लिए कहें।' }
      },
      {
        stepNumber: 2,
        title: { ta: '5 நாட்கள் அடிப்படை பயிற்சி', en: '5-Day Skill Training', hi: '5 दिवसीय कौशल प्रशिक्षण' },
        description: { ta: 'அருகிலுள்ள பயிற்சி மையத்தில் 5 நாள் எளிய பயிற்சி. ஒவ்வொரு நாளும் ₹500 உதவித்தொகை உண்டு.', en: 'Attend 5 days of practical training with ₹500 per day allowance.', hi: 'प्रतिदिन ₹500 भत्ते के साथ 5 दिवसीय व्यावहारिक प्रशिक्षण।' },
        audioHint: { ta: 'பயிற்சியின் போது உங்களுக்கு தினசரி உதவித்தொகையும் வழங்கப்படும்.', en: 'You get ₹500 per day while learning.', hi: 'सीखने के दौरान प्रतिदिन ₹500 मिलेंगे।' }
      },
      {
        stepNumber: 3,
        title: { ta: '₹15,000 கருவிகள் கூப்பன்', en: 'Receive ₹15,000 Toolkit e-Voucher', hi: '₹15,000 टूलकिट वाउचर' },
        description: { ta: 'தையல் இயந்திரம் அல்லது நவீன உபகரணங்கள் வாங்க உங்கள் போனுக்கு ₹15,000 மின்னணு கூப்பன் வரும்.', en: 'Get ₹15,000 digital voucher on your phone to buy modern sewing machines or tools.', hi: 'सिलाई मशीन खरीदने के लिए ₹15,000 का ई-वाउचर मिलेगा।' },
        audioHint: { ta: 'இந்த பணத்தில் நீங்கள் புதிய தையல் மெஷின் வாங்கி தொழில் தொடங்கலாம்.', en: 'Use this voucher to buy a brand new sewing machine.', hi: 'इससे आप नई सिलाई मशीन खरीद सकती हैं।' }
      }
    ],
    officialUrl: 'https://pmvishwakarma.gov.in',
    officialPortalName: 'PM Vishwakarma Official Portal',
    disclaimer: {
      ta: 'பதிவு முற்றிலும் இலவசம். எந்த இடைத்தரகர்களுக்கும் பணம் தர வேண்டாம்.',
      en: 'Registration is completely free at all Common Service Centres. Never pay middlemen.',
      hi: 'पंजीकरण पूरी तरह निःशुल्क है। किसी बिचौलिए को पैसे न दें।'
    },
    supportHelpline: '1800-267-7777 (PM Vishwakarma National Toll-Free)'
  },
  {
    id: 'mudra-women',
    category: 'entrepreneurship',
    badge: {
      ta: '🏪 பிணையமில்லா சிறு வணிகக் கடன்',
      en: '🏪 Collateral-free Micro Business Loan',
      hi: '🏪 बिना गारंटी व्यापार ऋण',
    },
    name: {
      ta: 'பிரதான் மந்திரி முத்ரா திட்டம் (பெண்கள் சிறுதொழில் கடன்)',
      en: 'Pradhan Mantri MUDRA Yojana (PMMY) for Women Entrepreneurs',
      hi: 'प्रधानमंत्री मुद्रा योजना (महिला उद्यमी)',
    },
    department: {
      ta: 'நிதி சேவைகள் துறை, இந்திய அரசு',
      en: 'Department of Financial Services, Govt. of India',
      hi: 'वित्तीय सेवाएं विभाग, भारत सरकार',
    },
    simpleSummary: {
      ta: 'வீட்டு மளிகை கடை, தையல் கடை, சிற்றுண்டி கடை போன்ற சிறுதொழில் தொடங்குவதற்கு எந்த சொத்து அடமானமும் இல்லாமல் ₹50,000 வரை (சிஷு கடன்) வங்கிகள் மூலம் கடன் பெறும் திட்டம்.',
      en: 'Collateral-free micro loans up to ₹50,000 (Shishu) and up to ₹5,00,000 (Kishore) through all public and private banks for women starting or expanding small businesses.',
      hi: 'बिना किसी संपत्ति गारंटी के ₹50,000 से ₹5,00,000 तक का व्यापार ऋण उपलब्ध कराने वाली योजना।',
    },
    whyRelevant: {
      ta: 'உங்களிடம் சொந்தமாக நிலமோ நகையோ அடமானம் வைக்க இல்லாவிட்டாலும், அரசு உத்திரவாதத்துடன் தொழில் கடன் பெறலாம்.',
      en: 'You don’t need land or gold mortgage; the government provides the credit guarantee for your business idea.',
      hi: 'जमीन या सोने की गारंटी के बिना भी आप अपना छोटा व्यवसाय शुरू करने के लिए ऋण ले सकती हैं।',
    },
    targetUser: {
      ta: 'சிறுதொழில் தொடங்க விரும்பும் பெண்கள், சுயதொழில் செய்பவர்கள்',
      en: 'Women starting small enterprises, tailoring shops, food stalls, handicrafts',
      hi: 'महिलाएं जो छोटा व्यवसाय शुरू या बढ़ाना चाहती हैं',
    },
    eligibility: {
      ta: [
        'இந்திய குடிமகளாக இருக்க வேண்டும்',
        'வயது 18 பூர்த்தியடைந்திருக்க வேண்டும்',
        'முந்தைய வங்கிக் கடன்களில் தவறாமல் திருப்பிச் செலுத்திய நல்ல வரலாறு',
        'சொத்து அல்லது நில அடமானம் தேவையில்லை'
      ],
      en: [
        'Must be an Indian citizen',
        'Age 18 and above',
        'Satisfactory credit track record (no bank default)',
        'No collateral or third-party guarantee required'
      ],
      hi: [
        'भारतीय नागरिक हों',
        'आयु 18 वर्ष से अधिक',
        'कोई बैंक डिफ़ॉल्ट न हो'
      ]
    },
    documents: [
      {
        id: 'aadhaar',
        name: { ta: 'ஆதார் & பான் அட்டை (இருந்தால்)', en: 'Aadhaar & PAN card (if available)', hi: 'आधार व पैन कार्ड' },
        description: { ta: 'உங்கள் அடையாள சான்று.', en: 'Identity proof.', hi: 'पहचान प्रमाण।' },
        howToFind: { ta: 'உங்களிடம் உள்ள ஆதார் அட்டை.', en: 'Your Aadhaar card.', hi: 'आधार कार्ड।' },
        isMandatory: true,
      },
      {
        id: 'bank-statement',
        name: { ta: 'கடந்த 6 மாத வங்கி கணக்கு அறிக்கை', en: '6-Month Bank Statement', hi: '6 महीने का बैंक स्टेटमेंट' },
        description: { ta: 'பணப் பரிவர்த்தனைகளை காட்ட.', en: 'Shows your banking history.', hi: 'लेन-देन का विवरण।' },
        howToFind: { ta: 'உங்கள் வங்கி கிளையில் பாஸ்புக்கை பிரிண்ட் செய்து பெறலாம்.', en: 'Updated passbook from your bank branch.', hi: 'अपनी बैंक शाखा से पासबुक प्रविष्टि करवाएं।' },
        isMandatory: true,
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { ta: 'தொழில் திட்டத்தை முடிவு செய்யுங்கள்', en: 'Decide your simple business plan', hi: 'सरल व्यवसाय योजना तय करें' },
        description: { ta: 'என்ன கடை வைக்கப் போகிறீர்கள், எவ்வளவு பணம் தேவை என்பதை எளிய தாளில் குறித்துக் கொள்ளுங்கள்.', en: 'Note down what business you want to start and the estimated equipment cost.', hi: 'तय करें कि क्या काम करना है और कितने पैसे की जरूरत है।' },
        audioHint: { ta: 'உங்களுக்கு என்ன வேலை தெரியும், அதற்கு எவ்வளவு செலவாகும் என்று குறித்துக்கொள்ளுங்கள்.', en: 'Write down your business idea and expected cost.', hi: 'अपनी योजना तय करें।' }
      },
      {
        stepNumber: 2,
        title: { ta: 'உள்ளூர் வங்கி மேலாளரை சந்தியுங்கள்', en: 'Visit your local bank branch', hi: 'स्थानीय बैंक शाखा जाएं' },
        description: { ta: 'உங்கள் ஊரில் உள்ள எந்த பொதுத்துறை அல்லது கூட்டுறவு வங்கிக் கிளையிலும் முத்ரா சிஷு விண்ணப்பத்தை பெறலாம்.', en: 'Visit any public sector bank or regional rural bank and ask for the MUDRA Shishu form.', hi: 'नजदीकी बैंक में जाकर मुद्रा शिशु फॉर्म मांगें।' },
        audioHint: { ta: 'வங்கியில் முத்ரா கடன் வேண்டும் என்று சொல்லுங்கள், மேலாளர் படிவம் தருவார்.', en: 'Tell the banker you want to apply for MUDRA loan.', hi: 'बैंक में मुद्रा ऋण फॉर्म के लिए कहें।' }
      }
    ],
    officialUrl: 'https://www.mudra.org.in',
    officialPortalName: 'Mudra Official Government Portal',
    disclaimer: {
      ta: 'கடன் வட்டி விகிதம் மற்றும் ஒப்புதல் சம்பந்தப்பட்ட வங்கியின் விதிமுறைகளுக்கு உட்பட்டது.',
      en: 'Interest rates and sanctions are processed by respective banks as per RBI/MUDRA norms.',
      hi: 'ऋण स्वीकृति संबंधित बैंक के नियमों के अनुसार होगी।'
    },
    supportHelpline: '1800-180-1111 (MUDRA National Toll-Free)'
  },
  {
    id: 'pudhumai-penn',
    category: 'education',
    badge: {
      ta: '🎓 கல்லூரி மாணவிகளுக்கு ₹1,000',
      en: '🎓 Higher Education Support ₹1,000',
      hi: '🎓 उच्च शिक्षा सहायता ₹1,000',
    },
    name: {
      ta: 'மூவலூர் ராமாமிர்தம் அம்மையார் புதுமைப் பெண் திட்டம்',
      en: 'Pudhumai Penn Higher Education Assurance Scheme',
      hi: 'पुधुमै पेन उच्च शिक्षा प्रोत्साहन योजना',
    },
    department: {
      ta: 'சமூக நலன் மற்றும் மகளிர் உரிமைத் துறை, தமிழ்நாடு அரசு',
      en: 'Department of Social Welfare & Women Empowerment, Govt. of Tamil Nadu',
      hi: 'समाज कल्याण एवं महिला अधिकारिता विभाग, तमिलनाडु सरकार',
    },
    simpleSummary: {
      ta: 'அரசுப் பள்ளிகளில் 6 முதல் 12-ஆம் வகுப்பு வரை படித்து கல்லூரி அல்லது பட்டயப்படிப்பில் சேரும் மாணவிகளுக்கு மாதம் ₹1,000 உதவித்தொகை வங்கிக் கணக்கில் நேரடியாக வழங்கும் திட்டம்.',
      en: 'Provides ₹1,000 every month directly to female students who studied from classes 6 to 12 in Tamil Nadu government schools and enrolled in undergraduate degrees or diplomas.',
      hi: 'सरकारी स्कूलों में कक्षा 6 से 12 तक पढ़ी छात्राओं को कॉलेज की पढ़ाई के दौरान हर महीने ₹1,000 की वित्तीय सहायता।',
    },
    whyRelevant: {
      ta: 'உங்கள் பெண் குழந்தை அல்லது தங்கையின் கல்லூரி படிப்புச் செலவை சமாளிக்க அரசு மாதந்தோறும் தொடர்ந்து நிதி உதவி வழங்குகிறது.',
      en: 'Ensures young women never drop out of college due to financial constraints with reliable monthly funds.',
      hi: 'छात्राओं को बिना आर्थिक बाधा के कॉलेज की पढ़ाई पूरी करने में मदद करता है।',
    },
    targetUser: {
      ta: 'அரசுப் பள்ளியில் படித்து கல்லூரி செல்லும் மாணவிகள்',
      en: 'Female students pursuing college degrees/diplomas who studied in TN govt schools',
      hi: 'सरकारी स्कूल से कॉलेज जाने वाली छात्राएं',
    },
    eligibility: {
      ta: [
        'தமிழ்நாடு அரசுப் பள்ளிகளில் 6-ஆம் வகுப்பு முதல் 12-ஆம் வகுப்பு வரை தொடர்ந்து படித்திருக்க வேண்டும்',
        'அங்கீகரிக்கப்பட்ட கல்லூரி, பாலிடெக்னிக் அல்லது தொழிற்கல்வியில் சேர்ந்திருக்க வேண்டும்',
        'படிப்பு முடியும் வரை மாதந்தோறும் ₹1,000 வழங்கப்படும்'
      ],
      en: [
        'Must have studied from 6th to 12th standard in Tamil Nadu Govt schools',
        'Enrolled in recognized undergraduate degree, diploma, or ITI course',
        'Benefit continues until completion of the course'
      ],
      hi: [
        'तमिलनाडु के सरकारी स्कूल में कक्षा 6 से 12 तक पढ़ी हों',
        'मान्यता प्राप्त कॉलेज या डिप्लोमा में नामांकित हों'
      ]
    },
    documents: [
      {
        id: 'school-tc',
        name: { ta: 'பள்ளி மாற்றுச் சான்றிதழ் (TC) அல்லது 10/12 மதிப்பெண் சான்றிதழ்', en: 'Govt School Transfer Certificate / Marksheets', hi: 'स्कूल टीसी या मार्कशीट' },
        description: { ta: 'அரசுப் பள்ளியில் படித்ததை உறுதி செய்யும் சான்று.', en: 'Confirms study in govt schools from classes 6 to 12.', hi: 'सरकारी स्कूल में पढ़ाई का प्रमाण।' },
        howToFind: { ta: 'பள்ளியில் வழங்கப்பட்ட மாற்றுச் சான்றிதழ்.', en: 'School TC or Bonafide letter.', hi: 'स्कूल प्रमाण पत्र।' },
        isMandatory: true,
      },
      {
        id: 'college-id',
        name: { ta: 'கல்லூரி சேர்க்கை ரசீது அல்லது அடையாள அட்டை', en: 'College Admission Receipt / ID Card', hi: 'कॉलेज प्रवेश रसीद' },
        description: { ta: 'கல்லூரியில் படிப்பதை உறுதி செய்ய.', en: 'Proves current active enrollment.', hi: 'कॉलेज में दाखिले का प्रमाण।' },
        howToFind: { ta: 'கல்லூரியில் வழங்கப்பட்ட ரசீது.', en: 'College fee receipt.', hi: 'कॉलेज रसीद।' },
        isMandatory: true,
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { ta: 'கல்லூரி அலுவலகத்தில் விண்ணப்பிக்கவும்', en: 'Apply through your college desk', hi: 'कॉलेज कार्यालय से आवेदन करें' },
        description: { ta: 'மாணவி சேர்க்கை பெற்ற கல்லூரியிலேயே இந்த திட்டத்திற்கான இணையதள பதிவு செய்யப்படும்.', en: 'Your college administration portal (Moovalur portal) processes the application directly.', hi: 'कॉलेज प्रशासन द्वारा सीधे पोर्टल पर आवेदन दर्ज किया जाता है।' },
        audioHint: { ta: 'கல்லூரி அலுவலகத்தில் புதுமைப் பெண் திட்டம் பற்றி கேளுங்கள்.', en: 'Ask your college office about the Pudhumai Penn portal registration.', hi: 'कॉलेज कार्यालय में जानकारी लें।' }
      }
    ],
    officialUrl: 'https://pudhumaipenn.tn.gov.in',
    officialPortalName: 'Pudhumai Penn Official Portal',
    disclaimer: {
      ta: 'மாணவியின் வங்கிக் கணக்குடன் ஆதார் இணைக்கப்பட்டிருக்க வேண்டியது கட்டாயமாகும்.',
      en: 'Aadhaar seeding with the student bank account is mandatory for DBT transfers.',
      hi: 'खाते से आधार लिंक होना अनिवार्य है।'
    }
  }
];
