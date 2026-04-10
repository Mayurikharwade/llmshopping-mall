import { ShoppingCart, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

const products = [
  { id: 1, img: product1, name: "Royal Kanchipuram Silk Saree", price: 12499, originalPrice: 15999, tag: "Bestseller" },
  { id: 2, img: product2, name: "Pastel Embroidered Kurta", price: 2999, originalPrice: 4499, tag: "New" },
  { id: 3, img: product3, name: "Indigo Block Print Dupatta", price: 1899, originalPrice: 2499, tag: null },
  { id: 4, img: product4, name: "Banarasi Silk Fabric (per meter)", price: 3499, originalPrice: 4999, tag: "Premium" },
  { id: 5, img: product5, name: "Chanderi Pink Silk Saree", price: 8999, originalPrice: 11999, tag: "Trending" },
  { id: 6, img: product6, name: "Ikat Handwoven Cotton Fabric", price: 1299, originalPrice: 1799, tag: null },
  { id: 7, img: product7, name: "Olive Linen Kurta Set", price: 3799, originalPrice: 5299, tag: "New" },
  { id: 8, img: product8, name: "Kalamkari Print Cotton Fabric", price: 999, originalPrice: 1499, tag: null },
];

const ProductCard = ({ product, index, isVisible }: { product: typeof products[0]; index: number; isVisible: boolean }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <div
      className={`group relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${isVisible ? `animate-fade-up stagger-${(index % 5) + 1}` : "opacity-0"}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          width={512}
          height={640}
          className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />

        {/* Tag */}
        {product.tag && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {product.tag}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-card hover:scale-110"
        >
          <Heart className={`w-4 h-4 transition-colors ${isWishlisted ? "fill-destructive text-destructive" : "text-foreground"}`} />
        </button>

        {/* Quick add button */}
        <button className="absolute bottom-3 left-3 right-3 bg-primary text-primary-foreground py-2.5 rounded-lg font-medium text-sm flex items-center justify-center gap-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary/90 active:scale-[0.98]">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-body text-sm font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-lg font-heading font-semibold text-foreground">₹{product.price.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
          <span className="text-xs font-semibold text-primary">{discount}% OFF</span>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="products" className="py-16 md:py-24 bg-secondary/30 scroll-mt-20" ref={ref}>
      <div className="container">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-primary text-sm uppercase tracking-widest font-medium mb-2">Curated for You</p>
          <h2 className="text-3xl md:text-4xl font-heading">Our Popular Products</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} isVisible={isVisible} />
          ))}
        </div>
        <div className={`text-center mt-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <button className="px-8 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 active:scale-[0.97]">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
