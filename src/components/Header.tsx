import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mic, Globe } from "lucide-react";
import sambhavLogo from "@/assets/sambhav-logo.png";
import { useLanguage } from "@/components/LanguageProvider";

interface HeaderProps {
  onLanguageChange?: (language: string) => void;
  onVoiceClick?: () => void;
}

const Header = ({ onLanguageChange, onVoiceClick }: HeaderProps) => {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { value: "english", label: "English" },
    { value: "hindi", label: "हिन्दी" },
    { value: "punjabi", label: "ਪੰਜਾਬੀ" },
    { value: "bengali", label: "বাংলা" },
    { value: "tamil", label: "தமிழ்" },
    { value: "telugu", label: "తెలుగు" },
  ];

  const handleLanguageChange = (value: string) => {
    setLanguage(value as any);
    onLanguageChange?.(value);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={sambhavLogo} 
            alt="Sambhav Healthcare"
            className="h-10 w-auto"
          />
          <div>
            <h1 className="text-xl font-bold" style={{ color: '#5a8f7b', fontFamily: 'Times New Roman, serif' }}>SAMBHAV</h1>
            <p className="text-xs text-muted-foreground">{t('header.tagline')}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Select value={language} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-32 h-9">
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

          <Button
            variant="outline"
            size="sm"
            className="h-9 w-9 p-0 pulse-healthcare"
            onClick={onVoiceClick}
          >
            <Mic className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;