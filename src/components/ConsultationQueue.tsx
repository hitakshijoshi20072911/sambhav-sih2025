import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, Video, Phone, MessageSquare, AlertCircle } from "lucide-react";

const ConsultationQueue = () => {
  const consultations = [
    {
      id: 1,
      patient: "ਸੀਮਾ ਕੌਰ",
      age: 28,
      condition: "Pregnancy Checkup",
      time: "10:30 AM",
      type: "video",
      urgency: "medium",
      village: "Nabha"
    },
    {
      id: 2,
      patient: "ਰਮੇਸ਼ ਸਿੰਘ",
      age: 45,
      condition: "Diabetes Follow-up",
      time: "11:00 AM",
      type: "phone",
      urgency: "low",
      village: "Bhadson"
    },
    {
      id: 3,
      patient: "ਅਮਰਜੀਤ ਕੌਰ",
      age: 65,
      condition: "Chest Pain",
      time: "11:30 AM",
      type: "video",
      urgency: "high",
      village: "Patran"
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'phone': return <Phone className="w-4 h-4" />;
      case 'chat': return <MessageSquare className="w-4 h-4" />;
      default: return <Video className="w-4 h-4" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Consultation Queue</span>
          <Badge variant="secondary">{consultations.length} Pending</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {consultations.map((consultation) => (
            <div key={consultation.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-healthcare-primary text-white">
                      {consultation.patient.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{consultation.patient}</h4>
                    <p className="text-sm text-muted-foreground">
                      {consultation.age} years • {consultation.village}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {consultation.urgency === 'high' && (
                    <AlertCircle className="w-4 h-4 text-destructive" />
                  )}
                  <Badge variant={getUrgencyColor(consultation.urgency)}>
                    {consultation.urgency}
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{consultation.condition}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {consultation.time}
                    {getTypeIcon(consultation.type)}
                    {consultation.type}
                  </div>
                </div>
                <Button size="sm" className="bg-healthcare-primary hover:bg-healthcare-primary-dark">
                  Start Consultation
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <Button variant="outline" className="w-full mt-4">
          View All Appointments
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConsultationQueue;