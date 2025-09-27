import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Stethoscope, CreditCard, Bell, Calendar, GraduationCap, Users, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HealthCard from "@/components/HealthCard";
import SymptomChecker from "@/components/SymptomChecker";
import { useLanguage } from "@/components/LanguageProvider";
import { useToast } from "@/components/ui/use-toast";
import sambhavLogo from "@/assets/sambhav-logo.png";

const PatientDashboard = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleFeatureClick = (feature: string) => {
    if (feature === 'period-tracker') {
      // Open Pari dashboard in new window
      window.open('/pari', '_blank');
      return;
    }
    
    toast({
      title: "Feature Coming Soon",
      description: `${feature} functionality will be available soon!`,
    });
  };

  const features = [
    {
      id: 'consult',
      icon: <Stethoscope className="w-8 h-8" />,
      title: t('dashboard.consult'),
      description: "Symptom checker, teleconsultation with adaptive bandwidth",
      color: "healthcare",
    },
    {
      id: 'health-card',
      icon: <CreditCard className="w-8 h-8" />,
      title: t('dashboard.health-card'),
      description: "Offline QR code, works without internet",
      color: "default",
    },
    {
      id: 'medicine-reminder',
      icon: <Bell className="w-8 h-8" />,
      title: t('dashboard.medicine-reminder'),
      description: "Push notifications and SMS alerts",
      color: "default",
    },
    {
      id: 'period-tracker',
      icon: <Calendar className="w-8 h-8" />,
      title: t('dashboard.period-tracker'),
      description: "Women's health tracking with Pari",
      color: "womens",
    },
    {
      id: 'health-education',
      icon: <GraduationCap className="w-8 h-8" />,
      title: t('dashboard.health-education'),
      description: "Educational videos in your language",
      color: "default",
    },
  ];

  const getCardClasses = (color: string) => {
    switch (color) {
      case 'healthcare':
        return 'bg-gradient-primary text-white shadow-healthcare hover:shadow-healthcare';
      case 'womens':
        return 'bg-gradient-womens text-white shadow-womens hover:shadow-womens';
      default:
        return 'bg-card hover:bg-card-hover border border-border shadow-md hover:shadow-lg';
    }
  };

  return (
    <div className="min-h-screen animated-bg">
      <img src="/src/assets/sambhav-logo.png" alt="Sambhav Logo Watermark" className="sambhav-watermark" />
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-3xl font-bold gradient-text mb-2">
            Patient Dashboard
          </h1>
          <p className="text-muted-foreground">
            Access healthcare services and manage your health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className={`role-card cursor-pointer transition-all duration-300 ${getCardClasses(feature.color)}`}
              onClick={() => handleFeatureClick(feature.id)}
            >
              <CardHeader className="text-center">
                <div className={`mx-auto mb-4 ${feature.color === 'default' ? 'text-healthcare-primary' : 'text-white'}`}>
                  {feature.icon}
                </div>
                <CardTitle className={feature.color === 'default' ? 'text-foreground' : 'text-white'}>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={feature.color === 'default' ? 'text-muted-foreground' : 'text-white/80'}>
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Health Features */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">My Health Card</h2>
            <HealthCard />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">AI Symptom Checker</h2>
            <SymptomChecker />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;