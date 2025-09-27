import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Package, AlertTriangle, Plus, Search, Calendar } from "lucide-react";

const PharmacyStock = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const medicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      stock: 85,
      minStock: 20,
      expiryDate: "2025-03-15",
      price: 2.50,
      demand: "High"
    },
    {
      id: 2,
      name: "Amoxicillin 250mg",
      stock: 12,
      minStock: 15,
      expiryDate: "2024-12-30",
      price: 8.75,
      demand: "Medium"
    },
    {
      id: 3,
      name: "Metformin 850mg",
      stock: 45,
      minStock: 25,
      expiryDate: "2025-06-20",
      price: 5.25,
      demand: "High"
    },
    {
      id: 4,
      name: "Iron Tablets",
      stock: 8,
      minStock: 30,
      expiryDate: "2024-11-15",
      price: 3.00,
      demand: "Very High"
    }
  ];

  const getStockStatus = (current: number, min: number) => {
    const percentage = (current / min) * 100;
    if (percentage <= 50) return { color: 'destructive' as const, text: 'Critical' };
    if (percentage <= 100) return { color: 'secondary' as const, text: 'Low' };
    return { color: 'default' as const, text: 'Good' };
  };

  const isExpiringSoon = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30;
  };

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5 text-healthcare-primary" />
            Medicine Inventory
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search medicines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button className="bg-healthcare-primary hover:bg-healthcare-primary-dark">
              <Plus className="w-4 h-4 mr-2" />
              Add Stock
            </Button>
          </div>

          <div className="space-y-4">
            {filteredMedicines.map((medicine) => {
              const stockStatus = getStockStatus(medicine.stock, medicine.minStock);
              const expiringSoon = isExpiringSoon(medicine.expiryDate);
              
              return (
                <div key={medicine.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{medicine.name}</h4>
                      <p className="text-sm text-muted-foreground">₹{medicine.price} per unit</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant={stockStatus.color}>{stockStatus.text}</Badge>
                      {expiringSoon && (
                        <Badge variant="destructive">
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          Expiring
                        </Badge>
                      )}
                      <Badge variant="outline">{medicine.demand} Demand</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Stock: {medicine.stock} units</span>
                      <span>Min: {medicine.minStock} units</span>
                    </div>
                    <Progress 
                      value={(medicine.stock / medicine.minStock) * 100} 
                      className="h-2"
                    />
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Expires: {medicine.expiryDate}
                      </div>
                      <Button size="sm" variant="outline">
                        Update Stock
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PharmacyStock;