"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = navLinks.map(link => link.name.toLowerCase().replace(" ", "-"));
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section === "home" ? "home" : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Offset for navbar height
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }

      // Improve hit detection for bottom of page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        current = "contact";
      }

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // navLinks dependency removed to avoid re-bind, static list

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Profiles", href: "/#coding-profiles" },
    { name: "Certifications", href: "/#certifications" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 shadow-sm dark:shadow-none"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="#home" className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
            Anand<span className="text-[#a31f4d]">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const sectionName = link.name.toLowerCase().replace(" ", "-");
              const isActive = activeSection === (sectionName === "home" ? "home" : sectionName);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors relative group ${isActive
                      ? "text-[#a31f4d]"
                      : "text-gray-600 dark:text-gray-300 hover:text-[#a31f4d] dark:hover:text-[#a31f4d]"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#a31f4d] rounded-full"
                    />
                  )}
                  {!isActive && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#a31f4d] rounded-full group-hover:w-full transition-all duration-300" />
                  )}
                </Link>
              );
            })}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-gray-300 hover:text-[#a31f4d] dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10"
          >
            <div className="px-4 pt-2 pb-8 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => {
                const sectionName = link.name.toLowerCase().replace(" ", "-");
                const isActive = activeSection === (sectionName === "home" ? "home" : sectionName);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium py-2 ${isActive ? "text-[#a31f4d]" : "text-gray-900 dark:text-gray-300 hover:text-[#a31f4d]"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
