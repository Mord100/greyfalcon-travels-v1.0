import React, { useState, useEffect } from 'react';
import { 
  HiChevronLeft, 
  HiChevronRight, 
  HiStar,
  HiLocationMarker,
  HiWifi,
  HiCurrencyDollar,
  HiHeart
} from 'react-icons/hi';

const HotelSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const hotels = [
    {
      id: 1,
      name: "Jumeirah Beach Hotel",
      location: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop",
      rating: 4.8,
      reviews: 3247,
      price: 450,
      description: "Iconic wave-shaped luxury resort offering stunning Arabian Gulf views and world-class amenities.",
      amenities: ["Private Beach", "Multiple Pools", "Spa", "Fine Dining"],
      badge: "Luxury"
    },
    {
      id: 2,
      name: "Anantara Maldives",
      location: "Maldives",
      image: "https://assets.anantara.com/image/upload/q_auto,f_auto,c_limit,w_1045/media/minor/anantara/images/anantara-dhigu-maldives-resort/the-resort/anantara_dhigu_two_bedroom_family_pool_villa_aerial_984x532.jpg",
      rating: 4.9,
      reviews: 2156,
      price: 850,
      description: "Overwater villas in pristine turquoise waters with unparalleled luxury and privacy.",
      amenities: ["Overwater Villas", "Private Butler", "Diving Center", "Spa"],
      badge: "Paradise"
    },
    {
      id: 3,
      name: "Titanic Hotel Antalya",
      location: "Antalya, Turkey",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop",
      rating: 4.6,
      reviews: 4892,
      price: 180,
      description: "All-inclusive Mediterranean resort with extensive facilities and entertainment options.",
      amenities: ["All-Inclusive", "Water Park", "Kids Club", "Beach Access"],
      badge: "Family Friendly"
    },
    {
      id: 4,
      name: "Zamzam Clock Tower",
      location: "Makkah, Saudi Arabia",
      image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=500&fit=crop",
      rating: 4.7,
      reviews: 5634,
      price: 320,
      description: "Premium accommodation steps away from the Holy Mosque with spiritual comfort and luxury.",
      amenities: ["Holy Mosque View", "Prayer Facilities", "Halal Dining", "Concierge"],
      badge: "Spiritual"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % hotels.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + hotels.length) % hotels.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);


  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">

        {/* Slider Container */}
        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Slider */}
          <div className="overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {hotels.map((hotel) => (
                <div key={hotel.id} className="w-full flex-shrink-0">
                  <div className="relative">
                    {/* Hotel Image */}
                    <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>

                    {/* Hotel Info Overlay */}
                    <div className="absolute bottom-0 left-12 right-12 sm:left-16 sm:right-16 md:left-20 md:right-20 p-3 sm:p-6 md:p-8 lg:p-12 xl:p-16 text-white">
                      <div className="flex items-center mb-1 sm:mb-2">
                        <HiLocationMarker className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1 sm:mr-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg truncate">{hotel.location}</span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2 lg:mb-3 leading-tight">
                        {hotel.name}
                      </h3>
                      
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-2 sm:mb-3 lg:mb-4 max-w-2xl line-clamp-2 sm:line-clamp-3">
                        {hotel.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-6">
                        {/* Rating */}
                        <div className="flex items-center">
                          <HiStar className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm sm:text-base lg:text-lg font-semibold mr-1 sm:mr-2">{hotel.rating}</span>
                          <span className="text-white/80 text-xs sm:text-sm lg:text-base hidden xs:inline">
                            ({hotel.reviews.toLocaleString()} reviews)
                          </span>
                          <span className="text-white/80 text-xs sm:text-sm lg:text-base xs:hidden">
                            ({hotel.reviews > 1000 ? `${Math.floor(hotel.reviews / 1000)}k` : hotel.reviews})
                          </span>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3 lg:mt-4">
                        {hotel.amenities.slice(0, window.innerWidth < 640 ? 2 : 4).map((amenity, idx) => (
                          <span 
                            key={idx}
                            className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm truncate max-w-24 sm:max-w-none"
                            title={amenity}
                          >
                            {amenity}
                          </span>
                        ))}
                        {hotel.amenities.length > (window.innerWidth < 640 ? 2 : 4) && (
                          <span className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm">
                            +{hotel.amenities.length - (window.innerWidth < 640 ? 2 : 4)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg z-10"
          >
            <HiChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg z-10"
          >
            <HiChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8 space-x-2 sm:space-x-3">
            {hotels.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-4 sm:w-8' 
                    : 'hover:scale-125'
                }`}
                style={{ 
                  backgroundColor: currentSlide === index ? '#22aed8' : '#d1d5db'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelSlider;