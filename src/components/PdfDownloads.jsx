'use client';

import { Download, Eye } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PdfDownloads() {
  const pdfs = [
    {
      title: 'Company Profile',
      file: '/pdfs/TBSProfile.pdf',
      cover: 'https://images.pexels.com/photos/8872719/pexels-photo-8872719.jpeg',
    },
    {
      title: 'Gift Sets Catalogue',
      file: '/pdfs/Gift.pdf',
      cover: 'https://www.shikkmo.com/storage/new-products-uploads/bamboogiftset.jpg',
    },
    {
      title: 'Gift Box Catalogue',
      file: '/pdfs/GiftBoxCatalog.pdf',
      cover: 'https://static.vecteezy.com/system/resources/previews/011/720/981/original/black-gift-boxes-with-bow-free-png.png',
    },
    {
      title: 'Gift M Catalogue',
      file: '/pdfs/Giftm.pdf',
      cover: 'https://littletimber.com.au/wp-content/uploads/2023/06/LT0623-80-1-1200x1200.jpg',
    },
    {
      title: 'HAK Catalogue',
      file: '/pdfs/HAK.pdf',
      cover: 'https://images.pexels.com/photos/8872719/pexels-photo-8872719.jpeg',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation Variants
  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? -80 : 80,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <>
      <Navbar />
      <section className="w-full bg-[url('https://images.pexels.com/photos/187334/pexels-photo-187334.jpeg')] bg-cover bg-center bg-fixed py-20 px-6 md:px-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-700/60 via-white-800/60 to-cyan-900/30"></div>
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-14 drop-shadow-lg">
            📄 Download Our Resources
          </h2>

          <div className="flex flex-col gap-12">
            {pdfs.map((pdf, index) => (
              <motion.div
                key={index}
                className={`flex flex-col sm:flex-row ${
                  index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
                }`}
                custom={index % 2 === 0 ? 'left' : 'right'} // controls direction
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div
                  className={`w-full sm:w-1/2 ${
                    index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'
                  }`}
                >
                  {/* Card */}
                  <div className="bg-black/90 border border-white/20 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    {/* Cover */}
                    <div className="w-full h-44 overflow-hidden">
                      <img
                        src={pdf.cover}
                        alt={pdf.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        {pdf.title}
                      </h3>
                      <div className="flex gap-3">
                        <a
                          href={pdf.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-3 text-sm flex items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 rounded-lg hover:opacity-90 transition shadow-md"
                        >
                          <Eye className="w-4 h-4 mr-1" /> Preview
                        </a>
                        <a
                          href={pdf.file}
                          download
                          className="flex-1 px-3 text-sm flex items-center justify-center border border-cyan-400 text-cyan-300 py-2 rounded-lg hover:bg-cyan-500 hover:text-white transition shadow-md"
                        >
                          <Download className="w-4 h-4 mr-1" /> Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
