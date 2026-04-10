import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/80 pt-16 pb-8">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h4 className="font-heading text-primary-foreground font-semibold mb-4">My Account</h4>
          <ul className="space-y-2 text-sm">
            {["Sign In", "Register", "Order History", "Wishlist"].map(l => <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-primary-foreground font-semibold mb-4">Information</h4>
          <ul className="space-y-2 text-sm">
            {["About Us", "Shipping Policy", "Returns & Refunds", "Privacy Policy"].map(l => <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-primary-foreground font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            {["Contact Us", "FAQs", "Size Guide", "Track Order"].map(l => <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-primary-foreground font-semibold mb-4">Contact Us</h4>
          <p className="text-sm mb-2">hello@llmshop.com</p>
          <p className="text-sm mb-4">+91 98765 43210</p>
          <div className="flex gap-3">
            {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
        © 2026 LLM Shop. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
