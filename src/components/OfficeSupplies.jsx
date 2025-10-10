import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const officeBrands = [
  { name: "MAX", logo: "/src/assets/images/MAX.png" },
  { name: "UHU", logo: "/src/assets/images/UHU.jpeg" },
  { name: "Schneider", logo: "/src/assets/images/schnider.jpeg" },
  { name: "Double A", logo: "/src/assets/images/doubleA.png" },
  { name: "ALBA", logo: "/src/assets/images/Alba_Rado_Logo.webp" },
  { name: "Foska", logo: "/src/assets/images/foska.jpg" },
  { name: "Deli", logo: "/src/assets/images/DELI-LOGO.png" },
  { name: "Kores", logo: "/src/assets/images/kores.png" },
  { name: "Casio", logo: "/src/assets/images/logo-casio-1024.png" },
  { name: "Pilot", logo: "/src/assets/images/pilot.png" },
  { name: "Uni", logo: "/src/assets/images/MAX.png" },
  { name: "Cello", logo: "/src/assets/images/cello.png" },
  { name: "Atlas", logo: "/src/assets/images/atlas.png" },
  { name: "Renz", logo: "/src/assets/images/renz.png" },
  { name: "Kangaro", logo: "/src/assets/images/kangaro.png" },
  { name: "SDI", logo: "/src/assets/images/SDI.png" },
  { name: "SinarLine", logo: "/src/assets/images/sinarLine.png" },
  { name: "Rapid", logo: "/src/assets/images/rapid_logo.webp" },
  { name: "FAber-castel", logo: "/src/assets/images/faber.webp" },
  { name: "Staedtler", logo: "/src/assets/images/staedtler.png" },
  { name: "maped", logo: "/src/assets/images/maped.jpg" },
  { name: "hp", logo: "/src/assets/images/hp.png" },
  { name: "canon", logo: "/src/assets/images/Canon-Logo.png" },
  { name: "ricoh", logo: "/src/assets/images/ricoh.png" },
];

export default function OfficeSupplies() {
  return (
    <div className="relative py-10 px-6 text-center  bg-white bg-cover bg-center">

      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold 
             bg-clip-text font-blackhan text-transparent 
             bg-gradient-to-r from-[rgb(60,207,215)] via-cyan-500 to-blue-600 
             text-center leading-tight mb-1 py-5"
      >
        Office Supplies & Specials
      </h2>

      <p className="text-gray-600 font-alan mb-2">
        Trusted global brands for all your office needs
      </p>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {officeBrands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white  p-8 flex items-center justify-center hover:scale-105 transition-transform duration-300 ">
              <img src={brand.logo} alt={brand.name} className="max-h-16" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
