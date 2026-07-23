"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import VideoModal from "./VideoModal";

const projects = [
  {
    title: "Restaurant Video",
    category: "Commercial",
    image: "/images/project1.jpg",
    video: "/videos/resturant.mp4",
  },
  {
    title: "Wedding Event",
    category: "Wedding",
    image: "/images/project2.jpg",
    video: "/videos/event.mp4",
  },
  {
    title: "Clothing Store",
    category: "Commercial",
    image: "/images/project3.jpg",
    video: "/videos/clothing.mp4",
  },
  {
    title: "Cosmetics Shop",
    category: "Promotion",
    image: "/images/project4.jpg",
    video: "/videos/cosmetic.mp4",
  },
  {
    title: "Product Promotion",
    category: "Social Media",
    image: "/images/project5.jpg",
    video: "/videos/promotion.mp4",
  },
  {
    title: "Product Commercial",
    category: "Advertisement",
    image: "/images/project6.jpg",
    video: "/videos/project6.mp4",
  },
];

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      <section
        id="portfolio"
        className="bg-[#050505] py-28 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="text-center mb-16"
          >

            <p className="uppercase tracking-[6px] text-gray-400 mb-4">
              Selected Works
            </p>

            <h2 className="text-5xl md:text-7xl font-black">
              OUR PORTFOLIO
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Explore some of our recent creative projects.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, index) => (

              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .7,
                  delay: index * .1,
                }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-neutral-900"
                onClick={() => setSelectedVideo(project.video)}
              >

                <div className="relative">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition" />

                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition">

                      <Play
                        className="text-black ml-1"
                        fill="black"
                        size={30}
                      />

                    </div>

                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">

                    <p className="text-gray-300 text-sm">
                      {project.category}
                    </p>

                    <div className="flex justify-between items-center">

                      <h3 className="text-2xl font-bold">
                        {project.title}
                      </h3>

                      <ArrowUpRight />

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

    </>
  );
}
