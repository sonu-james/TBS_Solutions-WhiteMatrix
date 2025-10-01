'use client';

import { PhoneCall, MailCheck, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white via-gray-200 to-gray-300 text-gray-700 w-full pt-16 pb-8 px-6 md:px-20 border-t border-gray-200">
    <div className="max-w-7xl mx-auto">
        {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Column 1 - Logo + Social */}
        <div>
          <div className="mb-6">
            <img
              src="images/logo2.png"   // file inside public/
              alt="TBS Logo"
              className="w-24 h-auto object-contain"
            />
          </div>

          <h3 className="uppercase text-sm font-semibold mb-4 text-teal-600 tracking-wide">
            On Social Networks
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-teal-600 transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-teal-600 transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-teal-600 transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-teal-600 transition-colors">Twitter</a></li>
          </ul>
        </div>

        {/* Column 2 - Our Services */}
        <div>
          <h3 className="uppercase text-sm font-semibold mb-4 text-teal-600 tracking-wide">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm ">
            <li className='hover:text-teal-500'>Digital Printing</li>
            <li className='hover:text-teal-500' >Screen Printing</li>
            <li className='hover:text-teal-500'>Office Stationery</li>
            <li className='hover:text-teal-500'>Print Solutions</li>
            <li className='hover:text-teal-500'>Corporate Gifts</li>
            <li className='hover:text-teal-500'>Signage Solutions</li>
            <li className='hover:text-teal-500'>Barcode Solutions</li>
          </ul>
        </div>

        {/* Column 3 - Products */}
        <div>
          <h3 className="uppercase text-sm font-semibold mb-4 text-teal-600 tracking-wide">
            Products
          </h3>
          <ul className="space-y-2 text-sm">
            <li className='hover:text-teal-500'>Photocopier Rentals</li>
            <li className='hover:text-teal-500'>Large Format Printers</li>
            <li className='hover:text-teal-500'>Projectors & Video Walls</li>
            <li className='hover:text-teal-500'>Lamination Equipment</li>
            <li className='hover:text-teal-500'>Office Equipment</li>
            <li className='hover:text-teal-500'>Toners & Ink Cartridges</li>
            <li className='hover:text-teal-500'>Binding Machines</li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h3 className="uppercase text-sm font-semibold mb-4 text-teal-600 tracking-wide">
            Get In Touch
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <PhoneCall size={18} className="text-teal-500 mr-3" />
              <span className='hover:text-teal-500'>+968 91232596</span>
            </div>
            <div className="flex items-center">
              <PhoneCall size={18} className="text-teal-500 mr-3" />
              <span className='hover:text-teal-500'>+968 90743018</span>
            </div>
            <div className="flex items-center">
              <MailCheck size={18} className="text-teal-500 mr-3" />
              <span className='hover:text-teal-500'>infotbsoman@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Globe size={18} className="text-teal-500 mr-3" />
              <span className='hover:text-teal-500'>www.tbsoman.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-10"></div>

      {/* Bottom Row */}
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-teal-600 font-medium">True Star Business</span>. All rights reserved.
      </div>
    </div>
    </footer>
  );
}
