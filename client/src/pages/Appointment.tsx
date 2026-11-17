import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentSection from "@/components/AppointmentSection";

export default function Appointment() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-gradient-to-br from-secondary to-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h1 
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              data-testid="heading-appointment"
            >
              Book Your Appointment
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take the first step towards your perfect smile. Schedule a consultation with our expert team today.
            </p>
          </div>
        </section>

        <AppointmentSection />
      </main>

      <Footer />
    </div>
  );
}
