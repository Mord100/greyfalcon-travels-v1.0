import { 
  HiGlobeAlt, 
  HiUsers,
  HiHeart,
  HiShieldCheck,
  HiLightBulb,
  HiArrowRight,
  HiStar
} from 'react-icons/hi';

import { GiLaurelsTrophy } from "react-icons/gi";

export default function AboutUs() {
  const stats = [
    {
      id: 1,
      number: "Thousands", // Generalizing based on "thousands of adventurers worldwide" and "thousands of happy travelers" mentioned in the document's context
      label: "Happy Clients", // Changed from Travelers to Clients for broader scope
      icon: HiUsers,
      color: "#22aed8"
    },
    {
      id: 2,
      number: "9+", // Based on "Featured Destinations (9 locations)"
      label: "Featured Destinations", // Specific to what's listed in the document
      icon: HiGlobeAlt,
      color: "#40c4ec"
    },
    {
      id: 3,
      number: "4+", // Established in "Late 2020". As of mid-2025, this is 4+ years.
      label: "Years in Business", // More accurate to "Establishment"
      icon: GiLaurelsTrophy,
      color: "#383E72"
    },
    {
      id: 4,
      number: "Quality", // Replaced specific percentage as it's not in the document. Focus on "Quality service commitment"
      label: "Service Commitment", 
      icon: HiStar,
      color: "#22aed8"
    }
  ];

//   const values = [
//     {
//       id: 1,
//       icon: HiHeart,
//       title: "Passion for Travel",
//       description: "We believe travel transforms lives and creates unforgettable memories that last forever.",
//       color: "#22aed8",
//       image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop&crop=center" // Placeholder: Image of a smiling traveler interacting with a local person in a culturally rich setting.
//     },
//     {
//       id: 2,
//       icon: HiShieldCheck,
//       title: "Trust & Reliability",
//       description: "Your safety and satisfaction are our top priorities in every journey we plan. We are committed to quality service.",
//       color: "#383E72",
//       image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop&crop=center" // Placeholder: Image of a handshake between two people against the backdrop of travel-related items.
//     },
//     {
//       id: 3,
//       icon: HiLightBulb,
//       title: "Expertise & Service", // Changed from Innovation to better reflect document content
//       description: "Our multilingual and experienced team is dedicated to providing high-quality, personalized hotel accommodation services.", // Updated description
//       color: "#40c4ec",
//       image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop&crop=center" // Placeholder: Image of diverse individuals happily experiencing different aspects of travel.
//     }
//   ];

  return (
    <section id='about' className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
          
          {/* Story Content */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-3xl p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: '#383E72' }}>
                Our Story
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Established in late 2020, Grey Falcon Travels successfully navigated the COVID-19 pandemic and has since positioned itself as a specialized hotel booking agency, focusing on providing competitive hotel rates globally.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our commitment is to quality service, delivered by a multilingual and experienced team. We strive to be the go-to agency for hotel accommodation and plan to expand into a full-service travel agency, including air fares, tours, excursions, visas, insurance, and vacation packages in the future.
              </p>
              
              <button 
                className="group flex items-center text-sm lg:text-base font-medium transition-all duration-200 hover:gap-2"
                style={{ color: '#22aed8' }}
              >
                Learn More About Us
                <HiArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Mission Statement (adapted from future plans and positioning) */}
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 lg:py-18.5 rounded-3xl p-6 lg:p-8 border border-gray-100">
              <h3 className="text-xl lg:text-2xl font-bold mb-3" style={{ color: '#383E72' }}>
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                "To be the go-to agency for hotel accommodation worldwide, providing quality service and competitive rates, with plans to expand into a comprehensive travel service."
              </p>
            </div>
          </div>

          {/* Image & Stats */}
          <div className="space-y-6">
            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1517999349371-c43520457b23?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder: A wide, panoramic shot of a diverse and friendly team of travel professionals working collaboratively in a modern office space.
                alt="Our dedicated team"
                className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm opacity-90">Our dedicated team</p>
                <h4 className="text-xl font-bold">Making dreams come true</h4>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => { 
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={stat.id}
                    className="bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                  >
                    <div 
                      className="inline-flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${stat.color}15` }}
                    >
                      <IconComponent 
                        className="w-5 h-5 lg:w-6 lg:h-6"
                        style={{ color: stat.color }}
                      />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: '#383E72' }}>
                      {stat.number}
                    </div>
                    <div className="text-sm lg:text-base text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Values Section */}
        {/* <div className="mb-16 lg:mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: '#383E72' }}>
              What Drives Us
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values shape every interaction and guide us in creating meaningful travel experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => { 
              const IconComponent = value.icon;
              return (
                <div 
                  key={value.id}
                  className="group bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div 
                      className="absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm"
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3" style={{ color: '#383E72' }}>
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: '#22aed8', transform: 'translate(-50%, -50%)' }} />
            <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: '#383E72', transform: 'translate(50%, 50%)' }} />
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#383E72' }}>
                Ready to Plan Your Hotel Stay?
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of happy clients who have trusted us to find their perfect hotel accommodation worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-8 py-4 rounded-2xl text-white font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#22aed8' }}
                >
                  Find Your Hotel
                </button>
                <button 
                  className="px-8 py-4 rounded-2xl font-semibold text-lg border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white"
                  style={{ 
                    color: '#383E72', 
                    borderColor: '#383E72'
                  }}
                >
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}