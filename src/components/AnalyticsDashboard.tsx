import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, MapPin, TrendingUp, DollarSign, AlertCircle } from "lucide-react";

const AnalyticsDashboard = () => {
  const stats = [
    { title: "Total Consultations", value: "1,247", change: "+12%", icon: Users, color: "text-healthcare-primary" },
    { title: "Villages Covered", value: "23", change: "+3", icon: MapPin, color: "text-healthcare-primary" },
    { title: "Active Patients", value: "456", change: "+8%", icon: TrendingUp, color: "text-healthcare-primary" },
    { title: "Funding Raised", value: "₹2.1L", change: "+15%", icon: DollarSign, color: "text-healthcare-primary" }
  ];

  const topDiseases = [
    { name: "Common Cold", cases: 145, percentage: 28 },
    { name: "Diabetes", cases: 89, percentage: 17 },
    { name: "Hypertension", cases: 76, percentage: 15 },
    { name: "Fever", cases: 62, percentage: 12 },
    { name: "Headache", cases: 45, percentage: 9 }
  ];

  const villages = [
    { name: "Nabha", consultations: 234, status: "Active" },
    { name: "Bhadson", consultations: 189, status: "Active" },
    { name: "Patran", consultations: 156, status: "Active" },
    { name: "Dhuri", consultations: 98, status: "Low Activity" },
    { name: "Sanour", consultations: 45, status: "New" }
  ];

  const emergencyReports = [
    { village: "Nabha", type: "Medical Emergency", time: "2 hours ago", status: "Resolved" },
    { village: "Patran", type: "Accident", time: "5 hours ago", status: "In Progress" },
    { village: "Bhadson", type: "Outbreak Alert", time: "1 day ago", status: "Monitoring" }
  ];

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-sm text-healthcare-primary">{stat.change} this month</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Diseases */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-healthcare-primary" />
              Common Health Issues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topDiseases.map((disease, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{disease.name}</span>
                    <span className="text-muted-foreground">{disease.cases} cases</span>
                  </div>
                  <Progress value={disease.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Village Coverage */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-healthcare-primary" />
              Village Coverage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {villages.map((village, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                  <div>
                    <h4 className="font-medium">{village.name}</h4>
                    <p className="text-sm text-muted-foreground">{village.consultations} consultations</p>
                  </div>
                  <Badge variant={village.status === 'Active' ? 'default' : 'secondary'}>
                    {village.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Reports */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-healthcare-primary" />
            Recent Emergency Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {emergencyReports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <h4 className="font-medium">{report.village} - {report.type}</h4>
                  <p className="text-sm text-muted-foreground">{report.time}</p>
                </div>
                <Badge variant={
                  report.status === 'Resolved' ? 'default' : 
                  report.status === 'In Progress' ? 'secondary' : 'outline'
                }>
                  {report.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;