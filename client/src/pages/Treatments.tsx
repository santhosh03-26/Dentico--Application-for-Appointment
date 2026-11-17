import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TreatmentsSection from "@/components/TreatmentsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function Treatments() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-secondary to-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              data-testid="heading-treatments"
            >
              Our Treatments
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover our comprehensive range of orthodontic and dental treatments designed to give you the perfect smile you've always wanted.
            </p>
            <Link href="/appointment">
              <Button size="lg" className="rounded-xl" data-testid="button-book">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </section>

        <TreatmentsSection />

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 
              className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Treatment Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover-elevate" data-testid="card-step-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Initial Consultation
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Meet with our expert team for a comprehensive examination and discuss your goals.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Complete oral examination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Digital scans and X-rays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Treatment options discussion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-step-2">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Custom Treatment Plan
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Receive a personalized plan tailored to your specific needs and timeline.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">3D treatment simulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Timeline and cost breakdown</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Flexible payment options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-step-3">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Begin Treatment
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Start your journey to a perfect smile with our expert care and support.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Regular progress check-ups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Ongoing support and guidance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Beautiful smile results</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Ready to Transform Your Smile?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a consultation today and discover which treatment option is perfect for you.
            </p>
            <Link href="/appointment">
              <Button size="lg" className="rounded-xl" data-testid="button-book-bottom">
                Book Appointment
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
