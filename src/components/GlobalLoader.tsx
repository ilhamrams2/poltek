"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 0.8 seconds (faster but still gives premium feel)

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Animated Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute -inset-4 rounded-full border-t-2 border-r-2 border-orange-500/50"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute -inset-2 rounded-full border-b-2 border-l-2 border-purple-500/50"
            />

            {/* Logo */}
            <div className="w-24 h-24 relative bg-white rounded-full shadow-2xl flex items-center justify-center z-10 p-4">
              <Image
                src="/logo.svg"
                alt="Loading..."
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-orange-500 font-bold tracking-[0.3em] text-xs animate-pulse"
          >
            SEDANG MEMUAT HALAMAN...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
