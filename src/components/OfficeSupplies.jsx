import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const officeBrands = [
  { name: "MAX", logo: "link-to-max.png" },
  { name: "UHU", logo: "https://tse2.mm.bing.net/th/id/OIP.pVXfrTUmSpQBx9guJQqorgHaHa?pid=Api&P=0&h=220" },
  { name: "Schneider", logo: "/logoImg1.png" },
  { name: "Double A", logo: "https://logoeps.com/wp-content/uploads/2013/08/double-a-vector-logo.png" },
  { name: "ALBA", logo: "http://stationeryonlinekw.com/cdn/shop/collections/Alba_Rado_Logo.jpg?v=1700114733" },
  { name: "Foska", logo: "https://www.tunisianet.com.tn/img/m/785.jpg" },
  { name: "Deli", logo: "https://grafosystems.gr/wp-content/uploads/2019/10/DELI-LOGO.png" },
  { name: "Kores", logo: "https://www.logotypes101.com/logos/976/03B4FE987EB08A6C6B678E1B146C2F88/kores.png" },
  { name: "Casio", logo: "https://logospng.org/download/casio/logo-casio-1024.png" },
  { name: "Pilot", logo: "https://www.pikpng.com/pngl/b/247-2472631_pilot-logos-pilot-pen-logo-png-clipart.png" },
  { name: "Uni", logo: "link-to-uni.png" },
  { name: "Cello", logo: "https://seeklogo.com/images/C/cello-logo-56FCB51057-seeklogo.com.png" },
  { name: "Atlas", logo: "link-to-atlas.png" },
  { name: "Renz", logo: "https://images.seeklogo.com/logo-png/11/1/renz-logo-png_seeklogo-117638.png?v=1955133491707348992" },
  { name: "Kangaro", logo: "https://millermalta.com/wp-content/uploads/2019/03/kangaro_logo_high_res_transparent-copy.png" },
  { name: "SDI", logo: "https://logodix.com/logo/2005831.png" },
   { name: "SinarLine", logo: "https://app.co.id/documents/20123/37290/asia-pulp-paper-Logo-Sinarline.png/0302075e-43eb-6a36-d8c1-9e7d7fc37c0b?t=1576319115293" },
   { name: "Rapid", logo: "https://ce8dc832c.cloudimg.io/cdn/n/n@b8f9b3cba465679bc94c1b3be1dbade589d00f8a/_cs_/2020/06/5eeb5e53c58b6/rapid_logo.png" },
    { name: "FAber-castel", logo: "http://tienda.faber-castell.com.mx/cdn/shop/files/Faber-Castell-Mexico-Logo_a443bc59-c512-4fc6-8ae5-03480dd00edc_1200x1200.png?v=1639778867" },
     { name: "Staedtler", logo: "https://logodix.com/logo/1833532.png" },
      { name: "maped", logo: "https://www.logotheque-vectorielle.fr/wp-content/uploads/2022/10/logo-vectoriel-maped.jpg" },
      { name: "hp", logo: "https://www.pngall.com/wp-content/uploads/9/Hewlett-Packard-PNG-Image.png" },
      { name: "canon", logo: "https://logos-world.net/wp-content/uploads/2020/08/Canon-Logo.png" },
        { name: "ricoh", logo: "https://www.pikpng.com/pngl/b/590-5905131_ricoh-logo-png.png" },
];

export default function OfficeSuppliesSlider() {
  return (
    <div  className="relative py-10 px-6 text-center  bg-white bg-cover bg-center">

      <h2
  className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold 
             bg-clip-text font-blackhan text-transparent 
             bg-gradient-to-r from-[rgb(60,207,215)] via-cyan-500 to-blue-600 
             text-center leading-tight mb-1 py-5"
>
  Office Supplies & Specials
</h2>

      <p className="text-gray-600 mb-2">
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
