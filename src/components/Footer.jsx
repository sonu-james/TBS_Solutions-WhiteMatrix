'use client';

import { Globe, MailCheck, Network, NetworkIcon, PhoneCall, WebhookIcon } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTripadvisor, FaPinterestP, FaInternetExplorer } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="  bg-gradient-to-r from-[rgb(60,207,215)] to-[rgb(40,180,190)] 
                         hover:from-[rgb(50,190,200)] hover:to-[rgb(30,160,170)] text-gray-600  w-full  pt-10 pb-6 px-20 md:px-25 overflow-hidden flex-wrap">
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
              <span className="font-bold text-lg text-white">True Star Business</span>
            </div>
            <p className="text-gray-500 text-sm  hover:text-white">
              Delivering premium printing and office supplies with speed and quality since 2025.
            </p>
          </div>
        </div>

        {/* Column 2 - Services Offered */}
        <div className='col-span-1 md:ms-10'>
            <h3 className="text-lg font-semibold text-white mb-3">Our Services</h3>
              <ul className="space-y-2 text-md text-white-600 ">
                <li className='hover:text-white transition-colors'>Digital Printing</li>
                <li className='hover:text-white transition-colors'>Screen Printing</li>
                <li className='hover:text-white transition-colors'>Office Stationery</li>
                <li className='hover:text-white transition-colors'>Print Solutions</li>
                <li className='hover:text-white transition-colors'>Corporate Gifts</li>
                <li className='hover:text-white transition-colors'>Signage Solutions</li>
                <li className='hover:text-white transition-colors'>Barcode Solutions</li>
              </ul>
    
            
        </div>
        <div className='col-span-1'>
          <h3 className="text-lg font-semibold text-white mb-3">Products</h3>
           <ul className="space-y-2 text-md text-white-600 ">
                <li className='hover:text-white transition-colors'>Photocopier Rentals</li>
                <li className='hover:text-white transition-colors'>Large Format Printers</li>
                <li className='hover:text-white transition-colors'>Projectors & Video Walls</li>
                <li className='hover:text-white transition-colors'>Lamination Equipment</li>
                <li className='hover:text-white transition-colors'>Office Equipment</li>
                <li className='hover:text-white transition-colors'>Toners & Ink Cartridges</li>
                <li className='hover:text-white transition-colors'>Binding Machines</li>
              </ul>
        </div>
        {/* Column 3 - Contact */}
        <div className='col-span-1'>
          <h3 className="text-lg font-semibold text-white mb-3">Get In Touch</h3>
           <div className='flex mb-4 hover:text-white'> <MailCheck/><span className='ms-2'> infotbsoman@gmail.com</span></div>
           <div className='flex mb-4 hover:text-white'> <PhoneCall/><span className='ms-2'> +968 91232596, 90743018</span></div>
          <div className='flex mb-4 hover:text-white'> <Globe/><span className='ms-2'> 
            <a
                    href="https://www.tbsoman.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-700 hover:underline"
                  >
                    www.tbsoman.com
                  </a></span></div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white-700 my-6"></div>

      {/* Bottom Row - Social Icons */}
      {/* <div className="flex justify-center space-x-4 mt-4">
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
        
      </div> */}
<div className='flex justify-center  mt-8'>
              <p>&copy; {new Date().getFullYear()} Office Solutions. All rights reserved.</p>
  
</div>
    </footer>
  );
}
