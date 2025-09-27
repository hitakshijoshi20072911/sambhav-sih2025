import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, Heart, TrendingUp, BookOpen, Globe } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import pariLogo from "@/assets/pari-logo.png";
import PariHealthTips from "./PariHealthTips";
import PariCalendar from "./PariCalendar";
import PariSymptomLogger from "./PariSymptomLogger";

const PariDashboard = () => {
  const [language, setLanguage] = useState("english");
  const [cycleProgress] = useState(68);
  const [currentView, setCurrentView] = useState("dashboard");

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
      title: "Your Journey to Confident Cycles",
      subtitle: "Syncing with your beautiful body",
      cycleDay: "Day 18 of your cycle",
      nextPeriod: "Next period in 10 days",
      features: {
        tracker: "Period Tracker",
        insights: "Cycle Insights",
        education: "Health Education",
        community: "Community Support"
      }
    },
    hindi: {
      title: "आत्मविश्वास से भरे चक्र की यात्रा",
      subtitle: "आपके सुंदर शरीर के साथ तालमेल",
      cycleDay: "आपके चक्र का दिन 18",
      nextPeriod: "अगला पीरियड 10 दिन में",
      features: {
        tracker: "पीरियड ट्रैकर",
        insights: "चक्र अंतर्दृष्टि",
        education: "स्वास्थ्य शिक्षा",
        community: "सामुदायिक सहायता"
      }
    },
    punjabi: {
      title: "ਆਤਮਵਿਸ਼ਵਾਸ ਭਰੇ ਚੱਕਰਾਂ ਦੀ ਯਾਤਰਾ",
      subtitle: "ਤੁਹਾਡੇ ਸੁੰਦਰ ਸਰੀਰ ਨਾਲ ਤਾਲਮੇਲ",
      cycleDay: "ਤੁਹਾਡੇ ਚੱਕਰ ਦਾ ਦਿਨ 18",
      nextPeriod: "ਅਗਲਾ ਪੀਰਿਅਡ 10 ਦਿਨਾਂ ਵਿੱਚ",
      features: {
        tracker: "ਪੀਰਿਅਡ ਟ੍ਰੈਕਰ",
        insights: "ਚੱਕਰ ਸਮਝ",
        education: "ਸਿਹਤ ਸਿੱਖਿਆ",
        community: "ਕਮਿਉਨਿਟੀ ਸਹਾਇਤਾ"
      }
    }
  };

  const currentTranslations = translations[language as keyof typeof translations] || translations.english;

  // Handle different views
  if (currentView === "health-tips") {
    return <PariHealthTips onBack={() => setCurrentView("dashboard")} />;
  }
  
  if (currentView === "calendar") {
    return <PariCalendar onBack={() => setCurrentView("dashboard")} />;
  }
  
  if (currentView === "symptom-logger") {
    return <PariSymptomLogger onBack={() => setCurrentView("dashboard")} />;
  }

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
        <div className="absolute bottom-20 right-40 text-3xl opacity-20 float" style={{ animationDelay: '3s' }}>🌺</div>
        <div className="absolute top-1/2 left-1/4 text-2xl opacity-20 float" style={{ animationDelay: '4s' }}>💖</div>
        <div className="absolute top-1/3 right-1/3 text-3xl opacity-20 float" style={{ animationDelay: '5s' }}>🌙</div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
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
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {currentTranslations.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            🌸 {currentTranslations.subtitle}
          </p>
        </div>

        {/* Cycle Tracker */}
        <div className="max-w-md mx-auto mb-12">
          <Card className="bg-white/70 backdrop-blur-sm border-pink-200 shadow-womens">
            <CardContent className="p-8 text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center shadow-lg">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <span className="text-3xl">🌸</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                {currentTranslations.cycleDay}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {currentTranslations.nextPeriod}
              </p>
              
              <Progress value={cycleProgress} className="mb-4" />
              <p className="text-sm text-gray-500">{cycleProgress}% Complete</p>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border-pink-200 hover:shadow-lg transition-all duration-300 role-card">
            <CardHeader className="text-center">
              <Calendar className="w-8 h-8 mx-auto text-pink-500 mb-2" />
              <CardTitle className="text-pink-800">{currentTranslations.features.tracker}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600">
                Track your cycle with smart predictions
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-pink-200 hover:shadow-lg transition-all duration-300 role-card">
            <CardHeader className="text-center">
              <TrendingUp className="w-8 h-8 mx-auto text-purple-500 mb-2" />
              <CardTitle className="text-purple-800">{currentTranslations.features.insights}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600">
                Understand your body's patterns
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-pink-200 hover:shadow-lg transition-all duration-300 role-card">
            <CardHeader className="text-center">
              <BookOpen className="w-8 h-8 mx-auto text-pink-500 mb-2" />
              <CardTitle className="text-pink-800">{currentTranslations.features.education}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600">
                Learn about reproductive health
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-pink-200 hover:shadow-lg transition-all duration-300 role-card">
            <CardHeader className="text-center">
              <Heart className="w-8 h-8 mx-auto text-purple-500 mb-2" />
              <CardTitle className="text-purple-800">{currentTranslations.features.community}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600">
                Connect with other women
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600"
              onClick={() => setCurrentView("symptom-logger")}
            >
              Log Today's Symptoms
            </Button>
            <Button 
              variant="outline" 
              className="border-pink-300 text-pink-700 hover:bg-pink-50"
              onClick={() => setCurrentView("calendar")}
            >
              View Calendar
            </Button>
            <Button 
              variant="outline" 
              className="border-purple-300 text-purple-700 hover:bg-purple-50"
              onClick={() => setCurrentView("health-tips")}
            >
              Health Tips
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PariDashboard;