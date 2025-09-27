import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Globe, Send, User } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import pariLogo from "@/assets/pari-logo.png";

interface PariSymptomLoggerProps {
  onBack: () => void;
}

const PariSymptomLogger = ({ onBack }: PariSymptomLoggerProps) => {
  const [language, setLanguage] = useState("english");
  const [symptoms, setSymptoms] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

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
      title: "Log Today's Symptoms",
      subtitle: "Share your symptoms with a gynecologist",
      backButton: "Back to Dashboard",
      symptomsLabel: "Describe your symptoms",
      symptomsPlaceholder: "Enter your symptoms, concerns, or questions...",
      selectDoctor: "Choose a Gynecologist",
      sendButton: "Send to Doctor",
      online: "Online",
      offline: "Offline"
    },
    hindi: {
      title: "आज के लक्षण लॉग करें",
      subtitle: "अपने लक्षणों को स्त्री रोग विशेषज्ञ के साथ साझा करें",
      backButton: "डैशबोर्ड पर वापस जाएं",
      symptomsLabel: "अपने लक्षणों का वर्णन करें",
      symptomsPlaceholder: "अपने लक्षण, चिंताएं या प्रश्न दर्ज करें...",
      selectDoctor: "स्त्री रोग विशेषज्ञ चुनें",
      sendButton: "डॉक्टर को भेजें",
      online: "ऑनलाइन",
      offline: "ऑफलाइन"
    },
    punjabi: {
      title: "ਅੱਜ ਦੇ ਲੱਛਣ ਲੌਗ ਕਰੋ",
      subtitle: "ਇੱਕ ਔਰਤ ਦੇ ਰੋਗ ਦੇ ਮਾਹਰ ਨਾਲ ਆਪਣੇ ਲੱਛਣ ਸਾਂਝੇ ਕਰੋ",
      backButton: "ਡੈਸ਼ਬੋਰਡ 'ਤੇ ਵਾਪਸ ਜਾਓ",
      symptomsLabel: "ਆਪਣੇ ਲੱਛਣਾਂ ਦਾ ਵਰਣਨ ਕਰੋ",
      symptomsPlaceholder: "ਆਪਣੇ ਲੱਛਣ, ਚਿੰਤਾਵਾਂ ਜਾਂ ਸਵਾਲ ਦਰਜ ਕਰੋ...",
      selectDoctor: "ਇੱਕ ਔਰਤ ਰੋਗ ਮਾਹਰ ਚੁਣੋ",
      sendButton: "ਡਾਕਟਰ ਨੂੰ ਭੇਜੋ",
      online: "ਔਨਲਾਇਨ",
      offline: "ਔਫਲਾਇਨ"
    }
  };

  const currentTranslations = translations[language as keyof typeof translations] || translations.english;

  const gynecologists = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialization: "Gynecology & Obstetrics",
      experience: "15 years",
      isOnline: true,
      rating: 4.8,
      nextAvailable: "Today 2:00 PM"
    },
    {
      id: 2,
      name: "Dr. Anjali Gupta",
      specialization: "Reproductive Health",
      experience: "12 years",
      isOnline: false,
      rating: 4.7,
      nextAvailable: "Tomorrow 10:00 AM"
    },
    {
      id: 3,
      name: "Dr. Meera Patel",
      specialization: "Women's Health",
      experience: "18 years",
      isOnline: true,
      rating: 4.9,
      nextAvailable: "Today 4:30 PM"
    },
    {
      id: 4,
      name: "Dr. Kavita Singh",
      specialization: "Adolescent Gynecology",
      experience: "10 years",
      isOnline: true,
      rating: 4.6,
      nextAvailable: "Today 6:00 PM"
    },
    {
      id: 5,
      name: "Dr. Ritu Agarwal",
      specialization: "Menstrual Disorders",
      experience: "14 years",
      isOnline: false,
      rating: 4.8,
      nextAvailable: "Tomorrow 2:00 PM"
    }
  ];

  const handleSendSymptoms = () => {
    if (!symptoms.trim() || !selectedDoctor) return;
    
    console.log("Sending symptoms to doctor:", {
      symptoms,
      doctorId: selectedDoctor,
      timestamp: new Date().toISOString()
    });
    
    // Here you would send the symptoms to the selected doctor
    alert("Symptoms sent successfully! The doctor will review and respond soon.");
    setSymptoms("");
    setSelectedDoctor("");
  };

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
            🩺 {currentTranslations.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Symptoms Input */}
          <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-womens">
            <CardHeader>
              <CardTitle className="text-purple-800">{currentTranslations.symptomsLabel}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder={currentTranslations.symptomsPlaceholder}
                rows={8}
                className="w-full"
              />
              
              <Button 
                onClick={handleSendSymptoms}
                disabled={!symptoms.trim() || !selectedDoctor}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 disabled:opacity-50"
              >
                <Send className="w-4 h-4 mr-2" />
                {currentTranslations.sendButton}
              </Button>
            </CardContent>
          </Card>

          {/* Doctor Selection */}
          <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-womens">
            <CardHeader>
              <CardTitle className="text-purple-800">{currentTranslations.selectDoctor}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {gynecologists.map((doctor) => (
                  <div
                    key={doctor.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                      selectedDoctor === doctor.id.toString()
                        ? 'border-pink-500 bg-pink-50'
                        : 'border-gray-200 bg-white'
                    }`}
                    onClick={() => setSelectedDoctor(doctor.id.toString())}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                          <p className="text-sm text-gray-600">{doctor.specialization}</p>
                          <p className="text-xs text-gray-500">{doctor.experience} experience</p>
                          <div className="flex items-center mt-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm text-gray-600 ml-1">{doctor.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          doctor.isOnline 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {doctor.isOnline ? currentTranslations.online : currentTranslations.offline}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{doctor.nextAvailable}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PariSymptomLogger;