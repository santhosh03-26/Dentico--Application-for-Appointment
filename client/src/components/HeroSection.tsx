import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Hero_smiling_patient_image_03b566a2.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FBEDE3] via-[#FBEDE3] to-[#f5d5d8] py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur rounded-full text-sm text-foreground">
              <Heart className="h-4 w-4 text-primary fill-primary" />
              <span>Trusted by 10,000+ happy patients</span>
            </div>
            
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              data-testid="text-hero-headline"
            >
              Smile with Confidence
            </h1>
            
            <p className="text-lg md:text-xl text-foreground max-w-xl">
              Emphasizes health benefits of <span className="font-semibold">straight teeth</span> and focus on healthy smile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/appointment">
                <Button 
                  size="lg" 
                  className="rounded-xl px-8 py-6 text-base"
                  data-testid="button-book-appointment"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/treatments">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="rounded-xl px-8 py-6 text-base bg-white/40 backdrop-blur border-primary/20"
                  data-testid="button-learn-more"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
              <div>
                <div className="text-2xl font-bold text-primary" data-testid="text-stat-experience">15+</div>
                <div>Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary" data-testid="text-stat-dentists">25+</div>
                <div>Expert Dentists</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary" data-testid="text-stat-rating">4.9</div>
                <div>Patient Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Happy patient with beautiful smile"
                className="w-full h-auto object-cover"
                data-testid="img-hero"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg hidden lg:block">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm">Happy Patients</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-chart-2/10 rounded-full blur-3xl"></div>
    </section>
  );
}
