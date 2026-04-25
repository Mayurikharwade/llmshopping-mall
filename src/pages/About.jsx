import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronRight, Sparkles, Award, Users, ShoppingBag, Heart, 
  Star, Quote, TrendingUp, Shield, Truck, Clock, MapPin,
  Phone, Mail, Globe, Instagram, Facebook, Youtube, ArrowRight,
  Play, Pause, Volume2, VolumeX
} from "lucide-react";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [stats, setStats] = useState({
    customers: 0,
    products: 0,
    years: 0,
    cities: 0
  });
  const videoRef = useRef(null);

  // Hero Slides
  const heroSlides = [
    {
      type: "video",
      src: "https://player.vimeo.com/external/471368789.hd.mp4?s=3c3b3c3b3c3b3c3b3c3b3c3b3c3b3c3b&profile_id=175",
      poster: "https://i.pinimg.com/1200x/d0/3c/66/d03c66620cf836227a25475f34b86ffb.jpg",
      title: "Our Heritage",
      subtitle: "Weaving traditions since 1985"
    },
    {
      type: "image",
      src: "https://i.pinimg.com/1200x/38/59/35/385935f69920a909cc7f9a2cc99cf4f9.jpg",
      title: "Craftsmanship",
      subtitle: "Every thread tells a story"
    },
    {
      type: "image",
      src: "https://i.pinimg.com/1200x/a2/a5/2e/a2a52e3d157a4ff42bc97f7603b0c64d.jpg",
      title: "Timeless Elegance",
      subtitle: "Curating the finest since generations"
    }
  ];

  // Mission & Values
  const values = [
    { 
      icon: Award, 
      title: "Authenticity", 
      desc: "100% genuine handloom products sourced directly from artisans",
      color: "from-amber-500 to-orange-600"
    },
    { 
      icon: Heart, 
      title: "Craftsmanship", 
      desc: "Supporting over 500+ skilled weavers and their families",
      color: "from-rose-500 to-pink-600"
    },
    { 
      icon: Shield, 
      title: "Quality", 
      desc: "Rigorous quality checks ensuring premium standards",
      color: "from-blue-500 to-cyan-600"
    },
    { 
      icon: Globe, 
      title: "Sustainability", 
      desc: "Eco-friendly practices and ethical sourcing",
      color: "from-green-500 to-emerald-600"
    }
  ];

  // Team Members
  const team = [
    { name: "Lakshmi Narayana", role: "Founder & Master Weaver", image: "https://i.pinimg.com/736x/5b/1e/a9/5b1ea94e36f3c891a8b80bda5f0c0046.jpg", experience: "35+ years" },
    { name: "Meera Reddy", role: "Creative Director", image: "https://i.pinimg.com/1200x/c3/34/09/c334099bf91529cb90d9c1cb86790bd5.jpg", experience: "15+ years" },
    { name: "Arjun Sharma", role: "Head of Design", image: "https://i.pinimg.com/736x/88/e3/18/88e3189b3f48c5aa036f422382aac976.jpg", experience: "12+ years" },
    { name: "Priya Kapoor", role: "Customer Experience", image: "https://i.pinimg.com/736x/8e/1f/38/8e1f38a2c226f46854a9f6921eea450c.jpg", experience: "10+ years" }
  ];

  // Testimonials
  const testimonials = [
    { 
      text: "The quality of their Kanchipuram sarees is unmatched. I've been a loyal customer for over a decade!", 
      name: "Anjali Sharma", 
      location: "Mumbai",
      rating: 5,
      image: "https://i.pinimg.com/736x/8e/1f/38/8e1f38a2c226f46854a9f6921eea450c.jpg"
    },
    { 
      text: "LLM Showroom has the finest collection of handloom fabrics. Their customer service is exceptional!", 
      name: "Priya Menon", 
      location: "Chennai",
      rating: 5,
      image: "https://i.pinimg.com/736x/8e/1f/38/8e1f38a2c226f46854a9f6921eea450c.jpg"
    },
    { 
      text: "I found my dream wedding saree here. The customization options made it truly special.", 
      name: "Kavita Reddy", 
      location: "Bangalore",
      rating: 5,
      image: "https://i.pinimg.com/736x/8e/1f/38/8e1f38a2c226f46854a9f6921eea450c.jpg"
    }
  ];

  // Milestones
  const milestones = [
    { year: "1985", title: "Founded", desc: "Started as a small weaving unit in Nellore" },
    { year: "1995", title: "First Showroom", desc: "Opened our flagship store on Kapu Street" },
    { year: "2005", title: "Artisan Network", desc: "Partnered with 100+ rural weavers" },
    { year: "2015", title: "Digital Presence", desc: "Launched LLM Showroom online" },
    { year: "2025", title: "Global Reach", desc: "Shipping to 20+ countries worldwide" }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Animate stats on scroll
  useEffect(() => {
    const animateStats = () => {
      const targets = { customers: 50000, products: 10000, years: 40, cities: 25 };
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          customers: Math.round(targets.customers * progress),
          products: Math.round(targets.products * progress),
          years: Math.round(targets.years * progress),
          cities: Math.round(targets.cities * progress)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setStats(targets);
        }
      }, interval);
      
      return () => clearInterval(timer);
    };
    
    animateStats();
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-stone-50 via-white to-stone-50 min-h-screen">
      
      {/* ======================================================= */}
      {/* 🌟 PREMIUM HERO CAROUSEL */}
      {/* ======================================================= */}
     

      {/* ======================================================= */}
      {/* STATS COUNTER */}
      {/* ======================================================= */}
     

      {/* ======================================================= */}
      {/* OUR STORY */}
      {/* ======================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Our Story</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-stone-800 leading-tight">
              A Legacy of <br />
              <span className="text-primary italic">Timeless Elegance</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
            <p className="font-body text-stone-600 leading-relaxed text-lg">
              Nestled in the heart of Andhra Pradesh, by the line of Kapu Street in Nellore,{' '}
              <strong className="text-stone-800">LLM Showroom</strong> stands as a beacon of 
              rich Indian textiles and handcrafted perfection.
            </p>
            <p className="font-body text-stone-600 leading-relaxed">
              For over four decades, we have curated the finest silks, handloom cottons, and bridal sarees, 
              ensuring that every drape tells a story of cultural richness. We believe a saree is not just 
              a garment; it is an heirloom passed down through generations.
            </p>
            <p className="font-body text-stone-600 leading-relaxed">
              Our commitment to quality and authenticity has made us a trusted name among discerning 
              customers who appreciate the finer things in life. Each piece in our collection is 
              handpicked, ensuring unique designs that you won't find anywhere else.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-stone-200 overflow-hidden">
                    <img src={`https://i.pinimg.com/736x/${i === 1 ? '25/09/4e/25094edff0359cada153734742efc860' : i === 2 ? '8e/05/35/8e0535a0e8e424c5d1be77fea1235fda' : i === 3 ? '33/e2/04/33e20454ff3d260337ac462bba1958b3' : '5d/0c/3e/5d0c3eecd96738b38dc3a31d01b04eab'}.jpg`} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-stone-500">Trusted by 50,000+ customers</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-amber-500/10 rounded-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://i.pinimg.com/1200x/d0/3c/66/d03c66620cf836227a25475f34b86ffb.jpg" alt="Weaving" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                  </div>
                  <div className="h-32 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://i.pinimg.com/1200x/38/59/35/385935f69920a909cc7f9a2cc99cf4f9.jpg" alt="Fabric" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-32 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://i.pinimg.com/1200x/a2/a5/2e/a2a52e3d157a4ff42bc97f7603b0c64d.jpg" alt="Looms" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                  </div>
                  <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://i.pinimg.com/736x/4f/0c/79/4f0c799c67e8be10b14ad150b54f53b4.jpg" alt="Silk" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* MILESTONES TIMELINE */}
      {/* ======================================================= */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">Our Journey</span>
            <h3 className="font-heading text-3xl md:text-4xl text-stone-800 mt-2">Milestones of Excellence</h3>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 flex justify-end px-8">
                    <div className={`${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <span className="text-4xl font-heading font-bold text-primary">{milestone.year}</span>
                      <h4 className="text-xl font-bold text-stone-800 mt-1">{milestone.title}</h4>
                      <p className="text-stone-600 text-sm mt-1">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* OUR VALUES */}
      {/* ======================================================= */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">What We Stand For</span>
          <h3 className="font-heading text-3xl md:text-4xl text-stone-800 mt-2">Our Core Values</h3>
          <p className="text-stone-500 max-w-2xl mx-auto mt-3">
            The principles that guide everything we do at LLM Showroom
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div key={idx} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-heading text-lg font-bold text-stone-800 mb-2">{value.title}</h4>
              <p className="text-sm text-stone-500">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================= */}
      {/* MEET THE TEAM */}
      {/* ======================================================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">The People Behind</span>
            <h3 className="font-heading text-3xl md:text-4xl text-stone-800 mt-2">Meet Our Family</h3>
            <p className="text-stone-500 max-w-2xl mx-auto mt-3">
              Passionate individuals dedicated to bringing you the finest ethnic wear
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-5 text-center">
                  <h4 className="font-heading text-lg font-bold text-stone-800">{member.name}</h4>
                  <p className="text-primary text-sm font-medium">{member.role}</p>
                  <p className="text-xs text-stone-500 mt-1">{member.experience} experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* TESTIMONIALS */}
      {/* ======================================================= */}
      <section className="bg-gradient-to-r from-primary/5 via-amber-500/5 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">Customer Love</span>
            <h3 className="font-heading text-3xl md:text-4xl text-stone-800 mt-2">What Our Customers Say</h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative min-h-[250px]">
              {testimonials.map((testimonial, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-all duration-700 ${
                    activeTestimonial === idx 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-10 pointer-events-none'
                  }`}
                >
                  <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
                    <Quote className="w-12 h-12 text-primary/20 mb-4" />
                    <p className="text-lg md:text-xl text-stone-700 italic mb-6">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                      />
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                        <h4 className="font-heading font-bold text-stone-800">{testimonial.name}</h4>
                        <p className="text-sm text-stone-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Testimonial Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeTestimonial === idx ? 'w-8 bg-primary' : 'bg-stone-300 hover:bg-stone-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* VISIT US CTA */}
      {/* ======================================================= */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{ 
              backgroundImage: 'radial-gradient(circle at 20% 30%, #fff 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="font-heading text-3xl md:text-4xl text-white mb-4">Visit Our Flagship Store</h3>
            <p className="text-cream/80 max-w-2xl mx-auto mb-8">
              Experience the beauty of handcrafted textiles in person at our Nellore showroom
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-3 text-cream">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Kapu Street, Nellore, Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-3 text-cream">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-cream">
                <Clock className="w-5 h-5 text-primary" />
                <span>Mon - Sat: 10:00 AM - 8:00 PM</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link 
                to="/contact"
                className="bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-primary/90 transition flex items-center gap-2"
              >
                Get Directions <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/shop"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/20 transition flex items-center gap-2"
              >
                Shop Online <ShoppingBag className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mt-8 pt-8 border-t border-white/20">
              <a href="#" className="p-2 bg-white/10 rounded-full text-white hover:bg-primary transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full text-white hover:bg-primary transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full text-white hover:bg-primary transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;