'use client';

import { Globe, MailCheck, Network, NetworkIcon, PhoneCall, WebhookIcon } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTripadvisor, FaPinterestP, FaInternetExplorer } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-r from-blue-700 to-blue-900  text-gray-200 mt-10 w-full  pt-10 pb-6 px-20 md:px-25 overflow-hidden flex-wrap">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:m-15">
        {/* Column 1 - Logo + Address */}
        <div className="col-span-1 mb-3">
           {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white text-blue-900 flex items-center justify-center font-bold rounded-lg">
                TBS
              </div>
              <span className="font-bold text-lg">True Star Business</span>
            </div>
            <p className="text-gray-300 text-sm font-bold">
              Delivering premium printing and office supplies with speed and quality since 2025.
            </p>
          </div>
        </div>

        {/* Column 2 - Services Offered */}
        <div className='col-span-1 ms-10'>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
              <ul className="space-y-1 text-md text-white-600 ">
                <li className='hover:text-white transition-colors'>HOME</li>
                <li className='hover:text-white transition-colors'>ABOUT US</li>
                <li className='hover:text-white transition-colors'>SERVICES</li>
                <li className='hover:text-white transition-colors'>CONTACTS</li>
              </ul>
    
            
        </div>
        <div className='col-span-1'>
          <h3 className="text-lg font-semibold text-white mb-3">Products</h3>
           <ul className="space-y-2 text-md text-white-600 ">
                <li className='hover:text-white transition-colors'>OFFICE STATIONERIES</li>
                <li className='hover:text-white transition-colors'>OFFICE EQUIPMENTS</li>
                <li className='hover:text-white transition-colors'>PRINTING & SOLUTIONS</li>
                <li className='hover:text-white transition-colors'>DIGITIL PRINTING</li>
              </ul>
        </div>
        {/* Column 3 - Contact */}
        <div className='col-span-1'>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
           <div className='flex mb-4'> <MailCheck/><span className='ms-2'> infotbsoman@gmail.com</span></div>
           <div className='flex mb-4'> <PhoneCall/><span className='ms-2'> +968 91232596, 90743018</span></div>
          <div className='flex mb-4'> <Globe/><span className='ms-2'> www.tbsoman.com</span></div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white-700 my-6"></div>

      {/* Bottom Row - Social Icons */}
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-sky-400 transition-colors"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 transition-colors"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 transition-colors"
        >
          <FaInstagram  />
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors"
        >
          <FaPinterestP className="text-white" />
        </a>
        
      </div>
<div className='flex justify-center  mt-8'>
              <p>&copy; {new Date().getFullYear()} Office Solutions. All rights reserved.</p>
  
</div>
    </footer>
  );
}
