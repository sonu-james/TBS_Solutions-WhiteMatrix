import React from "react";

const services = [
  { title: "Office Stationeries", description: "High-quality office supplies to keep your workplace running smoothly." },
  { title: "Office Equipments", description: "Reliable office equipment for productivity and efficiency." },
  { title: "Printing & Solutions", description: "Professional printing solutions tailored to your business needs." },
  { title: "Digital Printing", description: "Modern digital printing services with superior quality." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-10">Our Services</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-10">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}