"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹4,999+",
    description: "Perfect for small businesses.",
    features: [
      "1 Promotional Video",
      "Basic Video Editing",
      "1 Page Website",
      "Basic Support",
    ],
  },
  {
    name: "Business",
    price: "Custom",
    featured: true,
    description: "Best for growing brands.",
    features: [
      "Professional Video Shoot",
      "Premium Editing",
      "Multi-page Website",
      "WhatsApp Automation",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Let's Talk",
    description: "Complete digital solutions.",
    features: [
      "Unlimited Consultation",
      "Custom Web Development",
      "Brand Identity",
      "Marketing Strategy",
      "Dedicated Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-gray-400 mb-4">
            Pricing
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            SIMPLE PRICING
          </h2>

          <p className="text-gray-400 mt-6">
            Flexible plans tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`rounded-3xl border p-8 transition-all duration-300 ${
                plan.featured
                  ? "border-white bg-white text-black"
                  : "border-white/10 bg-white/5 text-white"
              }`}
            >
              <h3 className="text-3xl font-bold">{plan.name}</h3>

              <p className="text-4xl font-black mt-4">
                {plan.price}
              </p>

              <p className="mt-4 opacity-80">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full py-4 rounded-full font-semibold transition ${
                  plan.featured
                    ? "bg-black text-white hover:bg-neutral-800"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
