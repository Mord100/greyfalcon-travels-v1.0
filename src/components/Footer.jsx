import { 
  HiMail, 
  HiPhone,
  HiLocationMarker,
  HiGlobeAlt,
  HiShieldCheck,
  HiCreditCard,
  HiHome,
  HiCamera,
  HiChatAlt2,
  HiArrowUp
} from 'react-icons/hi';

export default function Footer() {
  const whatsappNumber = "447739406932"; 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDestinationClick = (destination) => {
    const message = `Hello Grey Falcon Travels!

I'm interested in booking accommodation in *${destination}*.

Could you please provide me with:
- Available hotels and rates
- Best deals for my travel dates
- Any special packages or offers

Looking forward to your recommendations!`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const destinations = [
    'Dubai', 'London', 'New York', 'Bali', 
    'Maldives', 'Antalya', 'Istanbul', 
    'Johannesburg', 'Makkah'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-conditions' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-800 relative overflow-hidden border-t border-gray-200">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-200 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-cyan-200 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-blue-200 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-cyan-200 rounded-full"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
              <img src="/logo.png" alt="Logo" className="w-40"/>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your go-to agency for hotel accommodations worldwide. Established in 2020, 
                we specialize in competitive rates with our multilingual and experienced team.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 group">
                  {/* <div className="w-10 h-10 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                    <HiMail className="w-5 h-5 text-blue-600" />
                  </div> */}
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:sales@greyfalcontravels.com" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
                      sales@greyfalcontravels.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors duration-200">
                    <HiPhone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:+447739406932" className="text-gray-800 hover:text-green-600 transition-colors duration-200">
                      +44 7739 406932
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-purple-50 border border-purple-200 rounded-lg flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-200">
                    <HiLocationMarker className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-800">United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Destinations */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-gray-800">Popular Destinations</h4>
              <p className="text-xs text-gray-500 mb-4">Click any destination to get hotel recommendations via WhatsApp</p>
              <div className="grid grid-cols-2 gap-2">
                {destinations.map((destination, index) => (
                  <button
                    key={index}
                    onClick={() => handleDestinationClick(destination)}
                    className="group cursor-pointer text-left p-2 rounded-lg hover:bg-green-50 hover:border-green-200 border border-transparent transition-all duration-200"
                  >
                    <span className="text-gray-600 group-hover:text-green-600 transition-colors duration-200 text-sm font-medium">
                      {destination}
                    </span>
                    <div className="w-0 group-hover:w-4 h-0.5 bg-green-500 transition-all duration-200 mt-1"></div>
                  </button>
                ))}
              </div>
              
              {/* WhatsApp CTA for destinations */}
              <div className="mt-6 p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2 text-green-700">
                  <HiChatAlt2 className="w-4 h-4" />
                  <span className="text-xs font-medium">Instant WhatsApp Quotes</span>
                </div>
                <p className="text-xs text-green-600 mt-1">
                  Get personalized hotel recommendations and rates instantly
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-gray-800">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA Section */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                <h5 className="font-semibold mb-2 text-blue-700">Ready to Travel?</h5>
                <p className="text-sm text-gray-600 mb-3">Get competitive hotel rates worldwide</p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center space-x-2 text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <span>Get Quote</span>
                  <HiArrowUp className="w-4 h-4 rotate-45" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-500 text-sm">
                © 2025 Grey Falcon Travels LTD. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <span>Est. 2020</span>
                <span>•</span>
                <span>UK Based</span>
                <span>•</span>
                <span>Worldwide Service</span>
                <span>|</span>
                <span><a className='cursor-pointer hover:text-blue-600' href="https://divdynamicsmw.com" target="_blank" rel="noopener noreferrer">Developed by Div Dynamics</a></span>
              </div>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group bg-gray-100 hover:bg-blue-100 border border-gray-200 hover:border-blue-300 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Scroll to top"
            >
              <HiArrowUp className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 pt-6 align-middle border-t border-gray-200">
            <div className="flex flex-wrap justify-center items-center space-x-6 space-y-2 text-xs text-gray-500">
              <div className="flex items-center space-x-2">
                <HiShieldCheck className="w-4 h-4 text-green-500" />
                <span>Secure Booking</span>
              </div>
              <div className="flex items-center space-x-2">
                <HiGlobeAlt className="w-4 h-4 text-blue-500" />
                <span>Worldwide Coverage</span>
              </div>
              <div className="flex items-center space-x-2">
                <HiChatAlt2 className="w-4 h-4 text-purple-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center mb-2 space-x-2">
                <HiCreditCard className="w-4 h-4 text-yellow-500" />
                <span>Flexible Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}