import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home">
            <img 
              src="/ChatGPT Image Nov 8, 2025, 07_51_00 PM.png" 
              alt="Dentico Logo" 
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span className="text-2xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Dentico
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/our-practice" className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-practice">
              Our Practice
            </Link>
            
            <Link href="/treatments" className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-treatments">
              Treatments
            </Link>

            <Link href="/products" className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-products">
              Products
            </Link>

            <Link href="/appointment" className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-appointment">
              Appointment
            </Link>
            
            <Link href="/contact" className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-contact">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative" data-testid="button-cart">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <Badge 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                    variant="destructive"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t" data-testid="mobile-menu">
            <div className="flex flex-col gap-2">
              <Link href="/our-practice" className="text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-mobile-practice">
                Our Practice
              </Link>
              <Link href="/treatments" className="text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-mobile-treatments">
                Treatments
              </Link>
              <Link href="/products" className="text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-mobile-products">
                Products
              </Link>
              <Link href="/appointment" className="text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-mobile-appointment">
                Appointment
              </Link>
              <Link href="/contact" className="text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-mobile-contact">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
