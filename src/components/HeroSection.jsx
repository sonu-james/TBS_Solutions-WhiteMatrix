import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const heroSlides = [
    {
      id: 1,
      title: "OFFICE STATIONERIES",
      description: `At True Star Business Solutions, we offer premium office stationery that enhances your brand’s identity. From custom letterheads to business cards, our high-quality products ensure a professional and polished image.`,
      image:
        "https://img1.exportersindia.com/product_images/bc-full/dir_93/2782073/office-materials-970084.jpg",
      bgColor: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      title: "OFFICE EQUIPMENTS",
      description: `We provide an extensive selection of toners and ink from top brands like Samsung, Ricoh, Toshiba, Canon, and others. Whether you need original or compatible cartridges, we offer premium options to keep your printers running at peak performance.`,
      image:
        "https://i1.adis.ws/i/canon/4471C008_MAXIFY-GX7050_01/4471c008_maxify-gx7050_01?w=1500&bg=gray95",
     bgColor: "from-blue-500 to-blue-600",
    },
    {
      id: 3,
      title: "PRINTING & SOLUTIONS",
      description: `We provide high-quality printing solutions for labels, stickers, and other office essentials. Our products are designed to help your business operate efficiently while maintaining a professional image. Whether you need barcodes, product labels, or custom stickers, we deliver durable and precise printing tailored to your needs.`,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/441514388/DQ/AR/FP/112842586/optical-barcode-sticker-1000x1000.png",
        bgColor: "from-blue-500 to-blue-400",
    },
    {
      id: 4,
      title: "DIGITAL PRINTING",
      description: `At True Star Business Solutions, we specialize in digital printing and branding solutions designed to elevate your business presence. From eye-catching roll-up stands and flex prints to customized name boards, signboards, and exhibition counters, we offer high-quality products that make a lasting impression. Our expert team ensures your brand stands out with vibrant, durable prints tailored to your specific needs.`,
      image: "https://www.rtcdirect.net/wp-content/uploads/printing-main.jpg",
         bgColor: "from-blue-500 to-blue-300",
    },
  ];

  const [active, setActive] = useState(0);

  // Auto change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // 5 sec
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
   <section className="relative flex flex-col-reverse md:flex-row w-full h-screen overflow-hidden">
  {/* Background image */}
  <div
    className="absolute inset-0 transition-all duration-700"
    style={{
      backgroundImage: `url(${heroSlides[active].image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "brightness(0.6)",
    }}
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/25 backdrop-blur-sm"></div>


{/* Sidebar (cards) */}
<div className="relative z-10 flex flex-row w-full md:w-60 h-28 md:h-full">
  {heroSlides.map((slide, index) => (
    <div
      key={slide.id}
      onClick={() => setActive(index)}
      className={`relative flex-1 h-full cursor-pointer bg-gradient-to-r ${slide.bgColor} bg-opacity-40 backdrop-blur-xl shadow-sm border-0 flex items-center justify-center
        transform transition-all duration-300 hover:scale-105`}
    >
      {/* Absolute inner text */}
      <h2
        className={`absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs md:text-sm font-semibold text-center transform md:-rotate-90 origin-center
          transition-transform duration-300
          ${active === index ? "scale-110 text-white font-bold" : "scale-100 text-white/80"}
          hover:scale-110`}
      >
        {slide.title.split(" ").join("\u00A0")}
      </h2>
    </div>
  ))}
</div>




  {/* Content */}
  <div className="flex-1 h-full flex justify-center items-center relative text-center z-10">
    <div className="max-w-md md:max-w-2xl p-4 md:p-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 transition-all duration-500 transform hover:scale-105">
      <h1 className="text-xl md:text-4xl font-bold text-yellow-300 mb-4">
        {heroSlides[active].title}
      </h1>
      <p className="text-sm md:text-base text-white leading-relaxed">
        {heroSlides[active].description}
      </p>
    </div>
  </div>
</section>

  );
}
