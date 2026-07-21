"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function IntroVideo() {
  return (
    <section
      id="intro"
      className="min-h-screen bg-[#050505] flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-6xl w-full">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[8px] text-gray-400 mb-4">
            Our Story
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            INTRO REEL
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Experience Urban Sync through our cinematic showreel.
            This space is reserved for our official brand intro.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-2xl group"
        >

          {/* Placeholder video */}
          <video
            controls
            poster="/images/placeholder.jpg"
            className="w-full aspect-video object-cover"
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>

          {/* Decorative play icon */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/15 backdrop-blur-md rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
              <Play
                size={42}
                className="text-white fill-white"
              />
            </div>
          </div>

        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-500 mt-8"
        >
          Replace <code>/public/videos/intro.mp4</code> with your final
          Urban Sync reel whenever it's ready.
        </motion.p>

      </div>
    </section>
  );
}
