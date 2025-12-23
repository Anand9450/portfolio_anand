"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-300"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Dark Mode: Animated Blobs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="hidden dark:block absolute top-1/4 left-1/4 w-96 h-96 bg-[#a31f4d]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="hidden dark:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"
        />

        {/* Light Mode: Very Subtle, Clean Animated Blobs */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="dark:hidden absolute top-0 right-0 w-[500px] h-[500px] bg-pink-50/80 rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 2 }}
          className="dark:hidden absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/80 rounded-full blur-3xl opacity-50"
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl text-[#a31f4d] font-bold mb-4 tracking-wider uppercase opacity-90">
            Hello, I&apos;m
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter text-gray-900 dark:text-white leading-tight">
            {personalInfo.name}
          </h1>
          <h3 className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300 mb-8 font-light tracking-wide">
            {personalInfo.title}
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-10 leading-relaxed text-balance">
            {personalInfo.bio}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/projects"
              className="group px-8 py-4 bg-[#a31f4d] text-white rounded-full font-bold transition-all hover:bg-[#8a1a41] hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl shadow-[#a31f4d]/25 ring-2 ring-[#a31f4d]/50 ring-offset-2 ring-offset-white dark:ring-offset-black"
            >
              View Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/Anand Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-all flex items-center gap-2"
            >
              Download Resume
              <Download size={20} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[30px] h-[50px] rounded-3xl border-2 border-gray-400 dark:border-white/20 flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-gray-600 dark:bg-white rounded-full mb-1"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
