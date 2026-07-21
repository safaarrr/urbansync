"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Video,
  Smartphone,
  Brush,
  ArrowRight,
  Camera,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    description:
      "Modern, responsive and high-performance websites for businesses and startups.",
    icon: Globe,
  },
  {
    title: "Video Production",
    description:
      "Professional commercials, promotional videos, reels and cinematic shoots.",
    icon: Camera,
  },
  {
    title: "Video Editing",
    description:
      "High-quality editing, motion graphics and social media content creation.",
    icon: Video,
  },
  {
    title: "WhatsApp Automation",
    description:
      "Automate customer support, bookings, replies and lead generation.",
    icon: Smartphone,
  },
  {
    title: "Branding",
    description:
      "Logos, brand identity, business profiles and digital assets.",
    icon: Brush,
  },
  {
    title: "Custom Solutions",
    description:
      "Need something unique? We build tailored digital solutions for your business.",
    icon: ArrowRight,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-gray-400 mb-4">
            What We Do
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            OUR SERVICES
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Everything your business needs to build a strong digital presence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition-all duration-300 hover:border-white/30 hover:bg-white/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {service.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold group-hover:gap-4 transition-all duration-300">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
