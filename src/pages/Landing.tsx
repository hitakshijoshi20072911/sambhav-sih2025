import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Users, Stethoscope, Pill, Building2, Globe, Mic, Shield } from "lucide-react";
import Header from "@/components/Header";
import RoleCard from "@/components/RoleCard";
import { useLanguage } from "@/components/LanguageProvider";
import { useToast } from "@/components/ui/use-toast";

const Landing = () => {
  const navigate = useNavigate();
  const { t, setLanguage } = useLanguage();
  const { toast } = useToast();

  const handleLanguageChange = (language: string) => {
    setLanguage(language as any);
    toast({
      title: "Language Changed",
      description: `Switched to ${language}`,
    });
  };

  const handleVoiceClick = () => {
    toast({
      title: "Voice Navigation",
      description: "Voice feature coming soon!",
    });
  };

  const handleEmergency = () => {
    toast({
      title: "Emergency SOS Activated",
      description: "Connecting to emergency services...",
      variant: "destructive",
    });
  };

  const roles = [
    {
      icon: <Users className="w-8 h-8" />,
      title: t('role.patient'),
      description: t('role.patient.desc'),
      path: "/patient",
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: t('role.doctor'),
      description: t('role.doctor.desc'),
      path: "/doctor",
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: t('role.pharmacy'),
      description: t('role.pharmacy.desc'),
      path: "/pharmacy",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: t('role.ngo'),
      description: t('role.ngo.desc'),
      path: "/ngo",
    },
  ];

  return (
    <div className="min-h-screen animated-bg">
      <img src="/src/assets/sambhav-logo.png" alt="Sambhav Logo Watermark" className="sambhav-watermark" />
      <Header 
        onLanguageChange={handleLanguageChange}
        onVoiceClick={handleVoiceClick}
      />
      
      {/* Floating Logo Watermark */}
      <div className="floating-watermark">
        <img 
          src="/src/assets/sambhav-logo.png" 
          alt="Sambhav Logo" 
          className="w-full h-auto opacity-60"
        />
      </div>


      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Video Section */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md">
              <div className="aspect-video">
                <iframe
                  src="https://drive.google.com/file/d/1fENhaY2whuuIMJa4m4bReUB_1VS7UK09/preview"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                  title="How to Use Sambhav - Healthcare for Every Village Demo"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 enhanced-text" style={{ fontFamily: 'Times New Roman, serif' }}>
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl enhanced-text mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Times New Roman, serif' }}>
            {t('hero.subtitle')}
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="glass px-4 py-2 rounded-full float-gentle">
              <span className="text-sm font-medium text-white">Secure Data</span>
            </div>
            <div className="glass px-4 py-2 rounded-full float-gentle" style={{ animationDelay: '2s' }}>
              <span className="text-sm font-medium text-white">Works Offline</span>
            </div>
          </div>
          
        </div>

        {/* Auth Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 mt-8">
          <button onClick={() => navigate('/auth/user')} className="glass px-6 py-3 rounded-full text-lg font-bold enhanced-text hover:shadow-lg hover:ring-2 hover:ring-green-400 transition">User Sign In / Register</button>
          <button onClick={() => navigate('/auth/doctor')} className="glass px-6 py-3 rounded-full text-lg font-bold enhanced-text hover:shadow-lg hover:ring-2 hover:ring-green-400 transition">Doctor Sign In / Register</button>
          <button onClick={() => navigate('/auth/pharmacist')} className="glass px-6 py-3 rounded-full text-lg font-bold enhanced-text hover:shadow-lg hover:ring-2 hover:ring-green-400 transition">Pharmacist Sign In / Register</button>
        </div>

        {/* Role Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {roles.map((role, index) => (
            <RoleCard
              key={index}
              icon={role.icon}
              title={role.title}
              description={role.description}
              onClick={() => navigate(role.path)}
              variant={index === 0 ? 'primary' : 'default'}
            />
          ))}
        </div>

        {/* Features Preview */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-12 enhanced-text" style={{ fontFamily: 'Times New Roman, serif' }}>
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="feature-card p-10 rounded-2xl">
              <Globe className="w-14 h-14 mx-auto mb-6 text-healthcare-primary" />
              <h3 className="font-bold text-2xl mb-4 feature-text" style={{ fontFamily: 'Times New Roman, serif' }}>Offline First</h3>
              <p className="text-gray-800 leading-relaxed text-lg readable-text" style={{ fontFamily: 'Times New Roman, serif' }}>Works without internet, syncs when connected</p>
            </div>
            <div className="feature-card p-10 rounded-2xl">
              <Mic className="w-14 h-14 mx-auto mb-6 text-healthcare-primary" />
              <h3 className="font-bold text-2xl mb-4 feature-text" style={{ fontFamily: 'Times New Roman, serif' }}>Voice Enabled</h3>
              <p className="text-gray-800 leading-relaxed text-lg readable-text" style={{ fontFamily: 'Times New Roman, serif' }}>Navigate using voice in your language</p>
            </div>
            <div className="feature-card p-10 rounded-2xl">
              <Shield className="w-14 h-14 mx-auto mb-6 text-healthcare-primary" />
              <h3 className="font-bold text-2xl mb-4 feature-text" style={{ fontFamily: 'Times New Roman, serif' }}>Secure & Private</h3>
              <p className="text-gray-800 leading-relaxed text-lg readable-text" style={{ fontFamily: 'Times New Roman, serif' }}>End-to-end encrypted health records</p>
            </div>
          </div>
          
          {/* Emergency Button */}
          <div className="mt-12">
            <button
              className="emergency-btn"
              onClick={handleEmergency}
            >
              <AlertTriangle className="w-6 h-6 mr-3" />
              {t('emergency.button')}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;