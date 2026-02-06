"use client";

import { motion } from "framer-motion";

export default function DirectorMessageSection() {
  return (
    <section className="py-16 md:py-24 bg-white flex justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <div className="max-w-7xl mx-auto px-6">
          <img
            src="/images/sections/templateall.jpg"
            alt="Sambutan Direktur"
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}
