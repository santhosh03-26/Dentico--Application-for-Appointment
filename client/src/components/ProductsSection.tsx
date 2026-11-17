import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import orthodonticsImg from "@assets/generated_images/Orthodontics_product_photo_e30e920e.png";
import toothBrushImg from "@assets/generated_images/Tooth_brush_product_dabf558b.png";
import dentalBracesImg from "@assets/generated_images/Dental_braces_product_8a496bd0.png";

const products = [
  {
    id: 1,
    name: "Orthodontics",
    price: 32.00,
    image: orthodonticsImg,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Tooth Brush",
    price: 12.00,
    image: toothBrushImg,
    badge: "Eco-Friendly",
  },
  {
    id: 3,
    name: "Dental Braces",
    price: 250.00,
    image: dentalBracesImg,
    badge: "Premium",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-chart-2 text-white" id="products">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="text-products-heading"
          >
            Featured <span className="text-white">Products</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Premium dental care products for your healthy smile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group hover-elevate overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-2xl border-0"
              data-testid={`card-product-${index}`}
            >
              <div className="aspect-square bg-secondary/30 flex items-center justify-center p-8 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  data-testid={`img-product-${index}`}
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {product.badge}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 
                  className="text-xl font-bold text-foreground mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  data-testid={`text-product-name-${index}`}
                >
                  {product.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-primary" data-testid={`text-price-${index}`}>
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ${(product.price * 1.3).toFixed(2)}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full rounded-xl"
                  variant="default"
                  data-testid={`button-add-cart-${index}`}
                  onClick={() => console.log(`Added ${product.name} to cart`)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20"
              data-testid="button-see-all-products"
            >
              See all products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
