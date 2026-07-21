"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        {/* Replace later with your intro video */}
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="uppercase tracking-[8px] text-gray-300 mb-5"
        >
          Creative Media & Digital Solutions
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-8xl font-black leading-none"
        >
          URBAN
          <br />
          SYNC
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
        >
          We build stunning websites, create cinematic videos,
          automate businesses with WhatsApp, and help brands
          grow digitally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
        >

          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center justify-center gap-2 hover:scale-105 transition duration-300"
          >
            Get a Quote
            <ArrowRight size={18} />
          </a>

          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition duration-300"
          >
            View Portfolio
          </a>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#intro"
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <ChevronDown size={34} />
      </motion.a>

    </section>
  );
}
