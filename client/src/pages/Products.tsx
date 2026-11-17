import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import orthodonticsImg from "@assets/generated_images/Orthodontics_product_photo_e30e920e.png";
import toothBrushImg from "@assets/generated_images/Tooth_brush_product_dabf558b.png";
import dentalBracesImg from "@assets/generated_images/Dental_braces_product_8a496bd0.png";

const products = [
  {
    id: 1,
    name: "Orthodontics Kit",
    price: 32.00,
    image: orthodonticsImg,
    badge: "Best Seller",
    rating: 4.8,
    description: "Complete orthodontic care kit with premium tools",
  },
  {
    id: 2,
    name: "Electric Tooth Brush",
    price: 12.00,
    image: toothBrushImg,
    badge: "Eco-Friendly",
    rating: 4.5,
    description: "Rechargeable electric toothbrush with 3 modes",
  },
  {
    id: 3,
    name: "Dental Braces Kit",
    price: 250.00,
    image: dentalBracesImg,
    badge: "Premium",
    rating: 4.9,
    description: "Professional-grade dental braces starter kit",
  },
  {
    id: 4,
    name: "Whitening Strips",
    price: 24.99,
    image: toothBrushImg,
    badge: "Popular",
    rating: 4.6,
    description: "14-day teeth whitening treatment strips",
  },
  {
    id: 5,
    name: "Dental Floss Pack",
    price: 8.99,
    image: orthodonticsImg,
    badge: "Essential",
    rating: 4.3,
    description: "Pack of 6 mint-flavored dental floss",
  },
  {
    id: 6,
    name: "Mouthwash Set",
    price: 18.50,
    image: dentalBracesImg,
    badge: "Bundle",
    rating: 4.7,
    description: "3-pack antibacterial mouthwash collection",
  },
  {
    id: 7,
    name: "Retainer Case",
    price: 15.00,
    image: orthodonticsImg,
    badge: "New",
    rating: 4.4,
    description: "Protective case for retainers and aligners",
  },
  {
    id: 8,
    name: "Teeth Cleaning Kit",
    price: 45.00,
    image: toothBrushImg,
    badge: "Professional",
    rating: 4.8,
    description: "Complete at-home teeth cleaning toolkit",
  },
  {
    id: 9,
    name: "Night Guard",
    price: 35.00,
    image: dentalBracesImg,
    badge: "Comfort",
    rating: 4.5,
    description: "Custom-fit night guard for teeth grinding",
  },
  {
    id: 10,
    name: "Tongue Scraper",
    price: 6.99,
    image: orthodonticsImg,
    badge: "Hygienic",
    rating: 4.2,
    description: "Stainless steel tongue cleaner",
  },
  {
    id: 11,
    name: "Travel Dental Kit",
    price: 22.00,
    image: toothBrushImg,
    badge: "Portable",
    rating: 4.6,
    description: "Compact travel-sized dental care set",
  },
  {
    id: 12,
    name: "Dental Mirror Set",
    price: 12.50,
    image: dentalBracesImg,
    badge: "Tools",
    rating: 4.4,
    description: "Professional dental inspection mirrors",
  },
];

export default function Products() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-br from-secondary to-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              data-testid="heading-products"
            >
              Our Products
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium dental care products to maintain your beautiful smile at home
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="group hover-elevate overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-xl border-0"
                  data-testid={`card-product-${product.id}`}
                >
                  <div className="aspect-square bg-secondary/30 flex items-center justify-center p-8 relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      data-testid={`img-product-${product.id}`}
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {product.badge}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 
                      className="text-xl font-bold text-foreground mb-2"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      data-testid={`text-product-name-${product.id}`}
                    >
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground ml-1">(120+ reviews)</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary" data-testid={`text-price-${product.id}`}>
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
                      data-testid={`button-add-cart-${product.id}`}
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
