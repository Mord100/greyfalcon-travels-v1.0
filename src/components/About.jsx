import { 
  HiGlobeAlt, 
  HiUsers,
  HiHeart,
  HiShieldCheck,
  HiLightBulb,
  HiArrowRight,
  HiStar
} from 'react-icons/hi';
import { FaWhatsapp } from "react-icons/fa";
import { GiLaurelsTrophy } from "react-icons/gi";

export default function AboutUs() {
  const whatsappNumber = "447739406932";

  const handleLearnMoreClick = () => {
    const message = `Hello Grey Falcon Travels!

I'd like to learn more about your company and services.

Could you please provide me with:
- More details about your hotel accommodation services
- Information about your competitive rates
- How your multilingual team can assist me
- Your future travel agency services

Looking forward to connecting with your team!`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFindHotelClick = () => {
    const message = `Hello Grey Falcon Travels!

I'm looking for hotel accommodation and would like to get competitive rates.

Please help me with:
- Available hotels for my destination
- Your best rates and deals
- Assistance from your multilingual team
- Any special packages or offers

Thank you for your service!`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactTeamClick = () => {
    const message = `Hello Grey Falcon Travels!

I'd like to speak with your experienced team about hotel accommodation services.

I'm interested in:
- Getting personalized assistance for my travel needs
- Learning about your worldwide hotel partnerships
- Discussing my specific requirements
- Understanding your quality service approach

Looking forward to hearing from your multilingual staff!`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const stats = [
    {
      id: 1,
      number: "Thousands",
      label: "Happy Clients",
      icon: HiUsers,
      color: "#22aed8"
    },
    {
      id: 2,
      number: "9+",
      label: "Featured Destinations",
      icon: HiGlobeAlt,
      color: "#40c4ec"
    },
    {
      id: 3,
      number: "4+",
      label: "Years in Business",
      icon: GiLaurelsTrophy,
      color: "#383E72"
    },
    {
      id: 4,
      number: "Quality",
      label: "Service Commitment", 
      icon: HiStar,
      color: "#22aed8"
    }
  ];

  return (
    <section id='about' className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
          
          {/* Story Content */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-3xl p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: '#383E72' }}>
                About Company
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Grey Falcon Travels was established in the latter part of 2020 primarily specializing in providing clients with competitive rates for hotel accommodation worldwide. Having rode the covid wave, where inbound as well as outbound travel was nonexistent, we have now positioned ourselves in the market as the go to agency for hotel accommodation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a travel agent that focuses only on providing hotel rooms, we have excelled in this sector of travel and ensured quality service. Our multilingual and experienced staff remain at your disposal for any queries in regards to any hotel / resort around the globe.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our future plans include becoming a fully fledged travel agency for air fares, hotels, tours and excursions, visas, insurance and cheap vacations all year round.
              </p>
              
              <button 
                onClick={handleLearnMoreClick}
                className="group flex items-center text-sm lg:text-base font-medium transition-all duration-200 hover:gap-2 bg-green-50 hover:bg-green-100 px-4 py-2 rounded-lg border border-green-200"
                style={{ color: '#22aed8' }}
              >
                <FaWhatsapp className="w-4 h-4 mr-2 text-green-600" />
                Learn More About Us
                <HiArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 lg:py-18.5 rounded-3xl p-6 lg:p-8 border border-gray-100">
              <h3 className="text-xl lg:text-2xl font-bold mb-3" style={{ color: '#383E72' }}>
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                "To be the go-to agency for hotel accommodation worldwide, providing quality service and competitive rates, with plans to expand into a comprehensive travel service offering air fares, tours, excursions, visas, insurance and vacation packages."
              </p>
            </div>
          </div>

          {/* Image & Stats */}
          <div className="space-y-6">
            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1517999349371-c43520457b23?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our multilingual and experienced team"
                className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm opacity-90">Our multilingual team</p>
                <h4 className="text-xl font-bold">Excellence in hotel accommodation</h4>
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
                Join thousands of happy clients who have trusted us to find competitive rates for hotel accommodation worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleFindHotelClick}
                  className="px-8 py-4 rounded-2xl text-white font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  style={{ backgroundColor: '#22aed8' }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Find Your Hotel</span>
                </button>
                <button 
                  onClick={handleContactTeamClick}
                  className="px-8 py-4 rounded-2xl font-semibold text-lg border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white flex items-center justify-center space-x-2"
                  style={{ 
                    color: '#383E72', 
                    borderColor: '#383E72'
                  }}
                >
                  <FaWhatsapp className="w-5 h-5 text-green-600" />
                  <span>Contact Our Team</span>
                </button>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-6 inline-flex items-center space-x-2 text-sm text-gray-600 bg-green-50 px-4 py-2 rounded-full border border-green-200">
                <FaWhatsapp className="w-4 h-4 text-green-600" />
                <span>Get instant responses from our multilingual team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}