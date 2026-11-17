import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Heart, Clock } from "lucide-react";
import { Link } from "wouter";

export default function OurPractice() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-secondary to-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  data-testid="heading-practice"
                >
                  Welcome to Dentico
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  A modern dental practice dedicated to creating beautiful, healthy smiles through innovative treatments and compassionate care.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl text-foreground">15+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-chart-2" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl text-foreground">5000+</div>
                      <div className="text-sm text-muted-foreground">Happy Patients</div>
                    </div>
                  </div>
                </div>
                <Link href="/appointment">
                  <Button size="lg" className="rounded-xl" data-testid="button-book">
                    Book Your Visit
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-2xl blur-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-chart-2/10 aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                      <Award className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Modern Dental Clinic</h3>
                    <p className="text-muted-foreground">State-of-the-art facilities for your comfort</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 
              className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Why Choose Dentico?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover-elevate" data-testid="card-value-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Expert Team
                  </h3>
                  <p className="text-muted-foreground">
                    Board-certified dentists with years of specialized training in orthodontics and cosmetic dentistry.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-value-2">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-chart-2" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Patient-Centered Care
                  </h3>
                  <p className="text-muted-foreground">
                    We listen to your concerns and create personalized treatment plans that fit your lifestyle and budget.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-value-3">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Modern Technology
                  </h3>
                  <p className="text-muted-foreground">
                    State-of-the-art equipment and cutting-edge techniques for comfortable, efficient treatments.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-value-4">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-chart-2" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Family Friendly
                  </h3>
                  <p className="text-muted-foreground">
                    Comprehensive dental care for patients of all ages in a welcoming, comfortable environment.
                  </p>
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
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              At Dentico, we believe everyone deserves a healthy, beautiful smile. Our mission is to provide exceptional dental care using the latest technology and techniques, while creating a warm, welcoming atmosphere where patients feel valued and comfortable.
            </p>
            <p className="text-lg text-muted-foreground">
              We're committed to ongoing education, staying at the forefront of dental innovation to offer you the best possible treatments and outcomes.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
