import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/dentico-logo.svg" 
                alt="Dentico Logo" 
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Dentico
              </span>
            </div>
            <p className="text-sm text-background/80 mb-4">
              Your trusted partner for modern dental care and beautiful smiles.
            </p>
            <div className="flex gap-3">
              <button
                className="w-9 h-9 rounded-md bg-background/10 hover-elevate flex items-center justify-center transition-colors"
                data-testid="button-facebook"
                onClick={() => console.log('Facebook clicked')}
              >
                <Facebook className="h-4 w-4" />
              </button>
              <button
                className="w-9 h-9 rounded-md bg-background/10 hover-elevate flex items-center justify-center transition-colors"
                data-testid="button-instagram"
                onClick={() => console.log('Instagram clicked')}
              >
                <Instagram className="h-4 w-4" />
              </button>
              <button
                className="w-9 h-9 rounded-md bg-background/10 hover-elevate flex items-center justify-center transition-colors"
                data-testid="button-twitter"
                onClick={() => console.log('Twitter clicked')}
              >
                <Twitter className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/our-practice" className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-practice">
                  Our Practice
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-treatments">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-products">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-appointment">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-background transition-colors" data-testid="link-footer-contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-background/80" data-testid="text-phone">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-background/80" data-testid="text-email">info@dentico.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-background/80" data-testid="text-address">
                  123 Dental Street<br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Office Hours
            </h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium">9AM - 6PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">10AM - 4PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Dentico. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
