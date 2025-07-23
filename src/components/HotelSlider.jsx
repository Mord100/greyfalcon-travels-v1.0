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
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
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
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Slider Container */}
        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Slider */}
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {hotels.map((hotel) => (
                <div key={hotel.id} className="w-full flex-shrink-0">
                  <div className="relative">
                    {/* Hotel Image */}
                    <div className="relative h-96 md:h-[500px] overflow-hidden">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />


                    </div>

                    {/* Hotel Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-16 text-white">
                      <div className="flex items-center mb-2">
                        <HiLocationMarker className="w-5 h-5 mr-2" />
                        <span className="text-lg">{hotel.location}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-3">{hotel.name}</h3>
                      <p className="text-lg text-white/90 mb-4 max-w-2xl">{hotel.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-6">
                        {/* Rating */}
                        <div className="flex items-center">
                          <HiStar className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                          <span className="text-lg font-semibold mr-2">{hotel.rating}</span>
                          <span className="text-white/80">({hotel.reviews.toLocaleString()} reviews)</span>
                        </div>
                        
                      </div>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {hotel.amenities.slice(0, 4).map((amenity, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                          >
                            {amenity}
                          </span>
                        ))}
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-xs rounded-full flex items-center justify-center text-gray-800 hover:scale-110 transition-all duration-200 shadow-lg"
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-xs rounded-full flex items-center justify-center text-gray-800 hover:scale-110 transition-all duration-200 shadow-lg"
          >
            <HiChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {hotels.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-8' 
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