import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { QrCode, User, Calendar, Heart } from "lucide-react";

const HealthCard = () => {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="w-5 h-5 text-healthcare-primary" />
          Health Card
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center">
            <QrCode className="w-16 h-16 text-healthcare-primary" />
          </div>
          <p className="text-sm text-muted-foreground mt-2">Offline QR Code</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Name:</span>
            <span className="text-sm font-medium">रमेश कुमार</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Age:</span>
            <span className="text-sm font-medium">45 years</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Blood Type:</span>
            <span className="text-sm font-medium">O+</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Village:</span>
            <span className="text-sm font-medium">Nabha, Punjab</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <Badge variant="outline" className="w-full justify-between">
            <Heart className="w-4 h-4" />
            Last Checkup: 15 days ago
          </Badge>
          <Badge variant="outline" className="w-full justify-between">
            <Calendar className="w-4 h-4" />
            Next Visit: Dec 25, 2024
          </Badge>
        </div>
        
        <Button className="w-full" variant="outline">
          Share QR Code
        </Button>
      </CardContent>
    </Card>
  );
};

export default HealthCard;