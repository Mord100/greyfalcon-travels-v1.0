import {
  HiLocationMarker,
  HiCalendar,
  HiUsers,
  HiSearch,
  HiChevronDown,
  HiPlay,
  HiStar,
} from "react-icons/hi";
import HotelSlider from "./HotelSlider";


export default function HeroSection() {
  const destinations = [
    {
      id: 1,
      name: "Dubai",
      country: "UAE",
      image:
        "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqwAe48LnJtYehBNhmGVSBovhaB5Eeh8f7_SIrNre0cjm9WqwnfzdhmwvYVSHss9UNbZYngpOS0Av3ZvEb-uvg-tgjr4QPe-WEfEIuNHvO4Fq5DURqDFd2cXB-ok28aqgDt3WB5=s1360-w1360-h1020-rw", // Dubai Marina skyline
      reviews: 4200,
    },
    {
      id: 2,
      name: "Mecca",
      country: "Saudi Arabia",
      image:
        "https://www.islamiclandmarks.com/wp-content/uploads/2023/05/fascinating_facts_about_mecca-1152x1536.jpg", // Kaaba at Mecca
      reviews: 5800,
    },
    {
      id: 3,
      name: "Medina",
      country: "Saudi Arabia",
      image:
        "https://digital.ihg.com/is/image/ihg/intercontinental-madinah-9047763518-2x1", // Prophet's Mosque in Medina
      reviews: 4300,
    },
    {
      id: 4,
      name: "Doha",
      country: "Qatar",
      image:
        "https://images.pexels.com/photos/2628289/pexels-photo-2628289.jpeg?_gl=1*duuduz*_ga*MTg5MDY2MjY3Ni4xNzUzNjEwNjEw*_ga_8JE65Q40S6*czE3NTM2MTA2MDkkbzEkZzAkdDE3NTM2MTA2MTEkajU4JGwwJGgw", // Doha skyline
      reviews: 1900,
    },
    {
      id: 5,
      name: "Antalya",
      country: "Turkey",
      image:
        "https://images.pexels.com/photos/2767815/pexels-photo-2767815.jpeg?_gl=1*2iz7jo*_ga*MTg5MDY2MjY3Ni4xNzUzNjEwNjEw*_ga_8JE65Q40S6*czE3NTM2MTA2MDkkbzEkZzEkdDE3NTM2MTA3MDgkajQyJGwwJGgw", // Antalya old town and harbor
      reviews: 2100,
    },
    {
      id: 6,
      name: "Kuala Lumpur",
      country: "Malaysia",
      image:
        "https://images.pexels.com/photos/122244/pexels-photo-122244.jpeg?_gl=1*1kq6n8e*_ga*MTg5MDY2MjY3Ni4xNzUzNjEwNjEw*_ga_8JE65Q40S6*czE3NTM2MTA2MDkkbzEkZzEkdDE3NTM2MTA3OTEkajMxJGwwJGgw", // Petronas Towers KL
      reviews: 1700,
    },
  ];

  return (
    <div id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      />

      {/* Light Overlay for readability */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          className="w-full h-full"
        >
          <defs>
            <pattern
              id="hero-pattern"
              patternUnits="userSpaceOnUse"
              width="50"
              height="50"
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
              <path
                d="M25,5 L25,45 M5,25 L45,25"
                stroke="#FFFFFF"
                strokeWidth="0.3"
              />
              <circle cx="25" cy="25" r="2" fill="#FFFFFF" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Hero Text */}
        <HotelSlider/>
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white drop-shadow-lg">Discover Your</span>
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent drop-shadow-lg">
              Dream Destinations
            </span>
          </h1>       
        </div>

        {/* Destination Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 drop-shadow-lg">
              Popular Destinations
            </h2>
            <p className="text-white/90 text-lg drop-shadow-md">
              Discover amazing places around the world
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Large Card 1 - Dubai */}
            <div className="sm:col-span-1 lg:col-span-1">
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border border-gray-100">
                <div className="relative h-48 lg:h-64 overflow-hidden">
                  <img
                    src={destinations[0].image}
                    alt={destinations[0].name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {destinations[0].name}
                  </h3>
                  <p className="text-gray-500 mb-3">
                    {destinations[0].country}
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>
                      {destinations[0].reviews.toLocaleString()} reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Cards Column - Mecca & Medina */}
            <div className="space-y-6">
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={destinations[1].image}
                    alt={destinations[1].name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1 text-gray-800">
                    {destinations[1].name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    {destinations[1].country}
                  </p>
                  <div className="flex items-center text-xs text-gray-400">
                    <span>
                      {destinations[1].reviews.toLocaleString()} reviews
                    </span>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={destinations[2].image}
                    alt={destinations[2].name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1 text-gray-800">
                    {destinations[2].name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    {destinations[2].country}
                  </p>
                  <div className="flex items-center text-xs text-gray-400">
                    <span>
                      {destinations[2].reviews.toLocaleString()} reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Large Card 2 - Doha */}
            <div className="sm:col-span-1 lg:col-span-1">
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border border-gray-100">
                <div className="relative h-48 lg:h-64 overflow-hidden">
                  <img
                    src={destinations[3].image}
                    alt={destinations[3].name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {destinations[3].name}
                  </h3>
                  <p className="text-gray-500 mb-3">
                    {destinations[3].country}
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>
                      {destinations[3].reviews.toLocaleString()} reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Cards Column - Antalya & Kuala Lumpur */}
            <div className="space-y-6">
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={destinations[4].image}
                    alt={destinations[4].name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1 text-gray-800">
                    {destinations[4].name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    {destinations[4].country}
                  </p>
                  <div className="flex items-center text-xs text-gray-400">
                    <span>
                      {destinations[4].reviews.toLocaleString()} reviews
                    </span>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={destinations[5].image}
                    alt={destinations[5].name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1 text-gray-800">
                    {destinations[5].name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    {destinations[5].country}
                  </p>
                  <div className="flex items-center text-xs text-gray-400">
                    <span>
                      {destinations[5].reviews.toLocaleString()} reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
