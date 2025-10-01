import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

function ContactSection() {
  return (
    <div id="contact"
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
          url('https://media.istockphoto.com/vectors/dark-blue-abstract-background-with-triangle-lines-and-light-vector-id1404131751?k=20&m=1404131751&s=612x612&w=0&h=S99P-wQ8YCsjGnnX3tEiid1oIEW4zII3RmZkDqyW_KI=')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl w-full grid md:grid-cols-[6fr_5fr]">
        {/* Left form card */}
        <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black bg-opacity-50  px-16 py-14 mr-5">
          <h2 className="text-2xl font-bold font-aktiv text-black mb-4 leading-snug">
            Let’s Work Together
          </h2>
          <p className="text-sm text-black mb-6 font-aktiv leading-relaxed">
            Have a project in mind? We'd love to hear about it. Contact us today
            and let's create something exceptional together.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="E-mail*"
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              rows={3}
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white text-sm font-semibold tracking-wide py-2 rounded-lg transition hover:bg-gray-800"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right info block */}
        <div className="text-white p-8 ml-6 flex flex-col justify-center">
          <p className="uppercase text-xs tracking-wide text-cyan-400 mb-2">
            Contact Us
          </p>
          <h2 className="text-2xl font-bold mb-3 leading-snug">
            Let’s Create Something Exceptional
          </h2>
          <p className="text-sm text-gray-300 mb-8 leading-relaxed">
            Reach out to us anytime — we’re here to discuss your ideas and help
            bring your vision to life.
          </p>

          <div className="space-y-6 text-gray-200 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="text-cyan-400 w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold text-white text-sm">Email</p>
                <a
                  href="mailto:infotbsoman@gmail.com"
                  className="text-cyan-400 hover:underline text-sm"
                >
                  infotbsoman@gmail.com
                </a>
                <p className="text-xs">www.tbsoman.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-cyan-400 w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold text-white text-sm">Phone</p>
                <a href="tel:+96891232596" className="hover:underline block">
                  +968 91232596
                </a>
                <a href="tel:+96890743018" className="hover:underline block">
                  +968 90743018
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
