"use client";

import { motion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";

const posts = [
  "/images/insta1.jpg",
  "/images/insta2.jpg",
  "/images/insta3.jpg",
  "/images/insta4.jpg",
  "/images/insta5.jpg",
  "/images/insta6.jpg",
];

export default function InstagramSection() {
  return (
    <section
      id="instagram"
      className="bg-[#050505] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-gray-400 mb-4">
            Follow Our Journey
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            INSTAGRAM
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Behind the scenes, client work, reels, and creative moments from Urban Sync.
          </p>
        </motion.div>

        {/* Profile */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">

          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
              <Instagram size={34} />
            </div>

            <div>
              <h3 className="text-2xl font-bold">@urbansync</h3>
              <p className="text-gray-400">
                Creative Media & Digital Solutions
              </p>
            </div>
          </div>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-semibold hover:scale-105 transition"
          >
            Follow
            <ArrowUpRight size={18} />
          </a>

        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {posts.map((post, index) => (
            <motion.div
              key={post}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={post}
                alt={`Instagram post ${index + 1}`}
                className="w-full aspect-square object-cover transition duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
