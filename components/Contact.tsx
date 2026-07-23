"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black py-24 px-6"
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
            Let's Work Together
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            CONTACT US
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 flex gap-4">
              <Phone />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400">+91 9847799791</p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 flex gap-4">
              <Mail />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">urbansyncmarketing@gmail.com</p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 flex gap-4">
              <MapPin />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">Thiruvananthapuram, Kerala</p>
              </div>
            </div>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-green-500 py-4 font-semibold hover:bg-green-600 transition"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>

          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-5"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl bg-black border border-white/10 p-4 outline-none focus:border-white"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl bg-black border border-white/10 p-4 outline-none focus:border-white"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full rounded-xl bg-black border border-white/10 p-4 outline-none focus:border-white"
            />

            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full rounded-xl bg-black border border-white/10 p-4 outline-none focus:border-white resize-none"
            />

            <button
              className="w-full rounded-full bg-white text-black py-4 font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
            >
              Send Message
              <Send size={18} />
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}
