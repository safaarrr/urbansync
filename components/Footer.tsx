"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Github,
  ArrowUpRight,
  ChevronUp,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] border-t border-white/10">

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-16 text-center"
        >

          <p className="uppercase tracking-[6px] text-gray-400 mb-4">
            Ready to Grow?
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            LET'S BUILD
            <br />
            SOMETHING AMAZING
          </h2>

          <p className="mt-8 text-gray-400 max-w-2xl mx-auto">
            Whether it's a website, a cinematic video,
            branding, or automation —
            Urban Sync is ready to help your business stand out.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-10 rounded-full bg-white text-black px-8 py-4 font-semibold hover:scale-105 transition"
          >
            Start Your Project
            <ArrowUpRight size={18} />
          </a>

        </motion.div>

      </section>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">

        <div>
          <h3 className="text-3xl font-black">
            URBAN SYNC
          </h3>

          <p className="text-gray-400 mt-3 max-w-sm">
            Creative Media & Digital Solutions
          </p>
        </div>

        <div className="flex gap-6">

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Instagram />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Linkedin />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Github />
          </a>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © {year} Urban Sync. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-sm hover:text-white transition"
          >
            Back to Top
            <ChevronUp size={16} />
          </a>

        </div>

      </div>

    </footer>
  );
}
