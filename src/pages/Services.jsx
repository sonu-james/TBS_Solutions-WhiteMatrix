// ServicesPage.jsx
'use client';

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// === Services data ===
const services = [
  { 
    title: "Large-Format Printing", 
    desc: "Vibrant prints for banners, exhibition stands, and displays.", 
    details: "We specialize in high-quality, large-format prints including roll-up stands, flex prints, display boards, and exhibition counters. Designed to deliver visual impact with durability and precision.", 
    items: ["Banners", "Posters", "Exhibition Stands", "Display Boards"], 
    link: "/large-format-printing" 
  },
  { 
    title: "Screen Printing", 
    desc: "Custom apparel and promotional branding.", 
    details: "From t-shirts and uniforms to helmets, bags, and sunshades—our screen printing ensures long-lasting, vibrant designs on a wide range of surfaces. Perfect for promotional campaigns and corporate branding.", 
    items: ["T-Shirts", "Uniforms", "Bags", "Promo Items"], 
    link: "/screen-printing" 
  },
  { 
    title: "Office Stationery", 
    desc: "Professional stationery for your brand.", 
    details: "We provide premium letterheads, envelopes, business cards, and custom folders. High-quality finishes help your company maintain a consistent professional image across all correspondence.", 
    items: ["Letterheads", "Business Cards", "Envelopes", "Custom Folders"], 
    link: "/stationery" 
  },
  { 
    title: "Corporate Gifts", 
    desc: "Memorable branded giveaways and souvenirs.", 
    details: "Our customized corporate gifts include engraved items, premium branded products, and custom packaging. Designed to strengthen relationships with clients, partners, and employees.", 
    items: ["Engraved Items", "Premium Gifts", "Custom Packaging", "Souvenirs"], 
    link: "/corporate-gifts" 
  },
  { 
    title: "Signage Solutions", 
    desc: "Eye-catching signage for businesses.", 
    details: "We design and install 3D signboards, LED signs, safety stickers, and wayfinding systems. Built with weather-resistant, durable materials for maximum visibility and impact.", 
    items: ["3D Signboards", "LED Signs", "Safety Stickers", "Wayfinding"], 
    link: "/signage" 
  },
  { 
    title: "Print Solutions", 
    desc: "Complete printing from concept to delivery.", 
    details: "From brochures and catalogs to flyers, bound books, and labels—our print solutions cover all your business needs with professional design, material, and finishing options.", 
    items: ["Catalogs", "Brochures", "Flyers", "Bound Books"], 
    link: "/print-solutions" 
  },
];

// === Visual tokens ===
const TOKENS = {
  bg: "#00081a",
  panel: "#0d151a",
  text: "#E8EEF0",
  accent: "#60B6D8",
  stroke: "#24313a",
};

// === Motion variants ===
const cardEntry = {
  hidden: (dir) => {
    switch (dir) {
      case 0: return { x: -60, y: -40, opacity: 0 };
      case 1: return { x: 60, y: -40, opacity: 0 };
      case 2: return { x: -60, y: 40, opacity: 0 };
      case 3: return { x: 60, y: 40, opacity: 0 };
      default: return { y: 50, opacity: 0 };
    }
  },
  visible: { x: 0, y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// === Page ===
export default function ServicesPage() {
  return (
    <div
      style={{ background: `radial-gradient(circle at 0% 20%, rgba(6,14,28,0.80), ${TOKENS.bg})` }}
      className="min-h-screen text-white"
    >
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left column (hidden on mobile) */}
          <aside className="hidden md:flex md:col-span-4 flex-col items-start sticky top-24 pt-10">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold"
              style={{ color: TOKENS.text, lineHeight: 1.1, letterSpacing: "-0.02em", fontFamily: "Aktiv, Alan Sans, system-ui, sans-serif" }}
            >
              <div>This is <span style={{ color: TOKENS.accent, fontWeight: 400 }}>what</span></div>
              <div>we do best</div>
            </h1>

            {/* Decorative animated underline */}
            <div className="mt-6 relative flex items-center justify-center">
              <span className="text-lg sm:text-xl md:text-2xl font-bold relative z-10" style={{ color: TOKENS.accent }}>
                TBS
              </span>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ backgroundColor: TOKENS.accent }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
            </div>
          </aside>

          {/* Main services section */}
          <section className="col-span-12 md:col-span-8">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-300 mb-8">
                SERVICES
              </h2>
            </motion.div>

            {/* Services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {services.map((service, idx) => {
                const direction = idx % 4;
                return (
                  <motion.div
                    key={idx}
                    custom={direction}
                    initial="hidden"
                    animate="visible"
                    variants={cardEntry}
                    transition={{ delay: idx * 0.05 }}
                    className="relative pl-4 border-l-2"
                    style={{ borderColor: TOKENS.accent }}
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2" style={{ color: TOKENS.text }}>
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-2">{service.desc}</p>
                    <p className="text-sm sm:text-base text-gray-400 mb-2 leading-relaxed">{service.details}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm sm:text-base mb-3">
                      {service.items.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
