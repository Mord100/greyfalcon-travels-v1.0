import { 
  HiGlobeAlt, 
  HiHome, 
  HiCamera,
  HiCreditCard,
  HiShieldCheck,
  HiChatAlt2,
  HiArrowRight
} from 'react-icons/hi';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: HiGlobeAlt,
      title: "Leisure Travel",
      description: "Unwind and explore the world at your own pace with our carefully curated leisure travel experiences.",
      features: ["Flexible itineraries", "Family-friendly options", "Romantic getaways"],
      color: "#22aed8",
      size: "hero",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 2,
      icon: HiCreditCard,
      title: "Corporate Travel",
      description: "Streamlined business travel solutions designed to maximize productivity and minimize stress.",
      features: ["Business class options", "Meeting coordination", "Expense management"],
      color: "#40c4ec",
      size: "tall",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=600&fit=crop&crop=center"
    },
    {
      id: 3,
      icon: HiShieldCheck,
      title: "Premium Packages",
      description: "Enhanced travel experiences with premium accommodations, priority services, and exclusive perks.",
      features: ["4-5 star hotels", "Priority booking", "Concierge service"],
      color: "#383E72",
      size: "square",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=400&fit=crop&crop=center"
    },
    {
      id: 4,
      icon: HiHome,
      title: "Deluxe Packages",
      description: "The ultimate in luxury travel with world-class accommodations and personalized service throughout.",
      features: ["Luxury resorts", "Private transfers", "Personal travel advisor"],
      color: "#22aed8",
      size: "square",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=400&fit=crop&crop=center"
    },
    {
      id: 5,
      icon: HiCamera,
      title: "Holiday Packages",
      description: "Special seasonal getaways and celebration trips designed to make your holidays unforgettable.",
      features: ["Seasonal destinations", "Festival experiences", "Group discounts"],
      color: "#40c4ec",
      size: "wide",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=300&fit=crop&crop=center"
    },
    {
      id: 6,
      icon: HiChatAlt2,
      title: "Custom Solutions",
      description: "Tailored travel experiences designed specifically for your unique needs and preferences.",
      features: ["Bespoke planning", "Special requirements", "24/7 support"],
      color: "#383E72",
      size: "contact"
    }
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case 'hero':
        return 'col-span-1 sm:col-span-2 lg:col-span-2 row-span-2';
      case 'tall':
        return 'col-span-1 row-span-1 lg:row-span-2';
      case 'wide':
        return 'col-span-1 sm:col-span-2 row-span-1';
      case 'square':
        return 'col-span-1 row-span-1';
      case 'contact':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <section id='services' className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-800">
              TRAVEL <span className="font-normal text-blue-600">Services</span>
            </h1>
          </div>

        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] sm:auto-rows-[220px] lg:auto-rows-[240px] gap-4 sm:gap-6 mb-12 lg:mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            // Hero card (Leisure Travel)
            if (service.size === 'hero') {
              return (
                <div 
                  key={service.id}
                  className={`group bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden ${getSizeClasses(service.size)}`}
                >
                  {/* Background Image with strong overlay for text readability */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                  
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8 text-white">
                    <div 
                      className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl mb-4 bg-white/20 backdrop-blur-sm"
                    >
                      <IconComponent className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sm lg:text-base opacity-90 mb-4 lg:mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-4 lg:mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs lg:text-sm opacity-80">
                          <div 
                            className="w-2 h-2 rounded-full mr-3 flex-shrink-0 bg-white/60"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                  </div>
                </div>
              );
            }

            // Tall card (Corporate Travel)
            if (service.size === 'tall') {
              return (
                <div 
                  key={service.id}
                  className={`group bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden ${getSizeClasses(service.size)}`}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"/>
                  
                  <div className="h-full flex flex-col justify-end p-5 lg:p-6 text-white relative z-10">
                    <div 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 lg:mb-4 bg-white/20 backdrop-blur-sm"
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3">{service.title}</h3>
                    <p className="text-sm opacity-90 mb-3 lg:mb-4 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-1 lg:space-y-2 mb-3 lg:mb-4">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs opacity-80">
                          <div className="w-1.5 h-1.5 rounded-full mr-2 bg-white/60 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                
                  </div>
                </div>
              );
            }

            // Square cards (Premium & Deluxe)
            if (service.size === 'square') {
              return (
                <div 
                  key={service.id}
                  className={`group bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden ${getSizeClasses(service.size)}`}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"/>
                  
                  <div className="h-full flex flex-col justify-end p-5 lg:p-6 text-white relative z-10">
                    <div 
                      className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-xl mb-3 bg-white/20 backdrop-blur-sm"
                    >
                      <IconComponent className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg lg:text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-xs lg:text-sm opacity-90 mb-3 leading-relaxed line-clamp-2">{service.description}</p>
                    
                    
                  </div>
                </div>
              );
            }

            // Wide card (Holiday Packages)
            if (service.size === 'wide') {
              return (
                <div 
                  key={service.id}
                  className={`group bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden ${getSizeClasses(service.size)}`}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
                  
                  <div className="h-full flex items-center p-5 lg:p-6 relative z-10">
                    <div className="flex-1 text-white">
                      <div 
                        className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-white/20 backdrop-blur-sm"
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl lg:text-2xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm lg:text-base opacity-90 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-1 mb-4">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs lg:text-sm opacity-80">
                            <div className="w-2 h-2 rounded-full mr-3 bg-white/60 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                 
                    </div>
                  </div>
                </div>
              );
            }

            // Contact card (Custom Solutions)
            return (
              <div 
                key={service.id}
                className={`group rounded-2xl lg:rounded-3xl p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden ${getSizeClasses(service.size)}`}
                style={{ backgroundColor: service.color }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-12 h-12 lg:w-16 lg:h-16 border border-white/20 rounded-full" />
                  <div className="absolute bottom-6 left-4 w-8 h-8 lg:w-12 lg:h-12 border border-white/20 rounded-full" />
                </div>
                
                <div className="h-full flex flex-col justify-between relative z-10 text-white">
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-white/20">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg lg:text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-sm opacity-90 mb-4 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-1 mb-4">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs opacity-80">
                          <div className="w-1.5 h-1.5 rounded-full mr-2 bg-white/60 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}