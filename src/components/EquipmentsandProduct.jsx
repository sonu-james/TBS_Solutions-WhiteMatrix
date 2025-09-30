'use client';

import React from "react";
import Slider from "react-slick"; // react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";


import { Printer, Video, Barcode, Layers, Copy, Scan } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

const services = [
  {
    title: "Photocopier Rentals",
    desc: "Flexible rental options with full maintenance included.",
    icon: <Copy className="w-8 h-8 text-indigo-500" />,
  },
  {
    title: "Large Format Printers",
    desc: "Graphtec & Mistral cutting plotters for precision work.",
    icon: <Printer className="w-8 h-8 text-pink-500" />,
  },
  {
    title: "Projectors & Video Walls",
    desc: "4K Ultra HD with Android support for seamless presentations.",
    icon: <Video className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "Barcode Solutions",
    desc: "Labels, stickers, ribbons & thermal printing supplies.",
    icon: <Barcode className="w-8 h-8 text-black-500" />,
  },
  {
    title: "Lamination Equipment",
    desc: "Professional hot & cold laminator series.",
    icon: <Layers className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Office Equipment",
    desc: "Binding, shredding & scanning machines.",
    icon: <Scan className="w-8 h-8 text-purple-500" />,
  },
];

export default function EquipmentAndProducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 0, settings: { slidesToShow: 1 } },
    ],
  };
const navigate = useNavigate();
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
{/*         <p className="text-sm text-gray-500 uppercase mb-2">Our Top Services</p>
 */}       <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold bg-clip-text text-transparent 
                     bg-gradient-to-r from-[rgb(60,207,215)] via-cyan-400 to-blue-600 
                     text-center mb-16"
        >
          Premium Equipment & Products
          <p className="text-sm text-gray-500 mt-8 font-semibold">Industry-leading equipment and supplies for your business needs
</p>
        </motion.h2>

        {/* React Slick Slider */}
        <Slider {...settings}>
          {services.map((service, idx) => (
            <div key={idx} className="px-4">
  <div className="relative flex flex-col items-center space-y-4 p-6 rounded-xl transition-shadow group">
    {/* Corner highlights */}
    <span className="absolute inset-0 rounded-xl pointer-events-none before:content-[''] before:absolute before:top-0 before:left-0 before:w-10 before:h-10 before:border-t-4 before:border-l-4 before:border-[rgb(50,180,190)] before:opacity-0 group-hover:before:opacity-100 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-10 after:border-b-4 after:border-r-4 after:border-[rgb(50,180,190)] after:opacity-0 group-hover:after:opacity-100 transition-opacity duration-300"></span>

    <div className="bg-gray-100 p-8 rounded-full">{service.icon}</div>
    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
    <p className="text-gray-600 text-center">{service.desc}</p>
  </div>
</div>

          ))}
        </Slider>
        <button  className="inline-block mt-4 px-6 py-3 text-sm font-semibold text-white rounded-lg 
                         bg-gradient-to-r from-[rgb(60,207,215)] to-[rgb(40,180,190)] 
                         hover:from-[rgb(50,190,200)] hover:to-[rgb(30,160,170)] transition mt-20"
            
        onClick={() => navigate("/products")}>
          View More
        </button>
        
      </div>
      
    </section>
  );
}
