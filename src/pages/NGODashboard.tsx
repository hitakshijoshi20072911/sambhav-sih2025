import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, BarChart3, DollarSign, MapPin, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import { useLanguage } from "@/components/LanguageProvider";
import { useToast } from "@/components/ui/use-toast";
import sambhavLogo from "@/assets/sambhav-logo.png";

const NGODashboard = () => {
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
      id: 'analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Track consultations, diseases, and village coverage",
      color: "healthcare",
    },
    {
      id: 'funding',
      icon: <DollarSign className="w-8 h-8" />,
      title: "Funding Tracker",
      description: "Monitor NGO contributions and fund allocation",
      color: "default",
    },
    {
      id: 'village-coverage',
      icon: <MapPin className="w-8 h-8" />,
      title: "Village Coverage",
      description: "Map of covered villages and outreach programs",
      color: "default",
    },
    {
      id: 'emergency-reports',
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Emergency Reports",
      description: "Real-time emergency alerts from villages",
      color: "danger",
    },
  ];

  const villageStats = [
    { name: "ਪਿੰਡ ਰਾਮਪੁਰ", population: 1200, coverage: 85, consultations: 45, diseases: ["Fever", "Diabetes"] },
    { name: "गाँव सुखपुर", population: 800, coverage: 92, consultations: 32, diseases: ["Hypertension", "Cold"] },
    { name: "ગામ મહેસાણા", population: 1500, coverage: 78, consultations: 67, diseases: ["Malaria", "Pregnancy"] },
    { name: "గ్రామం విజయవాడ", population: 950, coverage: 88, consultations: 41, diseases: ["Fever", "Asthma"] },
  ];

  const fundingData = [
    { source: "Government Grant", amount: 50000, allocated: 42000, percentage: 84 },
    { source: "NGO Partnership", amount: 30000, allocated: 28500, percentage: 95 },
    { source: "Community Fund", amount: 15000, allocated: 12000, percentage: 80 },
  ];

  const emergencyAlerts = [
    { village: "ਪਿੰਡ ਰਾਮਪੁਰ", type: "Medical Emergency", priority: "High", time: "2 hours ago" },
    { village: "गाँव सुखपुर", type: "Medicine Shortage", priority: "Medium", time: "5 hours ago" },
  ];

  const getCardClasses = (color: string) => {
    switch (color) {
      case 'healthcare':
        return 'bg-gradient-primary text-white shadow-healthcare hover:shadow-healthcare';
      case 'danger':
        return 'bg-danger text-danger-foreground shadow-md hover:shadow-lg';
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
            NGO/Government Dashboard
          </h1>
          <p className="text-muted-foreground">
            Monitor health programs and community welfare
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-healthcare-primary">24</div>
              <div className="text-sm text-muted-foreground">Villages Covered</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-healthcare-primary">1,247</div>
              <div className="text-sm text-muted-foreground">Total Consultations</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-healthcare-primary">₹95,000</div>
              <div className="text-sm text-muted-foreground">Funds Allocated</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-danger">2</div>
              <div className="text-sm text-muted-foreground">Active Emergencies</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Features */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Management Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

            {/* Village Statistics */}
            <h3 className="text-xl font-semibold mb-4">Village Coverage Statistics</h3>
            <div className="space-y-4">
              {villageStats.map((village, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold">{village.name}</h3>
                        <p className="text-sm text-muted-foreground">Population: {village.population}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{village.coverage}% Coverage</div>
                        <div className="text-sm text-muted-foreground">{village.consultations} consultations</div>
                      </div>
                    </div>
                    <Progress value={village.coverage} className="mb-2" />
                    <div className="flex flex-wrap gap-1">
                      {village.diseases.map((disease, i) => (
                        <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                          {disease}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Emergency Alerts */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Emergency Alerts</h2>
              <div className="space-y-3">
                {emergencyAlerts.map((alert, index) => (
                  <Card key={index} className="border-danger bg-danger/5">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-danger">{alert.type}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${
                          alert.priority === 'High' ? 'bg-danger text-danger-foreground' : 'bg-warning text-warning-foreground'
                        }`}>
                          {alert.priority}
                        </span>
                      </div>
                      <p className="text-sm font-medium">{alert.village}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                      <Button size="sm" variant="destructive" className="w-full mt-2">
                        Respond
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Funding Overview */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Funding Overview</h2>
              <div className="space-y-4">
                {fundingData.map((fund, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-sm">{fund.source}</h3>
                        <span className="text-sm text-healthcare-primary">₹{fund.allocated.toLocaleString()}</span>
                      </div>
                      <Progress value={fund.percentage} className="mb-1" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>₹{fund.amount.toLocaleString()} total</span>
                        <span>{fund.percentage}% allocated</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button variant="outline" className="w-full">
                  View Detailed Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NGODashboard;