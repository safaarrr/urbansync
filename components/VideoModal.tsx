"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  video: string | null;
  onClose: () => void;
}

export default function VideoModal({
  video,
  onClose,
}: VideoModalProps) {
  return (
    <AnimatePresence>

      {video && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .25 }}
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onClose}
        >

          <motion.div
            initial={{ scale: .85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: .85, opacity: 0 }}
            transition={{ duration: .3 }}
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}

            <button
              onClick={onClose}
              className="absolute -top-14 right-0 text-white hover:text-red-500 transition"
            >
              <X size={34} />
            </button>

            {/* Video */}

            <video
              src={video}
              controls
              autoPlay
              playsInline
              className="w-full rounded-2xl shadow-2xl"
            />

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}
