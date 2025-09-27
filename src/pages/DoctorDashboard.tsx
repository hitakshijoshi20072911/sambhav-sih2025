import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Users, FileText, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import ConsultationQueue from "@/components/ConsultationQueue";
import { useLanguage } from "@/components/LanguageProvider";
import { useToast } from "@/components/ui/use-toast";
import sambhavLogo from "@/assets/sambhav-logo.png";

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleFeatureClick = (feature: string) => {
    toast({
      title: "Feature Coming Soon",
      description: `${feature} functionality will be available soon!`,
    });
  };

  const features = [
    {
      id: 'verification',
      icon: <Shield className="w-8 h-8" />,
      title: "Credential Verification",
      description: "Digital badge system for verified healthcare providers",
      color: "healthcare",
    },
    {
      id: 'consultation-queue',
      icon: <Users className="w-8 h-8" />,
      title: "Consultation Queue",
      description: "Adaptive teleconsultation based on bandwidth",
      color: "default",
    },
    {
      id: 'patient-records',
      icon: <FileText className="w-8 h-8" />,
      title: "Patient Records",
      description: "Secure access with offline sync capability",
      color: "default",
    },
    {
      id: 'voice-notes',
      icon: <Mic className="w-8 h-8" />,
      title: "Voice-to-Text Notes",
      description: "Multilingual voice recording and transcription",
      color: "default",
    },
  ];

  const pendingConsultations = [
    { id: 1, patient: "राम कुमार", condition: "Fever, Cough", time: "10:30 AM", type: "Video" },
    { id: 2, patient: "सुनीता देवी", condition: "Pregnancy Checkup", time: "11:00 AM", type: "Audio" },
    { id: 3, patient: "अजय सिंह", condition: "Diabetes Follow-up", time: "11:30 AM", type: "Chat" },
  ];

  const getCardClasses = (color: string) => {
    switch (color) {
      case 'healthcare':
        return 'bg-gradient-primary text-white shadow-healthcare hover:shadow-healthcare';
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
          
          <div className="flex items-center space-x-4 mb-2">
            <h1 className="text-3xl font-bold gradient-text">
              Doctor Dashboard
            </h1>
            <Badge variant="secondary" className="bg-healthcare-primary text-white">
              <Shield className="w-3 h-3 mr-1" />
              Verified
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Provide consultations and manage patient care
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-healthcare-primary">12</div>
              <div className="text-sm text-muted-foreground">Today's Consultations</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-healthcare-primary">3</div>
              <div className="text-sm text-muted-foreground">Pending Queue</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-healthcare-primary">45</div>
              <div className="text-sm text-muted-foreground">Total Patients</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">Online</div>
              <div className="text-sm text-muted-foreground">Status</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Features */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Doctor Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>

          {/* Consultation Queue */}
          <div>
            <ConsultationQueue />
          </div>
        </div>

        {/* Emergency Cases */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Emergency Cases</h2>
          <Card className="border-danger bg-danger/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-danger">No active emergencies</h3>
                  <p className="text-sm text-muted-foreground">All emergency cases have been handled</p>
                </div>
                <Button variant="destructive">
                  View Emergency Protocol
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;