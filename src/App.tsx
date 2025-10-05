import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import Wallet from "./pages/Wallet";
import Insights from "./pages/Insights";
import Rewards from "./pages/Rewards";
import Auth from "./pages/Auth";
import BottomNav from "./components/BottomNav";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<><Dashboard /><BottomNav /></>} />
            <Route path="/goals" element={<><Goals /><BottomNav /></>} />
            <Route path="/wallet" element={<><Wallet /><BottomNav /></>} />
            <Route path="/insights" element={<><Insights /><BottomNav /></>} />
            <Route path="/rewards" element={<><Rewards /><BottomNav /></>} />
            <Route path="/auth" element={<Auth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
