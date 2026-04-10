import { useState } from "react";
import { Search, User, Heart, ShoppingBag, Menu, X, Phone, Mail } from "lucide-react";

const navLinks = ["Sarees", "Fabrics", "Suits", "Dupattas", "Blouses", "Kurtas", "New Arrivals"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs py-2 px-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> hello@llmshop.com</span>
            <span className="hidden sm:flex items-center gap-1"><Phone className="w-3 h-3" /> +91 98765 43210</span>
          </div>
          <span className="hidden md:block">Free shipping on orders above ₹999</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card shadow-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">
            LLM <span className="text-primary">Shop</span>
          </h1>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:text-primary transition-colors"><Search className="w-5 h-5" /></button>
            <button className="p-2 hover:text-primary transition-colors hidden sm:block"><User className="w-5 h-5" /></button>
            <button className="p-2 hover:text-primary transition-colors hidden sm:block"><Heart className="w-5 h-5" /></button>
            <button className="p-2 hover:text-primary transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
            <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-card border-t animate-fade-in">
            <ul className="flex flex-col py-4 px-6 gap-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary py-2 block">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
