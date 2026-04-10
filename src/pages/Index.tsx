import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BestOfSeason from "@/components/BestOfSeason";
import ProductGrid from "@/components/ProductGrid";
import ShopByCategory from "@/components/ShopByCategory";
import FeaturedBanner from "@/components/FeaturedBanner";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <BestOfSeason />
    <ShopByCategory />
    <FeaturedBanner />
    <CustomerReviews />
    <Footer />
  </div>
);

export default Index;
