import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const benefits = [
  "Improved oral hygiene and easier cleaning",
  "Reduced risk of tooth decay and gum disease",
  "Better bite alignment and jaw function",
  "Enhanced confidence with a beautiful smile",
  "Prevention of future dental complications",
  "Better overall health and well-being",
];

export default function HealthBenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="text-benefits-heading"
          >
            Emphasizes health benefits of{" "}
            <span className="underline decoration-primary-foreground/30 decoration-4">straight teeth</span>
            {" "}and focus on healthy smile.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12 text-left">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-primary-foreground/10 backdrop-blur p-4 rounded-xl"
                data-testid={`benefit-item-${index}`}
              >
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5 text-primary-foreground" />
                <span className="text-base">{benefit}</span>
              </div>
            ))}
          </div>

          <Link href="/treatments">
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl px-8 py-6 text-base bg-primary-foreground/10 backdrop-blur border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
              data-testid="button-learn-benefits"
            >
              Learn More About Our Treatments
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
