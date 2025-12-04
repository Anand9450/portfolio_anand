"use client";

import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const Footer = () => {
  return (
    <footer className="py-8 bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Anand9450"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-[#a31f4d] dark:hover:text-[#a31f4d] transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/anand511/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-[#a31f4d] dark:hover:text-[#a31f4d] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/aanandshuklaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-[#a31f4d] dark:hover:text-[#a31f4d] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100015252217739"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-[#a31f4d] dark:hover:text-[#a31f4d] transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
