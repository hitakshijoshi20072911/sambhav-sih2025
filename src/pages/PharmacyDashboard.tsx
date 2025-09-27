import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, AlertTriangle, Clock, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import PharmacyStock from "@/components/PharmacyStock";
import { useLanguage } from "@/components/LanguageProvider";
import { useToast } from "@/components/ui/use-toast";
import sambhavLogo from "@/assets/sambhav-logo.png";

const PharmacyDashboard = () => {
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
      id: 'stock-entry',
      icon: <Package className="w-8 h-8" />,
      title: "Stock Entry / Update",
      description: "Manage medicine inventory with barcode scanning",
      color: "healthcare",
    },
    {
      id: 'expiry-alerts',
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Expiry Date Alerts",
      description: "Automated notifications for expiring medicines",
      color: "warning",
    },
    {
      id: 'low-stock',
      icon: <Clock className="w-8 h-8" />,
      title: "Low Stock Reminders",
      description: "Smart reorder alerts based on usage patterns",
      color: "default",
    },
    {
      id: 'prescription-match',
      icon: <Link className="w-8 h-8" />,
      title: "Prescription Match",
      description: "Link to patient demand and doctor prescriptions",
      color: "default",
    },
  ];

  const stockAlerts = [
    { medicine: "Paracetamol 500mg", status: "Low Stock", count: 15, threshold: 50, severity: "warning" },
    { medicine: "Amoxicillin 250mg", status: "Expiring Soon", count: 45, expiry: "15 days", severity: "danger" },
    { medicine: "ORS Packets", status: "Out of Stock", count: 0, threshold: 100, severity: "danger" },
    { medicine: "Iron Tablets", status: "Low Stock", count: 25, threshold: 100, severity: "warning" },
  ];

  const recentOrders = [
    { id: "ORD001", patient: "राम कुमार", medicines: "Paracetamol, Cough Syrup", status: "Ready", time: "2 hours ago" },
    { id: "ORD002", patient: "सुनीता देवी", medicines: "Iron Tablets, Folic Acid", status: "Preparing", time: "1 hour ago" },
    { id: "ORD003", patient: "अजय सिंह", medicines: "Diabetes Medicine", status: "Delivered", time: "30 min ago" },
  ];

  const getCardClasses = (color: string) => {
    switch (color) {
      case 'healthcare':
        return 'bg-gradient-primary text-white shadow-healthcare hover:shadow-healthcare';
      case 'warning':
        return 'bg-warning text-warning-foreground shadow-md hover:shadow-lg';
      default:
        return 'bg-card hover:bg-card-hover border border-border shadow-md hover:shadow-lg';
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'danger':
        return <Badge variant="destructive">Critical</Badge>;
      case 'warning':
        return <Badge className="bg-warning text-warning-foreground">Warning</Badge>;
      default:
        return <Badge variant="secondary">Normal</Badge>;
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
            Pharmacy Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage medicine inventory and prescriptions
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-healthcare-primary">245</div>
              <div className="text-sm text-muted-foreground">Total Medicines</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-warning">4</div>
              <div className="text-sm text-muted-foreground">Low Stock Items</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-danger">2</div>
              <div className="text-sm text-muted-foreground">Expiring Soon</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-healthcare-primary">18</div>
              <div className="text-sm text-muted-foreground">Today's Orders</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Features */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Pharmacy Tools</h2>
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

            {/* Stock Alerts */}
            <h3 className="text-xl font-semibold mb-4">Stock Alerts</h3>
            <div className="space-y-3">
              {stockAlerts.map((alert, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold">{alert.medicine}</h3>
                          {getSeverityBadge(alert.severity)}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {alert.status}: {alert.count} units
                          {alert.expiry && ` (expires in ${alert.expiry})`}
                          {alert.threshold && ` (threshold: ${alert.threshold})`}
                        </p>
                      </div>
                      <Button size="sm" variant="outline">
                        Reorder
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Recent Orders</h2>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{order.id}</h3>
                      <Badge variant={order.status === 'Ready' ? 'default' : order.status === 'Delivered' ? 'secondary' : 'outline'}>
                        {order.status}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium mb-1">{order.patient}</p>
                    <p className="text-sm text-muted-foreground mb-2">{order.medicines}</p>
                    <p className="text-xs text-muted-foreground">{order.time}</p>
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" className="w-full">
                View All Orders
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button className="w-full" onClick={() => handleFeatureClick('add-stock')}>
                  Add New Stock
                </Button>
                <Button variant="outline" className="w-full" onClick={() => handleFeatureClick('scan-barcode')}>
                  Scan Barcode
                </Button>
                <Button variant="outline" className="w-full" onClick={() => handleFeatureClick('generate-report')}>
                  Generate Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PharmacyDashboard;