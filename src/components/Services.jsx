import { 
  HiGlobeAlt, 
  HiHome, 
  HiCamera,
  HiCreditCard,
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
      image: "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?_gl=1*c2x53a*_ga*MTg5MDY2MjY3Ni4xNzUzNjEwNjEw*_ga_8JE65Q40S6*czE3NTM2MTA2MDkkbzEkZzEkdDE3NTM2MTE2NzUkajQ3JGwwJGgw"
    },
    {
      id: 2,
      icon: HiCreditCard,
      title: "Corporate Travel",
      description: "Streamlined business travel solutions designed to maximize productivity and minimize stress.",
      features: ["Business class options", "Meeting coordination", "Expense management"],
      color: "#40c4ec",
      size: "tall",
      image: "https://images.pexels.com/photos/19382111/pexels-photo-19382111.jpeg?_gl=1*pdp5d3*_ga*MTg5MDY2MjY3Ni4xNzUzNjEwNjEw*_ga_8JE65Q40S6*czE3NTM2MTA2MDkkbzEkZzEkdDE3NTM2MTE0OTkkajE0JGwwJGgw"
    },
    {
      id: 3,
      icon: HiCamera,
      title: "Holiday Packages",
      description: "Special seasonal getaways and celebration trips designed to make your holidays unforgettable.",
      features: ["Seasonal destinations", "Festival experiences", "Group discounts"],
      color: "#40c4ec",
      size: "wide",
      image: "https://images.pexels.com/photos/1879392/pexels-photo-1879392.jpeg?_gl=1*1066m73*_ga*MTg5MDY2MjY3Ni4xNzUzNjEwNjEw*_ga_8JE65Q40S6*czE3NTM2MTA2MDkkbzEkZzEkdDE3NTM2MTIwNTIkajIkbDAkaDA."
    },
    {
      id: 4,
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
        return 'col-span-1 row-span-1 sm:row-span-2';
      case 'wide':
        return 'col-span-1 sm:col-span-2 row-span-1';
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
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            OUR <span className="text-[#22aed8]">Services</span>
          </h2>
        </div>

        {/* Improved Bento Grid - Adjusted for 4 services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] sm:auto-rows-[220px] lg:auto-rows-[240px] gap-4 sm:gap-6 mb-12 lg:mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            
            // Hero card (Leisure Travel) - Resort hotel image
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/25" />
                  
                  <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6 lg:p-8 text-white">
                    <div 
                      className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm"
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base opacity-90 mb-3 sm:mb-4 lg:mb-6 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-1 sm:space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs sm:text-xs lg:text-sm opacity-80">
                          <div 
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 sm:mr-3 flex-shrink-0 bg-white/60"
                          />
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }

            // Tall card (Corporate Travel) - Canary Wharf London image
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"/>
                  
                  <div className="h-full flex flex-col justify-end p-4 sm:p-5 lg:p-6 text-white relative z-10">
                    <div 
                      className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-3 lg:mb-4 bg-white/20 backdrop-blur-sm"
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 lg:mb-3 leading-tight">{service.title}</h3>
                    <p className="text-xs sm:text-sm opacity-90 mb-3 lg:mb-4 leading-relaxed line-clamp-3">{service.description}</p>
                    
                    <ul className="space-y-1 lg:space-y-2">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs opacity-80">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full mr-2 bg-white/60 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }

            // Wide card (Holiday Packages) - Antalya resort hotel image
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
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/25" />
                  
                  <div className="h-full flex items-center p-4 sm:p-5 lg:p-6 relative z-10">
                    <div className="flex-1 text-white min-w-0">
                      <div 
                        className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm"
                      >
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm opacity-90 mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-1">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs opacity-80">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 sm:mr-3 bg-white/60 flex-shrink-0" />
                            <span className="truncate">{feature}</span>
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
                className={`group rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden ${getSizeClasses(service.size)}`}
                style={{ backgroundColor: service.color }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border border-white/20 rounded-full" />
                  <div className="absolute bottom-4 left-3 sm:bottom-6 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 border border-white/20 rounded-full" />
                </div>
                
                <div className="h-full flex flex-col justify-between relative z-10 text-white min-h-0">
                  <div className="flex-1 min-h-0">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl mb-3 sm:mb-4 bg-white/20">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 leading-tight">{service.title}</h3>
                    <p className="text-xs sm:text-sm opacity-90 mb-3 sm:mb-4 leading-relaxed line-clamp-3">{service.description}</p>
                    
                    <ul className="space-y-1">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs opacity-80">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full mr-2 bg-white/60 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
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