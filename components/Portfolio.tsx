"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Restaurant Promo",
    category: "Commercial Video",
    image: "/images/project1.jpg",
  },
  {
    title: "Corporate Website",
    category: "Website Development",
    image: "/images/project2.jpg",
  },
  {
    title: "Instagram Reel",
    category: "Video Editing",
    image: "/images/project3.jpg",
  },
  {
    title: "WhatsApp Automation",
    category: "Business Automation",
    image: "/images/project4.jpg",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    image: "/images/project5.jpg",
  },
  {
    title: "E-Commerce Store",
    category: "Web Development",
    image: "/images/project6.jpg",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#050505] py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="uppercase tracking-[6px] text-gray-400 mb-4">
            Selected Works
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            OUR PORTFOLIO
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Every project is crafted with creativity,
            strategy and attention to detail.
          </p>

        </motion.div>

        {/* Portfolio Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .1,
                duration: .7,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 cursor-pointer"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-8">

                <p className="text-gray-300">
                  {project.category}
                </p>

                <div className="flex justify-between items-center mt-2">

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    className="group-hover:rotate-45 transition"
                  />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
