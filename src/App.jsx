import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import { ShopProvider } from "./ShopContext.jsx";

// --> HEADER, FOOTER AUR COMPONENTS IMPORT <--
import Navbar from "./components/Navbar.jsx"; 
import Footer from "./components/Footer.jsx"; 

// --> YAHAN AAPKA NAYA VIDEO POPUP IMPORT KIYA HAI <--
import VideoPopup from "./pages/VideoPopup.jsx"; 

// 🌟 YAHAN FLOATING VIDEO WIDGET IMPORT KIYA HAI 🌟
//import FloatingVideoWidget from "./components/FloatingVideoWidget.jsx"; 
import FloatingVideoWidget from "./FloatingVideoWidget.jsx"; 

import Index from "./pages/Index.jsx";
import Shop from "./pages/Shop.jsx";
import Sarees from "./pages/Sarees.jsx";
import Fabrics from "./pages/Fabrics.jsx";
import Kurtas from "./pages/Kurtas.jsx";
import Dupattas from "./pages/Dupattas.jsx";
import Categories from "./pages/Categories.jsx"; 
import Featured from "./pages/Featured.jsx";     
import Reviews from "./pages/Reviews.jsx";       
import Gallery from "./pages/Gallery.jsx";       
import ProductDetail from "./pages/ProductDetail.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import SignIn from "./pages/SignIn.jsx";
import Cart from "./pages/Cart.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Register from "./pages/Register.jsx";
import TrackOrder from "./pages/TrackOrder.jsx";
import Faq from "./pages/Faq.jsx";
import Checkout from "./pages/Checkout.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  return (
    <ShopProvider>
      <BrowserRouter>
        
        {/* 'relative' class add ki hai taaki popups aur floating buttons theek se kaam karein */}
        <div className="flex flex-col min-h-screen relative">
          
          {/* --> NAVBAR HAR PAGE PE CONSTANT RAHEGA <-- */}
          <Navbar />

          {/* --> BEECH KA DYNAMIC CONTENT <-- */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/products" element={<Shop />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/featured" element={<Featured />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/sarees" element={<Sarees />} />
              <Route path="/fabrics" element={<Fabrics />} />
              <Route path="/kurtas" element={<Kurtas />} />
              <Route path="/dupattas" element={<Dupattas />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/account" element={<SignIn />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/register" element={<Register />} />
              <Route path="/track-order" element={<TrackOrder />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* --> FOOTER HAR PAGE PE CONSTANT RAHEGA <-- */}
          <Footer />

          {/* 🌟 1. ROYAL VIDEO LOGIN POPUP 🌟 (Page ke upar aayega bina layout tode) */}
          <VideoPopup />

          {/* 🌟 2. FLOATING VIDEO WIDGET 🌟 (Yahan pehle WhatsApp tha, ab Video aayega) */}
          <FloatingVideoWidget />

        </div>
      </BrowserRouter>
    </ShopProvider>
  );
};

export default App;