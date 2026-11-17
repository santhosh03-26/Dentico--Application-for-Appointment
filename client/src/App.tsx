import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/contexts/CartContext";
import Home from "@/pages/Home";
import Treatments from "@/pages/Treatments";
import OurPractice from "@/pages/OurPractice";
import Appointment from "@/pages/Appointment";
import Contact from "@/pages/Contact";
import Products from "@/pages/Products";
import Cart from "@/pages/Cart";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/treatments" component={Treatments} />
      <Route path="/our-practice" component={OurPractice} />
      <Route path="/appointment" component={Appointment} />
      <Route path="/contact" component={Contact} />
      <Route path="/products" component={Products} />
      <Route path="/cart" component={Cart} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
