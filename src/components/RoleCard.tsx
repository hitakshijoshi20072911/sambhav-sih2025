import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface RoleCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  variant?: 'primary' | 'womens' | 'default';
  className?: string;
}

const RoleCard = ({ icon, title, description, onClick, variant = 'default', className }: RoleCardProps) => {
  return (
    <Card className={cn(
      "relative overflow-hidden transition-all duration-300 cursor-pointer role-card",
      "bg-white/90 backdrop-blur-sm border-healthcare-primary/30 shadow-lg",
      variant === 'primary' && "ring-2 ring-healthcare-primary/40",
      className
    )} onClick={onClick}>
      <CardHeader className="text-center relative z-10">
        <div className="mx-auto mb-4 p-4 rounded-full bg-healthcare-primary/20 transition-all duration-300 hover:bg-healthcare-primary/30">
          {icon}
        </div>
        <CardTitle className="text-foreground font-bold text-lg readable-text" style={{ fontFamily: 'Times New Roman, serif' }}>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center relative z-10">
        <CardDescription className="text-muted-foreground leading-relaxed readable-text" style={{ fontFamily: 'Times New Roman, serif' }}>
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default RoleCard;