import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/components/LanguageProvider";
import Landing from "./pages/Landing";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import PharmacyDashboard from "./pages/PharmacyDashboard";
import NGODashboard from "./pages/NGODashboard";
import PariDashboard from "./pages/PariDashboard";
import NotFound from "./pages/NotFound";
import UserAuth from "./pages/UserAuth";
import DoctorAuth from "./pages/DoctorAuth";
import PharmacistAuth from "./pages/PharmacistAuth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/patient" element={<PatientDashboard />} />
            <Route path="/doctor" element={<DoctorDashboard />} />
            <Route path="/pharmacy" element={<PharmacyDashboard />} />
            <Route path="/ngo" element={<NGODashboard />} />
            <Route path="/pari" element={<PariDashboard />} />
            <Route path="/auth/user" element={<UserAuth />} />
            <Route path="/auth/doctor" element={<DoctorAuth />} />
            <Route path="/auth/pharmacist" element={<PharmacistAuth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
