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
      // Updated image link for Jumeirah Beach Hotel
      image: "https://www.lemispa.com/wp-content/uploads/2022/11/132968_Jumeirah-Beach-Hotel-Travelinum.jpg", 
      rating: 4.8,

      price: 450,
      description: "26-storey wave-shaped luxury resort with 598 rooms offering panoramic Arabian Gulf views and world-class amenities.",
      amenities: ["Private Beach", "Wild Wadi Waterpark", "19 Restaurants", "Spa & Wellness"],
      badge: "Luxury"
    },
    {
      id: 2,
      name: "Titanic Deluxe Golf Belek",
      location: "Belek, Antalya, Turkey",
      // Updated image link for Titanic Deluxe Golf Belek
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/22/a2/c7/titanic-deluxe-belek.jpg?w=1400&h=-1&s=1", 
      rating: 4.6,
      reviews: 4892,
      price: 180,
      description: "5-star all-inclusive resort featuring 36-hole golf course, seven outdoor pools, and one of the region's largest spas.",
      amenities: ["All-Inclusive Plus", "36-Hole Golf Course", "7 Outdoor Pools", "Private Beach"],
      badge: "Golf Resort"
    },
    {
      id: 3,
      name: "Zamzam Clock Tower",
      location: "Makkah, Saudi Arabia",
      // Updated image link for Zamzam Clock Tower
      image: "https://lh3.googleusercontent.com/p/AF1QipOgBGT8hSRlJoL91OhhK9L3Ujt-zwRasGj5TLvh=s1360-w1360-h1020-rw", 
      rating: 4.7,
      reviews: 5634,
      price: 320,
      description: "Premium accommodation steps away from the Holy Mosque with spiritual comfort and luxury.",
      amenities: ["Holy Mosque View", "Prayer Facilities", "Halal Dining", "Concierge"],
      badge: "Spiritual"
    },
    {
      id: 4,
      name: "Anantara Maldives",
      location: "Maldives",
      // Updated image link for Anantara Maldives
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/a2/3f/ff/anantara-dhigu-maldives.jpg?w=1400&h=-1&s=1", 
      rating: 4.9,
      reviews: 2156,
      price: 850,
      description: "Overwater villas in pristine turquoise waters with unparalleled luxury and privacy.",
      amenities: ["Overwater Villas", "Private Butler", "Diving Center", "Spa"],
      badge: "Paradise"
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
    <section className="">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">

        {/* Slider Container */}
        <div 
          className="relative"
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