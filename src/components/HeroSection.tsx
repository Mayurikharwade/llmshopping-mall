import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <img src={heroBanner} alt="Elegant traditional saree collection" width={1920} height={900} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="container">
          <div className="max-w-lg animate-fade-up">
            <p className="text-primary-foreground/80 text-sm tracking-[0.3em] uppercase mb-3 font-body">New Collection 2026</p>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-4">
              Timeless <br /><span className="text-gold">Elegance</span>
            </h2>
            <p className="text-primary-foreground/70 text-sm md:text-base mb-6 font-body">
              Discover our handcrafted collection of premium sarees, fabrics & ethnic wear.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-sm text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
