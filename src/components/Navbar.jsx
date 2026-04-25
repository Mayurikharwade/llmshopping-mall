import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, Heart, ShoppingCart, Menu, X, Phone, Mail, ChevronDown, Trash2, Check, Truck, MapPin, Package, Shield } from "lucide-react"; 
import { useShop } from "../ShopContext.jsx"; 

const navLinks =[
  { 
    label: "Sarees", 
    path: "/sarees", 
    hasDropdown: true,
    dropdownContent: {
      columns:[
        {
          title: "Shop by Fabric",
          links:[
            { name: "Silk Sarees", path: "/sarees/silk", badge: "Premium" },
            { name: "Cotton Sarees", path: "/sarees/cotton" },
            { name: "Organza Sarees", path: "/sarees/organza", badge: "Trending" },
            { name: "Georgette Sarees", path: "/sarees/georgette" },
            { name: "Chiffon Sarees", path: "/sarees/chiffon" },
            { name: "Tissue Sarees", path: "/sarees/tissue", badge: "New" },
          ]
        },
        {
          title: "Shop by Occasion",
          links:[
            { name: "Bridal Collection", path: "/sarees/bridal", badge: "🔥 Hot" },
            { name: "Party Wear", path: "/sarees/party" },
            { name: "Festival Special", path: "/sarees/festival" },
            { name: "Casual Wear", path: "/sarees/casual" },
            { name: "Office Wear", path: "/sarees/office" },
            { name: "Reception", path: "/sarees/reception" },
          ]
        },
        {
          title: "Featured",
          links:[
            { name: "New Arrivals", path: "/sarees/new", badge: "✨ New" },
            { name: "Bestsellers", path: "/sarees/bestsellers", badge: "🏆 Best" },
            { name: "Trending Now", path: "/sarees/trending", badge: "📈 Trending" },
            { name: "Limited Edition", path: "/sarees/limited", badge: "⏰ Limited" },
            { name: "Under ₹999", path: "/sarees/under-999", badge: "💰 Deal" },
          ]
        }
      ],
      featuredImage: {
        url: "https://in.kalkifashion.com/cdn/shop/files/embroidered-saree-menu.jpg?v=5239106531695380492",
        title: "Premium Silk Collection",
        subtitle: "Starting at ₹4,999",
        link: "/sarees/silk"
      }
    }
  },
  { 
    label: "Products", 
    path: "/shop", 
    hasDropdown: true,
    dropdownContent: {
      columns:[
        {
          title: "Women's Wear",
          links:[
            { name: "Sarees", path: "/sarees" },
            { name: "Kurtas", path: "/kurtas", badge: "Bestseller" },
            { name: "Dupattas", path: "/dupattas" },
            { name: "Lehengas", path: "/lehengas", badge: "Premium" },
            { name: "Salwar Suits", path: "/salwar-suits" },
            { name: "Gowns", path: "/gowns" },
          ]
        },
        {
          title: "Men's Wear",
          links:[
            { name: "Kurtas", path: "/men/kurtas" },
            { name: "Sherwanis", path: "/men/sherwanis", badge: "Wedding" },
            { name: "Ethnic Sets", path: "/men/ethnic-sets" },
            { name: "Jodhpuri", path: "/men/jodhpuri" },
          ]
        },
        {
          title: "Accessories",
          links:[
            { name: "Jewelry", path: "/jewelry" },
            { name: "Bags", path: "/bags" },
            { name: "Footwear", path: "/footwear" },
            { name: "Stoles", path: "/stoles" },
          ]
        }
      ],
      featuredImage: {
        url: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&h=400&fit=crop",
        title: "New Collection 2026",
        subtitle: "Shop Now",
        link: "/new-arrivals"
      }
    }
  },
  { 
    label: "Categories", 
    path: "/categories", 
    hasDropdown: true,
    dropdownContent: {
      columns:[
        {
          title: "Ethnic Wear",
          links:[
            { name: "Sarees", path: "/sarees" },
            { name: "Kurtas & Kurtis", path: "/kurtas" },
            { name: "Lehengas", path: "/lehengas" },
            { name: "Salwar Kameez", path: "/salwar-kameez" },
            { name: "Anarkali", path: "/anarkali" },
          ]
        },
        {
          title: "Fabrics",
          links:[
            { name: "Silk Fabric", path: "/fabrics/silk", badge: "Premium" },
            { name: "Cotton Fabric", path: "/fabrics/cotton" },
            { name: "Chiffon", path: "/fabrics/chiffon" },
            { name: "Georgette", path: "/fabrics/georgette" },
            { name: "Organza", path: "/fabrics/organza" },
          ]
        },
        {
          title: "Occasion",
          links:[
            { name: "Wedding", path: "/occasion/wedding" },
            { name: "Festival", path: "/occasion/festival" },
            { name: "Party", path: "/occasion/party" },
            { name: "Casual", path: "/occasion/casual" },
          ]
        }
      ],
      featuredImage: {
        url: "https://in.kalkifashion.com/cdn/shop/files/250x350-desk-indo-fusion-styles-18-02-26_80a71954-4c84-4afa-bf4d-c8cefa4582bf.jpg?v=1772871706&width=235",
        title: "Festive Collection",
        subtitle: "Up to 40% OFF",
        link: "/festive-collection"
      }
    }
  },
  { 
    label: "Featured", 
    path: "/featured", 
    hasDropdown: true,
    dropdownContent: {
      columns:[
        {
          title: "Curated Collections",
          links:[
            { name: "Editor's Pick", path: "/featured/editors-pick", badge: "⭐ Top" },
            { name: "Bestsellers", path: "/featured/bestsellers" },
            { name: "Trending Now", path: "/featured/trending", badge: "🔥 Hot" },
            { name: "New Arrivals", path: "/featured/new", badge: "✨ New" },
            { name: "Coming Soon", path: "/featured/coming-soon" },
          ]
        },
        {
          title: "Designer Collections",
          links:[
            { name: "Premium Silk", path: "/collections/premium-silk" },
            { name: "Bridal Edit", path: "/collections/bridal", badge: "👰 Bridal" },
            { name: "Festive Special", path: "/collections/festive" },
            { name: "Summer Collection", path: "/collections/summer" },
          ]
        },
        {
          title: "Offers",
          links:[
            { name: "Clearance Sale", path: "/sale/clearance", badge: "🔥 50% OFF" },
            { name: "Buy 1 Get 1", path: "/offers/bogo", badge: "🎁 BOGO" },
            { name: "Combo Offers", path: "/offers/combo" },
            { name: "First Order 30% OFF", path: "/offers/first-order", badge: "🆕 New User" },
          ]
        }
      ],
      featuredImage: {
        url: "https://in.kalkifashion.com/cdn/shop/files/250x350-desk-exclusive-collections-23-03-26.jpg?v=1774257770&width=235",
        title: "Limited Time Offer",
        subtitle: "Flat 30% OFF",
        link: "/offers"
      }
    }
  },
  { 
    label: "Reviews", 
    path: "/reviews", 
    hasDropdown: true,
    dropdownContent: {
      columns:[
        {
          title: "Customer Stories",
          links:[
            { name: "Photo Reviews", path: "/reviews/photos" },
            { name: "Video Testimonials", path: "/reviews/videos" },
            { name: "Top Rated", path: "/reviews/top-rated", badge: "⭐ 4.8+" },
            { name: "Recent Reviews", path: "/reviews/recent" },
          ]
        },
        {
          title: "Shop by Rating",
          links:[
            { name: "5 Star Products", path: "/reviews/5-star" },
            { name: "4 Star & Above", path: "/reviews/4-star" },
            { name: "Most Reviewed", path: "/reviews/most-reviewed" },
          ]
        },
        {
          title: "Community",
          links:[
            { name: "Style Stories", path: "/community/stories" },
            { name: "Lookbook", path: "/community/lookbook" },
            { name: "Share Your Style", path: "/community/share", badge: "📸 Share" },
          ]
        }
      ],
      featuredImage: {
        url: "https://in.kalkifashion.com/cdn/shop/files/250x350-desk-salwar-kameez-18-02-26.jpg?v=1771497859&width=235",
        title: "Customer Favorites",
        subtitle: "See what's trending",
        link: "/reviews/favorites"
      }
    }
  },
  { 
    label: "Gallery", 
    path: "/gallery", 
    hasDropdown: true,
    dropdownContent: {
      columns:[
        {
          title: "Collections",
          links:[
            { name: "Bridal Gallery", path: "/gallery/bridal" },
            { name: "Festive Looks", path: "/gallery/festive" },
            { name: "Casual Styles", path: "/gallery/casual" },
            { name: "Celebrity Looks", path: "/gallery/celebrity", badge: "🌟 Trending" },
          ]
        },
        {
          title: "Behind the Scenes",
          links:[
            { name: "Craftsmanship", path: "/gallery/craft" },
            { name: "Fabric Making", path: "/gallery/fabric" },
            { name: "Design Process", path: "/gallery/design" },
          ]
        },
        {
          title: "Social",
          links:[
            { name: "Instagram Feed", path: "/gallery/instagram" },
            { name: "Customer Looks", path: "/gallery/customers", badge: "#LLMStyle" },
            { name: "Video Gallery", path: "/gallery/videos" },
          ]
        }
      ],
      featuredImage: {
        url: "https://in.kalkifashion.com/cdn/shop/files/bridal-saree-menu.jpg?v=3865592706081764068",
        title: "Visual Stories",
        subtitle: "Explore our gallery",
        link: "/gallery/stories"
      }
    }
  },
];

const Navbar = () => {
  const[mobileOpen, setMobileOpen] = useState(false);
  const[searchOpen, setSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const[scrolled, setScrolled] = useState(false);
  const[activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  const { cart, wishlist, removeFromCart, updateQuantity } = useShop(); 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    const openCartDrawer = () => setIsCartOpen(true);
    window.addEventListener("open-cart", openCartDrawer);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-cart", openCartDrawer);
    };
  },[]);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);
  const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  const freeShippingThreshold = 999;
  const amountToFreeShipping = freeShippingThreshold - subtotal;
  const shippingProgress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  const trendingSearches =["Kanjeevaram Silk", "Banarasi Saree", "Designer Kurtas", "Bridal Lehenga", "Organza Saree"];

  return (
    <>
      <header className={`w-full z-40 transition-all duration-300 ${scrolled ? "fixed top-0 shadow-xl" : "relative"}`}>
        
        {!scrolled && (
          <div className="bg-[#f97316] text-white">
            <div className="container flex justify-between items-center py-2 px-4">
              <div className="flex items-center gap-6">
                <a href="mailto:hello@llmshop.com" className="flex items-center gap-1.5 text-xs hover:text-orange-100 transition-colors">
                  <Mail className="w-3 h-3" /> hello@llmshop.com
                </a>
                <a href="tel:+919885222227" className="hidden sm:flex items-center gap-1.5 text-xs hover:text-orange-100 transition-colors">
                  <Phone className="w-3 h-3" /> +91 98852 22227
                </a>
              </div>
              <div className="hidden md:flex items-center gap-6 text-xs">
                <Link to="/track-order" className="flex items-center gap-1.5 hover:text-orange-100 transition-colors">
                  <Package className="w-3 h-3" /> Track Order
                </Link>
                <Link to="/store-locator" className="flex items-center gap-1.5 hover:text-orange-100 transition-colors">
                  <MapPin className="w-3 h-3" /> Store Locator
                </Link>
                <Link to="/help" className="hover:text-orange-100 transition-colors font-medium">Help Center</Link>
              </div>
            </div>
          </div>
        )}

        {scrolled && amountToFreeShipping > 0 && (
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-b border-orange-200">
            <div className="container py-1.5 px-4">
              <p className="text-xs text-orange-700 flex items-center justify-center gap-2 font-medium">
                <Truck className="w-3.5 h-3.5" />
                Add ₹{amountToFreeShipping.toLocaleString("en-IN")} more for FREE shipping!
                <span className="w-24 h-1.5 bg-orange-200 rounded-full ml-2 overflow-hidden">
                  <span className="block h-full bg-[#f97316] rounded-full" style={{ width: `${shippingProgress}%` }} />
                </span>
              </p>
            </div>
          </div>
        )}

        <nav className="bg-white shadow-sm relative z-50">
          <div className="container flex items-center justify-between h-20">
            
            {/* LOGO - Desktop */}
            <Link to="/" className="flex items-center">
             <img src="/logo.png" alt="LLM Shop" className="h-14 object-contain" />
            </Link>

            <ul className="hidden lg:flex items-center h-full">
              {navLinks.map((link) => (
                <li 
                  key={link.label} 
                  className="h-full flex items-center" 
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-1 px-4 text-sm font-semibold text-gray-600 hover:text-[#f97316] transition-colors duration-200 uppercase tracking-wide"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180 text-[#f97316]' : ''}`} />
                    )}
                  </Link>

                  {link.hasDropdown && activeDropdown === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-5xl bg-white shadow-2xl border border-gray-100 rounded-b-xl overflow-hidden z-50 mt-0 origin-top animate-in fade-in zoom-in-95 duration-200">
                      <div className="p-6">
                        <div className="flex gap-6">
                          
                          <div className="flex-1 grid grid-cols-3 gap-6">
                            {link.dropdownContent?.columns.map((column, idx) => (
                              <div key={idx}>
                                <h4 className="text-xs font-bold text-[#f97316] uppercase tracking-wider mb-3 pb-2 border-b border-gray-100">
                                  {column.title}
                                </h4>
                                <ul className="space-y-2">
                                  {column.links.map((item) => (
                                    <li key={item.name}>
                                      <Link 
                                        to={item.path} 
                                        className="text-sm text-gray-600 hover:text-[#f97316] hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        {item.name}
                                        {item.badge && (
                                          <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${
                                            item.badge.includes('New') || item.badge.includes('✨') ? 'bg-green-100 text-green-700' :
                                            item.badge.includes('Hot') || item.badge.includes('🔥') ? 'bg-red-100 text-red-700' :
                                            item.badge.includes('Trending') || item.badge.includes('📈') ? 'bg-blue-100 text-blue-700' :
                                            item.badge.includes('Premium') || item.badge.includes('⭐') ? 'bg-purple-100 text-purple-700' :
                                            item.badge.includes('OFF') || item.badge.includes('💰') ? 'bg-orange-100 text-orange-700' :
                                            'bg-gray-100 text-gray-700'
                                          }`}>
                                            {item.badge}
                                          </span>
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          
                          {link.dropdownContent?.featuredImage && (
                            <div className="w-56 flex-shrink-0">
                              <Link 
                                to={link.dropdownContent.featuredImage.link} 
                                className="block group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="relative rounded-lg overflow-hidden">
                                  <img 
                                    src={link.dropdownContent.featuredImage.url} 
                                    alt={link.dropdownContent.featuredImage.title}
                                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                                    <p className="text-white/80 text-xs mb-1">{link.dropdownContent.featuredImage.subtitle}</p>
                                    <p className="text-white font-bold text-base">
                                      {link.dropdownContent.featuredImage.title}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          )}

                        </div>
                      </div>
                      
                      <div className="bg-gray-50 px-6 py-2.5 border-t border-gray-100 flex items-center justify-between">
                        <Link 
                          to={link.path} 
                          className="text-xs font-semibold text-[#f97316] hover:text-orange-600 transition-colors flex items-center gap-1"
                          onClick={() => setActiveDropdown(null)}
                        >
                          View All {link.label} →
                        </Link>
                        <span className="text-[10px] text-gray-400 flex items-center gap-1">
                          <Shield className="w-3 h-3" /> Premium Quality Assured
                        </span>
                      </div>

                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => setSearchOpen(!searchOpen)} 
                className="p-2 text-gray-600 hover:text-[#f97316] hover:bg-orange-50 rounded-full transition-all duration-200"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <Link to="/account" className="hidden sm:block p-2 text-gray-600 hover:text-[#f97316] hover:bg-orange-50 rounded-full transition-all duration-200">
                <User className="w-5 h-5" />
              </Link>
              
              <Link to="/wishlist" className="hidden sm:block p-2 text-gray-600 hover:text-[#f97316] hover:bg-orange-50 rounded-full transition-all duration-200 relative">
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#f97316] text-white text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold shadow-md">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              
              <button 
                onClick={() => setIsCartOpen(true)} 
                className="p-2 text-gray-600 hover:text-[#f97316] hover:bg-orange-50 rounded-full transition-all duration-200 relative"
              >
                <ShoppingCart className="w-5 h-5" /> 
                {cart.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#f97316] text-white text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold shadow-md">
                    {totalItems}
                  </span>
                )}
              </button>
              
              <button className="lg:hidden p-2 text-gray-600" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Enhanced Search Overlay - NO BLUR */}
      {searchOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[80]" onClick={() => setSearchOpen(false)} />
          <div className="fixed top-0 left-0 right-0 bg-white z-[90] shadow-2xl">
            <div className="container py-6">
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for sarees, kurtas, fabrics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-12 py-4 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent shadow-sm"
                    autoFocus
                  />
                  <button 
                    onClick={() => setSearchOpen(false)} 
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
                
                <div className="mt-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Trending Searches</p>
                  <div className="flex flex-wrap gap-2">
                    {trendingSearches.map((term) => (
                      <button 
                        key={term} 
                        className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-sm rounded-full transition-colors"
                        onClick={() => {
                          setSearchTerm(term);
                          setSearchOpen(false);
                          navigate(`/search?q=${encodeURIComponent(term)}`);
                        }}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Cart Drawer Overlay - NO BLUR */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[60] transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-[70] transform transition-transform duration-500 ease-in-out flex flex-col ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-white">
          <h2 className="font-heading text-2xl font-bold flex items-center gap-2 text-gray-900">
            Shopping Bag <span className="text-[#f97316]">({cart.length})</span>
          </h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {cart.length > 0 && amountToFreeShipping > 0 && (
          <div className="px-5 py-3 bg-gradient-to-r from-orange-50 to-yellow-50 border-b">
            <p className="text-xs text-gray-700 mb-2 font-medium">
              🚚 You're ₹{amountToFreeShipping.toLocaleString("en-IN")} away from FREE shipping!
            </p>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#f97316] to-orange-500 transition-all duration-500"
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 gap-4">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <ShoppingCart className="w-10 h-10 text-gray-400" />
              </div>
              <p className="font-medium text-gray-700">Your shopping bag is empty.</p>
              <button onClick={() => setIsCartOpen(false)} className="mt-2 px-8 py-3 bg-[#f97316] text-white font-medium rounded-sm shadow-md hover:bg-orange-600 transition-colors">Start Shopping</button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 bg-white p-4 rounded-md shadow-sm border border-gray-100">
                  <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-sm border border-gray-200" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-gray-900 line-clamp-2">{item.name}</h4>
                      <p className="text-[#f97316] font-bold text-sm mt-1">₹{(item.price || 0).toLocaleString("en-IN")}</p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-gray-300 rounded-sm bg-white">
                        <button onClick={() => updateQuantity && updateQuantity(item.id, (item.qty || 1) - 1)} className="px-3 py-1 hover:bg-gray-100 text-gray-600 transition-colors">-</button>
                        <span className="px-3 py-1 text-xs font-bold text-gray-800 border-x border-gray-300">{item.qty || 1}</span>
                        <button onClick={() => updateQuantity && updateQuantity(item.id, (item.qty || 1) + 1)} className="px-3 py-1 hover:bg-gray-100 text-gray-600 transition-colors">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-200 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between mb-2 font-heading text-xl">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-bold text-gray-900">₹{subtotal.toLocaleString("en-IN")}</span>
            </div>
            {amountToFreeShipping <= 0 ? (
              <p className="text-xs text-green-600 font-medium mb-6 flex items-center gap-1">
                <Check className="w-3 h-3" /> You've unlocked FREE shipping!
              </p>
            ) : (
              <p className="text-xs text-gray-500 mb-6">
                Shipping calculated at checkout
              </p>
            )}
            <div className="flex gap-3">
              <button 
                onClick={() => { setIsCartOpen(false); navigate("/cart"); }}
                className="w-1/2 py-3.5 border-2 border-[#f97316] text-[#f97316] font-bold hover:bg-orange-50 transition-colors rounded-sm"
              >
                View Cart
              </button>
              <button 
                onClick={() => { setIsCartOpen(false); navigate("/checkout"); }}
                className="w-1/2 py-3.5 bg-[#f97316] text-white font-bold hover:bg-orange-600 transition-colors rounded-sm shadow-md"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[40] lg:hidden" onClick={() => setMobileOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white z-[50] lg:hidden overflow-y-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <Link to="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
                <img src="/logo.png" alt="LLM Shop" className="h-8 object-contain" />
              </Link>
              <button onClick={() => setMobileOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            <div className="p-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.label}
                  to={link.path} 
                  className="block py-3 text-gray-700 font-medium border-b border-gray-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 pt-4 border-t">
                <Link to="/account" className="flex items-center gap-3 py-2 text-gray-600">
                  <User className="w-4 h-4" /> My Account
                </Link>
                <Link to="/wishlist" className="flex items-center gap-3 py-2 text-gray-600">
                  <Heart className="w-4 h-4" /> Wishlist ({wishlist.length})
                </Link>
                <Link to="/track-order" className="flex items-center gap-3 py-2 text-gray-600">
                  <Package className="w-4 h-4" /> Track Order
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;