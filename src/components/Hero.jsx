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
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
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
    <div className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #22aed8 0%, #40c4ec 50%, #383E72 100%)' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(56, 62, 114, 0.4), rgba(34, 174, 216, 0.3))' }} />
      
      {/* Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Hero Text */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Dream Destinations
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Explore breathtaking places around the world with our curated travel experiences
          </p>
          
          
        </div>



        {/* Destination Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Popular Destinations</h2>
              <p className="text-white/80">Discover amazing places around the world</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-2 lg:col-span-1">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destinations[0].image}
                    alt={destinations[0].name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 rounded-full px-3 py-1 flex items-center space-x-1" style={{ backgroundColor: '#22aed8', color: 'white' }}>
                    <HiStar className="w-4 h-4 text-white fill-current" />
                    <span className="text-sm font-medium">{destinations[0].rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1" style={{ color: '#383E72' }}>{destinations[0].name}</h3>
                  <p className="text-slate-500 mb-3">{destinations[0].country}</p>
                  <div className="flex items-center text-sm text-slate-400">
                    <span>{destinations[0].reviews.toLocaleString()} reviews</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={destinations[1].image}
                    alt={destinations[1].name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 rounded-full px-2 py-1 flex items-center space-x-1" style={{ backgroundColor: '#22aed8', color: 'white' }}>
                    <HiStar className="w-3 h-3 text-white fill-current" />
                    <span className="text-xs font-medium">{destinations[1].rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1" style={{ color: '#383E72' }}>{destinations[1].name}</h3>
                  <p className="text-slate-500 text-sm">{destinations[1].country}</p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={destinations[2].image}
                    alt={destinations[2].name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 rounded-full px-2 py-1 flex items-center space-x-1" style={{ backgroundColor: '#22aed8', color: 'white' }}>
                    <HiStar className="w-3 h-3 text-white fill-current" />
                    <span className="text-xs font-medium">{destinations[2].rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1" style={{ color: '#383E72' }}>{destinations[2].name}</h3>
                  <p className="text-slate-500 text-sm">{destinations[2].country}</p>
                </div>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destinations[3].image}
                    alt={destinations[3].name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 rounded-full px-3 py-1 flex items-center space-x-1" style={{ backgroundColor: '#22aed8', color: 'white' }}>
                    <HiStar className="w-4 h-4 text-white fill-current" />
                    <span className="text-sm font-medium">{destinations[3].rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1" style={{ color: '#383E72' }}>{destinations[3].name}</h3>
                  <p className="text-slate-500 mb-3">{destinations[3].country}</p>
                  <div className="flex items-center text-sm text-slate-400">
                    <span>{destinations[3].reviews.toLocaleString()} reviews</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
                    alt="Mountains"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 rounded-full px-3 py-1 flex items-center space-x-1" style={{ backgroundColor: '#22aed8', color: 'white' }}>
                    <HiStar className="w-4 h-4 text-white fill-current" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1" style={{ color: '#383E72' }}>Mountains</h3>
                  <p className="text-slate-500 mb-3">Switzerland</p>
                  <div className="flex items-center text-sm text-slate-400">
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