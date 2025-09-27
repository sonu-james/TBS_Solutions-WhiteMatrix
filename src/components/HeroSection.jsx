import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://commercialcopymachine.com/wp-content/uploads/2018/12/office-equipment-list.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-5">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Your Trusted Partner in <br /> Office & Printing Solutions
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          From office stationeries to digital printing — we provide complete solutions for your workspace.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
            Explore Services
          </button>
          <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}