import { 
  HiLocationMarker, 
  HiCalendar, 
  HiUsers,
  HiSearch,
  HiChevronDown,
  HiPlay,
  HiStar
} from 'react-icons/hi';

export default function HeroSection() {
  const destinations = [
    {
      id: 1,
      name: "New York City",
      country: "USA",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 2847
    },
    {
      id: 2,
      name: "Paris",
      country: "France", 
      image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.9,
      reviews: 3251
    },
    {
      id: 3,
      name: "Tokyo",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 1892
    },
    {
      id: 4,
      name: "Bali",
      country: "Indonesia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 2156
    }
  ];

  return (
    <div id='hero' className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="hero-pattern" patternUnits="userSpaceOnUse" width="50" height="50">
              <circle cx="25" cy="25" r="20" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
              <path d="M25,5 L25,45 M5,25 L45,25" stroke="#3B82F6" strokeWidth="0.3"/>
              <circle cx="25" cy="25" r="2" fill="#3B82F6" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Hero Text */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8 bg-blue-500">
            <HiLocationMarker className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gray-800">Discover Your</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Dream Destinations
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Explore breathtaking places around the world with our curated travel experiences
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-4 lg:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Destination */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                  <div className="relative">
                    <HiLocationMarker className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Where to?"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Check In */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check In</label>
                  <div className="relative">
                    <HiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Check Out */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check Out</label>
                  <div className="relative">
                    <HiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                    <HiSearch className="w-5 h-5" />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Destination Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
            <p className="text-gray-600 text-lg">Discover amazing places around the world</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Large Card 1 */}
            <div className="sm:col-span-1 lg:col-span-1">
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border border-gray-100">
                <div className="relative h-48 lg:h-64 overflow-hidden">
                  <img
                    src={destinations[0].image}
                    alt={destinations[0].name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <HiStar className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-800">{destinations[0].rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{destinations[0].name}</h3>
                  <p className="text-gray-500 mb-3">{destinations[0].country}</p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>{destinations[0].reviews.toLocaleString()} reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Cards Column */}
            <div className="space-y-6">
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={destinations[1].image}
                    alt={destinations[1].name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <HiStar className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium text-gray-800">{destinations[1].rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1 text-gray-800">{destinations[1].name}</h3>
                  <p className="text-gray-500 text-sm">{destinations[1].country}</p>
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
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <HiStar className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium text-gray-800">{destinations[2].rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1 text-gray-800">{destinations[2].name}</h3>
                  <p className="text-gray-500 text-sm">{destinations[2].country}</p>
                </div>
              </div>
            </div>

            {/* Large Card 2 */}
            <div className="sm:col-span-1 lg:col-span-1">
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border border-gray-100">
                <div className="relative h-48 lg:h-64 overflow-hidden">
                  <img
                    src={destinations[3].image}
                    alt={destinations[3].name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <HiStar className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-800">{destinations[3].rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{destinations[3].name}</h3>
                  <p className="text-gray-500 mb-3">{destinations[3].country}</p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>{destinations[3].reviews.toLocaleString()} reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mountains Card */}
            <div className="sm:col-span-1 lg:col-span-1">
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border border-gray-100">
                <div className="relative h-48 lg:h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
                    alt="Mountains"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <HiStar className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-800">4.9</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Mountains</h3>
                  <p className="text-gray-500 mb-3">Switzerland</p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>1,847 reviews</span>
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