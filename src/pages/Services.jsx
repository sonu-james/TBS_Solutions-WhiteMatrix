import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Printer, Shirt, FileText, Gift, PanelsTopLeft, Package } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "Large-Format Printing",
      desc: "Vibrant prints for banners, stands & more.",
      icon: <Printer className="w-10 h-10 text-white" />,
      items: ["Banners", "Posters", "Exhibition Stands", "Display Boards"],
      link: "/large-format-printing",
    },
    {
      title: "Screen Printing",
      desc: "Custom apparel & promotional materials.",
      icon: <Shirt className="w-10 h-10 text-white" />,
      items: ["T-Shirts", "Uniforms", "Bags", "Promo Items"],
      link: "/screen-printing",
    },
    {
      title: "Office Stationery",
      desc: "Premium business stationery that reflects your professional image.",
      icon: <FileText className="w-10 h-10 text-white" />,
      items: ["Letterheads", "Business Cards", "Envelopes", "Custom Folders"],
      link: "/stationery",
    },
    {
      title: "Corporate Gifts",
      desc: "Memorable branded gifts that strengthen business relationships.",
      icon: <Gift className="w-10 h-10 text-white" />,
      items: ["Engraved Items", "Premium Gifts", "Custom Packaging", "Souvenirs"],
      link: "/corporate-gifts",
    },
    {
      title: "Signage Solutions",
      desc: "Eye-catching signage that makes your business stand out.",
      icon: <PanelsTopLeft className="w-10 h-10 text-white" />,
      items: ["3D Signboards", "LED Signs", "Safety Stickers", "Wayfinding"],
      link: "/signage",
    },
    {
      title: "Print Solutions",
      desc: "Complete printing services from concept to delivery.",
      icon: <Package className="w-10 h-10 text-white" />,
      items: ["Catalogs", "Brochures", "Flyers", "Bound Books"],
      link: "/print-solutions",
    },
  ];
  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section with Background Image */}
        <section
          className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden"
          style={{
            backgroundImage: `url('https://creativedigitaluae.com/wp-content/uploads/2023/09/Digital-Printing-Services.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-[rgba(27, 237, 248, 1)] to-[rgb(40,180,190)] "
            >
              Our Services
            </motion.h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200">
              Premium printing & branding solutions designed to make your business stand out.
            </p>
            <a
              href="#contact"
              className="relative mt-8 inline-block px-10 py-2 rounded-2xl font-semibold text-lg 
             text-white bg-gradient-to-r from-[rgb(60,207,215)] to-[rgb(40,180,190)] 
             shadow-lg shadow-[rgb(60,207,215,0.3)] 
             transition-all duration-300 ease-out 
             hover:scale-105 hover:shadow-[0_0_25px_rgb(60,207,215,0.6)]"
            >
              <span className="relative z-10">Explore Services</span>

              {/* Glow Border Effect */}
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                   from-[rgb(60,207,215)] to-[rgb(40,180,190)] opacity-0 
                   blur-xl transition duration-500 group-hover:opacity-100"></span>
            </a>

          </div>
        </section>

        {/* Services Grid (New Design, No Cards) */}
        <section className="py-12 max-w-7xl mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.1, delayChildren: idx * 0.05 }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 120, damping: 10 },
                  },
                }}
                whileHover={{
                  scale: 1.04,
                  y: -3,
                  transition: { type: "spring", stiffness: 250, damping: 12 },
                }}
                className="flex flex-col items-center text-center px-6 py-8 
                   rounded-2xl shadow-sm
                   transition-transform duration-200"
              >
                {/* Icon */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ rotate: 6 }}
                  transition={{ type: "spring", stiffness: 250, damping: 12 }}
                  className="w-16 h-16 flex items-center justify-center rounded-xl 
                     bg-gradient-to-r from-[rgb(60,207,215)] to-[rgb(40,180,190)] 
                     hover:from-[rgb(50,190,200)] hover:to-[rgb(30,160,170)] 
                     transition mb-4 "
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <motion.h3
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="text-lg font-semibold text-gray-900 mb-2 relative inline-block
                     after:content-[''] after:block after:w-0 after:h-[2px]
                     after:bg-gradient-to-r after:from-[rgb(60,207,215)] after:to-[rgb(40,180,190)]
                     after:transition-all after:duration-500 hover:after:w-full"
                >
                  {service.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="text-gray-600 text-sm leading-relaxed mb-2"
                >
                  {service.desc}
                </motion.p>

                {/* Sub-items */}
                {service.items && (
                  <motion.p
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    className="text-gray-500 text-xs italic"
                  >
                    {service.items.join(", ")}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
