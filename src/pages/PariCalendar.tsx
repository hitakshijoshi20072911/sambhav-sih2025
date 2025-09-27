import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Globe, Calendar, Save } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import pariLogo from "@/assets/pari-logo.png";

interface PariCalendarProps {
  onBack: () => void;
}

const PariCalendar = ({ onBack }: PariCalendarProps) => {
  const [language, setLanguage] = useState("english");
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    flow: "",
    symptoms: "",
    remarks: ""
  });

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
      title: "Period Calendar",
      subtitle: "Track your cycle and manage your health",
      backButton: "Back to Dashboard",
      startDate: "Start Date",
      endDate: "End Date",
      flow: "Flow Intensity",
      symptoms: "Symptoms",
      remarks: "Additional Notes",
      save: "Save Entry",
      light: "Light",
      medium: "Medium",
      heavy: "Heavy"
    },
    hindi: {
      title: "पीरियड कैलेंडर",
      subtitle: "अपने चक्र को ट्रैक करें और अपने स्वास्थ्य का प्रबंधन करें",
      backButton: "डैशबोर्ड पर वापस जाएं",
      startDate: "शुरुआती तारीख",
      endDate: "अंत की तारीख",
      flow: "प्रवाह की तीव्रता",
      symptoms: "लक्षण",
      remarks: "अतिरिक्त नोट्स",
      save: "एंट्री सेव करें",
      light: "हल्का",
      medium: "मध्यम",
      heavy: "भारी"
    },
    punjabi: {
      title: "ਪੀਰਿਅਡ ਕੈਲੰਡਰ",
      subtitle: "ਆਪਣੇ ਚੱਕਰ ਨੂੰ ਟ੍ਰੈਕ ਕਰੋ ਅਤੇ ਆਪਣੀ ਸਿਹਤ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ",
      backButton: "ਡੈਸ਼ਬੋਰਡ 'ਤੇ ਵਾਪਸ ਜਾਓ",
      startDate: "ਸ਼ੁਰੂਆਤੀ ਤਾਰੀਖ",
      endDate: "ਅੰਤ ਦੀ ਤਾਰੀਖ",
      flow: "ਪ੍ਰਵਾਹ ਦੀ ਤੀਬਰਤਾ",
      symptoms: "ਲੱਛਣ",
      remarks: "ਵਾਧੂ ਨੋਟਸ",
      save: "ਐਂਟਰੀ ਸੇਵ ਕਰੋ",
      light: "ਹਲਕਾ",
      medium: "ਮੱਧਮ",
      heavy: "ਭਾਰੀ"
    }
  };

  const currentTranslations = translations[language as keyof typeof translations] || translations.english;

  // Generate calendar days for current month
  const generateCalendar = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log("Saving calendar entry:", formData);
    // Here you would save to your backend/local storage
  };

  const calendarDays = generateCalendar();
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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
            🗓️ {currentTranslations.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar View */}
          <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-womens">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {dayNames.map(day => (
                  <div key={day} className="text-center text-sm font-semibold text-gray-600 p-2">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`
                      aspect-square flex items-center justify-center text-sm rounded-lg cursor-pointer
                      ${day ? 'hover:bg-pink-100 transition-colors' : ''}
                      ${day === new Date().getDate() ? 'bg-pink-500 text-white' : 'text-gray-700'}
                      ${day && Math.random() > 0.8 ? 'bg-red-100 border-2 border-red-300' : ''}
                    `}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Entry Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-womens">
            <CardHeader>
              <CardTitle className="text-purple-800">Track Your Period</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate">{currentTranslations.startDate}</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="endDate">{currentTranslations.endDate}</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="flow">{currentTranslations.flow}</Label>
                <Select value={formData.flow} onValueChange={(value) => handleInputChange('flow', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">{currentTranslations.light}</SelectItem>
                    <SelectItem value="medium">{currentTranslations.medium}</SelectItem>
                    <SelectItem value="heavy">{currentTranslations.heavy}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="symptoms">{currentTranslations.symptoms}</Label>
                <Input
                  id="symptoms"
                  value={formData.symptoms}
                  onChange={(e) => handleInputChange('symptoms', e.target.value)}
                  placeholder="Cramps, headache, mood changes..."
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="remarks">{currentTranslations.remarks}</Label>
                <Textarea
                  id="remarks"
                  value={formData.remarks}
                  onChange={(e) => handleInputChange('remarks', e.target.value)}
                  placeholder="Any additional notes..."
                  className="mt-1"
                  rows={3}
                />
              </div>

              <Button 
                onClick={handleSave}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600"
              >
                <Save className="w-4 h-4 mr-2" />
                {currentTranslations.save}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PariCalendar;