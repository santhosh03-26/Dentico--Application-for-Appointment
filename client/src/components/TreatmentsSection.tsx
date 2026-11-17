import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smile, Shield, Sparkles, Layers } from "lucide-react";
import { Link } from "wouter";

const treatments = [
  {
    id: 1,
    title: "Invisalign",
    description: "Comfortable & discreet way to transform your smile using clear aligners.",
    icon: Smile,
    color: "bg-primary/10 text-primary",
    badge: "Popular",
  },
  {
    id: 2,
    title: "Space Maintainers",
    description: "Preserve space for future teeth to ensure proper alignment as you grow.",
    icon: Shield,
    color: "bg-chart-2/10 text-chart-2",
    badge: "Essential",
  },
  {
    id: 3,
    title: "Lingual Braces",
    description: "Hidden braces placed behind teeth for a discreet orthodontic solution.",
    icon: Sparkles,
    color: "bg-chart-3/10 text-chart-3",
    badge: "Discreet",
  },
  {
    id: 4,
    title: "Ceramic Braces",
    description: "Clear ceramic braces that blend in seamlessly with your natural tooth color.",
    icon: Layers,
    color: "bg-chart-1/10 text-chart-1",
    badge: "Natural",
  },
];

export default function TreatmentsSection() {
  return (
    <section className="py-16 md:py-24 bg-background" id="treatments">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="text-treatments-heading"
          >
            Our Treatments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced dental solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <Card
              key={treatment.id}
              className="group hover-elevate cursor-pointer transition-all duration-300 hover:shadow-xl rounded-2xl border-0 overflow-visible"
              data-testid={`card-treatment-${index}`}
              onClick={() => console.log(`${treatment.title} clicked`)}
            >
              <CardHeader className="space-y-4">
                <div className={`w-14 h-14 rounded-xl ${treatment.color} flex items-center justify-center`}>
                  <treatment.icon className="h-7 w-7" />
                </div>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {treatment.title}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {treatment.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {treatment.description}
                </CardDescription>
                <Link href="/treatments">
                  <button
                    className="mt-4 text-primary font-medium text-sm hover:underline"
                    data-testid={`button-learn-treatment-${index}`}
                  >
                    Learn More →
                  </button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
