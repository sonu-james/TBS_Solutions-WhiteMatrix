import React from 'react'
import Navbar from '../components/Navbar'
import { MapPin, Phone, Mail, Clock, User, MessageSquare } from "lucide-react";
import Footer from '../components/Footer';

function Contact() {
  return (
   <div>
       <Navbar/>
       <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-30 flex flex-col">
       {/* HERO */}
       <section className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-10 text-center relative overflow-hidden">
         {/* Decorative blobs */}
         <div className="absolute top-0 left-0 w-40 h-40 bg-orange-400 opacity-20 rounded-full blur-2xl"></div>
         <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-700 opacity-20 rounded-full blur-3xl"></div>
 
         <h1 className="text-5xl font-heading font-semibold drop-shadow-lg">Get in Touch</h1>
         <p className="mt-3  font-body text-gray-100 text-lg">
           We’d love to hear from you 💌
         </p>
       </section>
 
       {/* MAIN CONTENT */}
       <main className="px-20  grid md:grid-cols-2 gap-10 px-6 py-16 flex-1">
         {/* Contact Form */}
         <div className="bg-white shadow rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
           <h2 className="text-2xl font-body font-semibold text-blue-900 mb-6">
             Send Us a Message ✨
           </h2>
           <form className="space-y-5">
             <div className="relative">
               <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
               <input
                 type="text"
                 placeholder="Your Name"
                 className="w-full border font-body border-gray-200 rounded-xl pl-10 p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
               />
             </div>
             <div className="relative">
               <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
               <input
                 type="email"
                 placeholder="Your Email"
                 className="w-full border font-body border-gray-200 rounded-xl pl-10 p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
               />
             </div>
             <div className="relative">
               <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
               <input
                 type="text"
                 placeholder="Subject"
                 className="w-full font-body border border-gray-200 rounded-xl pl-10 p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
               />
             </div>
             <textarea
               rows={5}
               placeholder="Write your message..."
               className="w-full font-body border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
             ></textarea>
             <button
               type="submit"
               className="w-full font-body    bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-900 hover:to-blue-500 text-white font-semibold py-3 rounded-xl shadow hover:shadow-lg transition-all"
             >
               🚀 Send Message
             </button>
           </form>
         </div>
 
         {/* Contact Info */}
         <div className="space-y-6">
           <div className="bg-white shadow rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
             <h2 className="text-2xl font-body font-semibold text-blue-900 mb-6">
               Let’s Connect 🤝
             </h2>
             <ul className="space-y-5 text-gray-700 font-body">
               <li className="flex items-center gap-4">
                 <MapPin className="w-6 h-6 text-orange-500" />
                 <span>
                 Al Nozha Street, Al Maabilah South,
                 PO Box 1455 PC 122
                 Muscat, Oman</span>
               </li>
               <li className="flex items-center gap-4">
                 <Phone className="w-6 h-6 text-orange-500" />
                 <span>+968 91232596, 90743018</span>
               </li>
               <li className="flex items-center gap-4">
                 <Mail className="w-6 h-6 text-orange-500" />
                 <span>infotbsoman@gmail.com</span>
               </li>
               <li className="flex items-center gap-4">
                 <Clock className="w-6 h-6 text-orange-500" />
                 <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
               </li>
             </ul>
           </div>
 
           {/* Cute Map Card */}
           <div className="overflow-hidden rounded-3xl shadow-md border border-gray-100">
             {/* <iframe
               src="https://www.openstreetmap.org/export/embed.html?bbox=76.2673%2C9.9312%2C76.2973%2C9.9512&layer=mapnik"
               className="w-full h-64 border-0"
               loading="lazy"
             ></iframe> */}
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.345591502068!2d58.13700267467661!3d23.627791493473595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de3baa29c08d5%3A0xd53590f01993b546!2sAl%20Nuzha%20St%2C%20Sib%2C%20Oman!5e0!3m2!1sen!2sin!4v1759147132819!5m2!1sen!2sin" className="w-full h-64 border-0" loading="lazy" ></iframe>
           </div>
         </div>
       </main>
     </div>
       <Footer/>
     </div>
  )
}

export default Contact