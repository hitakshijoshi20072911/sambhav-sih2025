import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Globe, Play } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import pariLogo from "@/assets/pari-logo.png";

interface PariHealthTipsProps {
  onBack: () => void;
}

const PariHealthTips = ({ onBack }: PariHealthTipsProps) => {
  const [language, setLanguage] = useState("english");

  const languages = [
    { value: "english", label: "English" },
    { value: "hindi", label: "हिन्दी" },
    { value: "punjabi", label: "ਪੰਜਾਬੀ" },
    { value: "bengali", label: "বাংলা" },
    { value: "tamil", label: "தமிழ்" },
    { value: "telugu", label: "తెలుగు" },
  ];

  const translations = {
    english: {
      title: "Health Tips & Education",
      subtitle: "Learn about menstrual health and hygiene",
      backButton: "Back to Dashboard"
    },
    hindi: {
      title: "स्वास्थ्य सुझाव और शिक्षा",
      subtitle: "मासिक धर्म स्वास्थ्य और स्वच्छता के बारे में जानें",
      backButton: "डैशबोर्ड पर वापस जाएं"
    },
    punjabi: {
      title: "ਸਿਹਤ ਸਲਾਹ ਅਤੇ ਸਿੱਖਿਆ",
      subtitle: "ਮਾਸਿਕ ਧਰਮ ਸਿਹਤ ਅਤੇ ਸਫਾਈ ਬਾਰੇ ਜਾਣੋ",
      backButton: "ਡੈਸ਼ਬੋਰਡ 'ਤੇ ਵਾਪਸ ਜਾਓ"
    }
  };

  const currentTranslations = translations[language as keyof typeof translations] || translations.english;

  const videoContent = [
    {
      title: "Understanding Your Cycle",
      description: "Learn the basics of menstrual cycle and what's normal",
      thumbnail: "🩸",
      duration: "5:30"
    },
    {
      title: "Menstrual Hygiene Basics",
      description: "Essential hygiene practices during periods",
      thumbnail: "🧼",
      duration: "4:15"
    },
    {
      title: "Managing Period Pain",
      description: "Natural ways to reduce menstrual cramps and discomfort",
      thumbnail: "💊",
      duration: "6:45"
    },
    {
      title: "Nutrition During Periods",
      description: "Foods that help during menstruation",
      thumbnail: "🥗",
      duration: "5:00"
    },
    {
      title: "Exercise and Periods",
      description: "Safe exercises during your cycle",
      thumbnail: "🏃‍♀️",
      duration: "7:20"
    },
    {
      title: "Myths vs Facts",
      description: "Common period myths debunked",
      thumbnail: "❓",
      duration: "8:10"
    },
    {
      title: "When to See a Doctor",
      description: "Warning signs that need medical attention",
      thumbnail: "👩‍⚕️",
      duration: "6:00"
    },
    {
      title: "Period Products Guide",
      description: "Choosing the right products for you",
      thumbnail: "🩹",
      duration: "5:45"
    },
    {
      title: "Emotional Wellness",
      description: "Managing mood changes during periods",
      thumbnail: "😊",
      duration: "7:30"
    },
    {
      title: "Cultural Perspectives",
      description: "Breaking period taboos in society",
      thumbnail: "🌍",
      duration: "9:15"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 relative overflow-hidden">
      {/* Watermark */}
      <div className="watermark">
        <img src={pariLogo} alt="Pari Watermark" className="w-96 h-96 opacity-5" />
      </div>

      {/* Floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl opacity-20 float">🌸</div>
        <div className="absolute top-20 right-20 text-3xl opacity-20 float" style={{ animationDelay: '1s' }}>🦋</div>
        <div className="absolute bottom-40 left-20 text-4xl opacity-20 float" style={{ animationDelay: '2s' }}>✨</div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" onClick={onBack} className="mr-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            {currentTranslations.backButton}
          </Button>
          <img src={pariLogo} alt="Pari" className="h-12 w-auto" />
          <div>
            <h1 className="text-2xl font-bold gradient-text-womens">PARI</h1>
            <p className="text-xs text-purple-600">सेहत, सुविधा ते सम्मान</p>
          </div>
        </div>
        
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-32 bg-white/50 backdrop-blur-sm border-pink-200">
            <Globe className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.value} value={lang.value}>
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {currentTranslations.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            🌸 {currentTranslations.subtitle}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videoContent.map((video, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-pink-200 hover:shadow-lg transition-all duration-300 role-card group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-4">
                  <div className="w-full h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center text-4xl">
                    {video.thumbnail}
                  </div>
                  <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardTitle className="text-pink-800 text-sm">{video.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 text-xs">
                  {video.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PariHealthTips;