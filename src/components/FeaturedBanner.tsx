import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import casualElegance from "@/assets/casual-elegance.jpg";
import mixMatch from "@/assets/mix-match.jpg";

const FeaturedBanner = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="featured" className="py-16 md:py-24 scroll-mt-20" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[500px]">
          <div className={`relative overflow-hidden rounded-lg cursor-pointer group ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <img src={casualElegance} alt="Casual Elegance" loading="lazy" width={640} height={800} className="w-full h-80 md:h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-primary-foreground text-2xl md:text-3xl font-heading font-semibold italic">Casual Elegance</h3>
              <p className="text-primary-foreground/70 text-sm mt-1 mb-4">Everyday style, timeless grace</p>
              <button className="bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 px-6 py-2 rounded-sm text-xs uppercase tracking-wider hover:bg-primary-foreground/30 transition-all">
                Shop Now
              </button>
            </div>
          </div>

          <div className={`relative overflow-hidden rounded-lg cursor-pointer group ${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <img src={mixMatch} alt="Mix and Match" loading="lazy" width={640} height={512} className="w-full h-80 md:h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
            <div className="absolute bottom-8 right-8 text-right">
              <p className="text-primary text-xs uppercase tracking-widest mb-1">Exclusive</p>
              <h3 className="text-primary-foreground text-2xl md:text-3xl font-heading font-bold">Mix & Match</h3>
              <p className="text-primary-foreground/70 text-sm mt-1 mb-4">Curated sets for every occasion</p>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-sm text-xs uppercase tracking-wider hover:bg-primary/90 transition-all">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
