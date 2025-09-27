import { createContext, useContext, useState, ReactNode } from "react";

type Language = 'english' | 'hindi' | 'punjabi' | 'bengali' | 'tamil' | 'telugu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  english: {
    'hero.title': 'Healthcare for Every Village',
    'hero.subtitle': 'Connecting communities to quality healthcare through technology',
    'header.tagline': 'Healthcare to every village',
    'role.patient': 'Patient',
    'role.patient.desc': 'Access healthcare services and manage your health',
    'role.doctor': 'Doctor',
    'role.doctor.desc': 'Provide consultations and manage patient care',
    'role.pharmacy': 'Pharmacy',
    'role.pharmacy.desc': 'Manage medicine inventory and prescriptions',
    'role.ngo': 'NGO/Government',
    'role.ngo.desc': 'Monitor health programs and community welfare',
    'dashboard.consult': 'Consult a Doctor',
    'dashboard.health-card': 'My Health Card',
    'dashboard.medicine-reminder': 'Medicine Reminder',
    'dashboard.period-tracker': 'Period Tracker',
    'dashboard.health-education': 'Health Education',
    'emergency.button': 'Emergency SOS',
  },
  hindi: {
    'hero.title': 'हर गाँव के लिए स्वास्थ्य सेवा',
    'hero.subtitle': 'तकनीक के माध्यम से समुदायों को गुणवत्तापूर्ण स्वास्थ्य सेवा से जोड़ना',
    'header.tagline': 'गाँव गाँव तक सेहत',
    'role.patient': 'मरीज़',
    'role.patient.desc': 'स्वास्थ्य सेवाओं का उपयोग करें और अपने स्वास्थ्य का प्रबंधन करें',
    'role.doctor': 'डॉक्टर',
    'role.doctor.desc': 'परामर्श प्रदान करें और रोगी देखभाल का प्रबंधन करें',
    'role.pharmacy': 'फार्मेसी',
    'role.pharmacy.desc': 'दवा इन्वेंटरी और नुस्खों का प्रबंधन करें',
    'role.ngo': 'एनजीओ/सरकार',
    'role.ngo.desc': 'स्वास्थ्य कार्यक्रमों और सामुदायिक कल्याण की निगरानी करें',
    'dashboard.consult': 'डॉक्टर से सलाह लें',
    'dashboard.health-card': 'मेरा स्वास्थ्य कार्ड',
    'dashboard.medicine-reminder': 'दवा की याद दिलाने वाला',
    'dashboard.period-tracker': 'पीरियड ट्रैकर',
    'dashboard.health-education': 'स्वास्थ्य शिक्षा',
    'emergency.button': 'आपातकालीन एसओएस',
  },
  punjabi: {
    'hero.title': 'ਹਰ ਪਿੰਡ ਲਈ ਸਿਹਤ ਸੇਵਾ',
    'hero.subtitle': 'ਤਕਨਾਲੋਜੀ ਰਾਹੀਂ ਕਮਿਉਨਿਟੀਆਂ ਨੂੰ ਗੁਣਵੱਤਾ ਵਾਲੀ ਸਿਹਤ ਸੇਵਾ ਨਾਲ ਜੋੜਨਾ',
    'header.tagline': 'ਪਿੰਡ ਪਿੰਡ ਤੱਕ ਸਿਹਤ',
    'role.patient': 'ਮਰੀਜ਼',
    'role.patient.desc': 'ਸਿਹਤ ਸੇਵਾਵਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ ਅਤੇ ਆਪਣੀ ਸਿਹਤ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ',
    'role.doctor': 'ਡਾਕਟਰ',
    'role.doctor.desc': 'ਸਲਾਹ ਪ੍ਰਦਾਨ ਕਰੋ ਅਤੇ ਮਰੀਜ਼ ਦੇਖਭਾਲ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ',
    'role.pharmacy': 'ਫਾਰਮੇਸੀ',
    'role.pharmacy.desc': 'ਦਵਾਈ ਇਨਵੈਂਟਰੀ ਅਤੇ ਨੁਸਖਿਆਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ',
    'role.ngo': 'ਐਨਜੀਓ/ਸਰਕਾਰ',
    'role.ngo.desc': 'ਸਿਹਤ ਪ੍ਰੋਗਰਾਮਾਂ ਅਤੇ ਕਮਿਉਨਿਟੀ ਭਲਾਈ ਦੀ ਨਿਗਰਾਨੀ ਕਰੋ',
    'dashboard.consult': 'ਡਾਕਟਰ ਨਾਲ ਸਲਾਹ ਕਰੋ',
    'dashboard.health-card': 'ਮੇਰਾ ਸਿਹਤ ਕਾਰਡ',
    'dashboard.medicine-reminder': 'ਦਵਾਈ ਰਿਮਾਈਂਡਰ',
    'dashboard.period-tracker': 'ਪੀਰਿਅਡ ਟ੍ਰੈਕਰ',
    'dashboard.health-education': 'ਸਿਹਤ ਸਿੱਖਿਆ',
    'emergency.button': 'ਐਮਰਜੈਂਸੀ ਐਸਓਐਸ',
  },
  bengali: {
    'hero.title': 'প্রতিটি গ্রামের জন্য স্বাস্থ্যসেবা',
    'hero.subtitle': 'প্রযুক্তির মাধ্যমে সম্প্রদায়গুলিকে মানসম্পন্ন স্বাস্থ্যসেবার সাথে সংযুক্ত করা',
    'header.tagline': 'গ্রাম গ্রামান্তরে স্বাস্থ্য',
    'role.patient': 'রোগী',
    'role.patient.desc': 'স্বাস্থ্যসেবা ব্যবহার করুন এবং আপনার স্বাস্থ্য পরিচালনা করুন',
    'role.doctor': 'ডাক্তার',
    'role.doctor.desc': 'পরামর্শ প্রদান করুন এবং রোগীর যত্ন পরিচালনা করুন',
    'role.pharmacy': 'ফার্মেসি',
    'role.pharmacy.desc': 'ওষুধের তালিকা এবং প্রেসক্রিপশন পরিচালনা করুন',
    'role.ngo': 'এনজিও/সরকার',
    'role.ngo.desc': 'স্বাস্থ্য কার্যক্রম এবং সামাজিক কল্যাণ নিরীক্ষণ করুন',
    'dashboard.consult': 'ডাক্তারের পরামর্শ নিন',
    'dashboard.health-card': 'আমার স্বাস্থ্য কার্ড',
    'dashboard.medicine-reminder': 'ওষুধের রিমাইন্ডার',
    'dashboard.period-tracker': 'পিরিয়ড ট্র্যাকার',
    'dashboard.health-education': 'স্বাস্থ্য শিক্ষা',
    'emergency.button': 'জরুরি এসওএস',
  },
  tamil: {
    'hero.title': 'ஒவ்வொரு கிராமத்திற்கும் சுகாதாரம்',
    'hero.subtitle': 'தொழில்நுட்பத்தின் மூலம் சமூகங்களை தரமான சுகாதார சேவையுடன் இணைக்கிறது',
    'header.tagline': 'ஒவ்வொரு கிராமத்திற்கும் சுகாதாரம்',
    'role.patient': 'நோயாளி',
    'role.patient.desc': 'சுகாதார சேவைகளை அணுகி உங்கள் ஆரோக்கியத்தை நிர்வகிக்கவும்',
    'role.doctor': 'மருத்துவர்',
    'role.doctor.desc': 'ஆலோசனைகள் வழங்கி நோயாளி பராமரிப்பை நிர்வகிக்கவும்',
    'role.pharmacy': 'மருந்தகம்',
    'role.pharmacy.desc': 'மருந்து பட்டியல் மற்றும் மருந்துச் சீட்டுகளை நிர்வகிக்கவும்',
    'role.ngo': 'என்ஜிஓ/அரசு',
    'role.ngo.desc': 'சுகாதார திட்டங்கள் மற்றும் சமுதாய நலனைக் கண்காணிக்கவும்',
    'dashboard.consult': 'மருத்துவரை அணுகவும்',
    'dashboard.health-card': 'எனது சுகாதார அட்டை',
    'dashboard.medicine-reminder': 'மருந்து நினைவூட்டல்',
    'dashboard.period-tracker': 'மாதவிடாய் கண்காணிப்பு',
    'dashboard.health-education': 'சுகாதார கல்வி',
    'emergency.button': 'அவசர எஸ்ஓஎஸ்',
  },
  telugu: {
    'hero.title': 'ప్రతి గ్రామానికి ఆరోగ్య సేవలు',
    'hero.subtitle': 'సాంకేతికత ద్వారా సమాజాలను నాణ్యమైన ఆరోగ్య సేవలతో కలుపుట',
    'header.tagline': 'ప్రతి గ్రామానికి ఆరోగ్యం',
    'role.patient': 'రోగి',
    'role.patient.desc': 'ఆరోగ్య సేవలను ఉపయోగించి మీ ఆరోగ్యాన్ని నిర్వహించండి',
    'role.doctor': 'వైద్యుడు',
    'role.doctor.desc': 'సలహాలు అందించి రోగుల సంరక్షణను నిర్వహించండి',
    'role.pharmacy': 'మందుల దుకాణం',
    'role.pharmacy.desc': 'మందుల జాబితా మరియు ప్రిస్క్రిప్షన్లను నిర్వహించండి',
    'role.ngo': 'ఎన్జిఓ/ప్రభుత్వం',
    'role.ngo.desc': 'ఆరోగ్య కార్యక్రమాలు మరియు సమాజ సంక్షేమాన్ని పర్యవేక్షించండి',
    'dashboard.consult': 'వైద్యుడిని సంప్రదించండి',
    'dashboard.health-card': 'నా ఆరోగ్య కార్డు',
    'dashboard.medicine-reminder': 'మందుల రిమైండర్',
    'dashboard.period-tracker': 'పీరియడ్ ట్రాకర్',
    'dashboard.health-education': 'ఆరోగ్య విద్య',
    'emergency.button': 'అత్యవసర ఎస్ఓఎస్',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('english');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['english']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};