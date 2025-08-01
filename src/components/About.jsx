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

  const handleFindHotelClick = () => {
    const message = `Hello Grey Falcon Travels!

I'm looking for hotel accommodation and would like to get competitive rates.

Please help me with:
- Available hotels for my destination
- Your best rates and deals

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

Looking forward to hearing from your staff!`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // const stats = [
  //   {
  //     id: 2,
  //     number: "9+",
  //     label: "Featured Destinations",
  //     icon: HiGlobeAlt,
  //     color: "#40c4ec"
  //   },
  //   {
  //     id: 3,
  //     number: "4+",
  //     label: "Years in Business",
  //     icon: GiLaurelsTrophy,
  //     color: "#383E72"
  //   },
  //   {
  //     id: 4,
  //     number: "Quality",
  //     label: "Service Commitment", 
  //     icon: HiStar,
  //     color: "#22aed8"
  //   }
  // ];

  const hotelImages = [
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400&auto=format&fit=crop",
      alt: "Luxury hotel lobby"
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=400&auto=format&fit=crop",
      alt: "Modern hotel room"
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=400&auto=format&fit=crop",
      alt: "Hotel exterior"
    },
    {
      src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=400&auto=format&fit=crop",
      alt: "Resort pool area"
    },
    {
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=400&auto=format&fit=crop",
      alt: "Hotel restaurant"
    },
    {
      src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=400&auto=format&fit=crop",
      alt: "Hotel suite"
    },
    {
      src: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?_gl=1*7x44jt*_ga*MTg5MDY2MjY3Ni4xNzUzNjEwNjEw*_ga_8JE65Q40S6*czE3NTM2MTA2MDkkbzEkZzEkdDE3NTM2MTEwMjUkajQxJGwwJGgw",
      alt: "Hotel suite"
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
            </div>

          </div>

          {/* Image & Stats */}
          <div className="space-y-6">
            {/* Hotel Images Grid */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg group">
              <div className="grid grid-cols-3 grid-rows-2 gap-1 h-64 lg:h-126">
                {hotelImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`relative overflow-hidden ${
                      index === 0 ? 'col-span-2' : 
                      index === 3 ? 'col-span-2' : 
                      'col-span-1'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold">Excellence in hotel accommodation</h4>
              </div>
            </div>

            {/* Stats Grid - Now 3 columns */}
            {/* <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => { 
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={stat.id}
                    className="bg-white rounded-2xl lg:rounded-3xl p-3 lg:p-4 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                  >
                    <div 
                      className="inline-flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-xl lg:rounded-2xl mb-2 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${stat.color}15` }}
                    >
                      <IconComponent 
                        className="w-4 h-4 lg:w-5 lg:h-5"
                        style={{ color: stat.color }}
                      />
                    </div>
                    <div className="text-lg lg:text-2xl font-bold mb-1" style={{ color: '#383E72' }}>
                      {stat.number}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div> */}
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
                  <span>Contact Our Team</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}