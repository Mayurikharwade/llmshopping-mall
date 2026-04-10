import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  { icon: "👗", name: "Sarees" },
  { icon: "🧵", name: "Fabrics" },
  { icon: "👘", name: "Kurtas" },
  { icon: "🧣", name: "Dupattas" },
  { icon: "✂️", name: "Stitching" },
];

const ShopByCategory = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="categories" className="py-16 bg-card scroll-mt-20" ref={ref}>
      <div className="container">
        <h2 className={`text-3xl md:text-4xl font-heading text-center mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          Shop by Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`flex flex-col items-center gap-3 cursor-pointer group ${isVisible ? `animate-scale-in stagger-${i + 1}` : "opacity-0"}`}
            >
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center text-3xl transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110">
                {cat.icon}
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
