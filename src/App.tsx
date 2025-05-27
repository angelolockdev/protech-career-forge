
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import CVAnalysis from "./pages/CVAnalysis";
import JobMatching from "./pages/JobMatching";
import CoverLetterGenerator from "./pages/CoverLetterGenerator";
import InterviewSimulator from "./pages/InterviewSimulator";
import SalaryEstimator from "./pages/SalaryEstimator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cv-analysis" element={<CVAnalysis />} />
          <Route path="/job-matching" element={<JobMatching />} />
          <Route path="/cover-letter" element={<CoverLetterGenerator />} />
          <Route path="/interview-simulator" element={<InterviewSimulator />} />
          <Route path="/salary-estimator" element={<SalaryEstimator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
