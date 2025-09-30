import React from "react";

const features = [
    {
        title: "Expertise",
        desc: "Our team consists of highly skilled professionals with years of industry experience.",
    },
    {
        title: "Innovation",
        desc: "We embrace modern technologies to deliver cutting-edge and efficient solutions.",
    },
    {
        title: "Reliability",
        desc: "Count on us for consistent, reliable, and top-quality results every time.",
    },
];

export default function WhyChooseUs() {
    return (
        <section
            id="why-choose-us"
            className="relative w-full py-24 px-6 md:px-16 
                 bg-[url('https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1600&q=80')] 
                 bg-cover bg-center bg-fixed"
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-[rgba(0, 0, 0, 0.51)]"></div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
                    Why Choose Us
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-200">
                    We combine expertise, innovation, and customer-first values to deliver
                    the best solutions tailored to your needs.
                </p>

                {/* Feature Grid */}
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                        <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                            Expertise
                        </h3>
                        <p className="text-gray-200">
                            Our team consists of highly skilled professionals with years of
                            industry experience.
                        </p>
                    </div>

                    <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                        <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                            Innovation
                        </h3>
                        <p className="text-gray-200">
                            We embrace modern technologies to deliver cutting-edge and
                            efficient solutions.
                        </p>
                    </div>

                    <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                        <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                            Reliability
                        </h3>
                        <p className="text-gray-200">
                            Count on us for consistent, reliable, and top-quality results every
                            time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
