"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-[#a31f4d]">Certifications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development achievements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover:border-[#a31f4d]/50 transition-all duration-300 hover:shadow-lg flex flex-col h-full group"
            >
              {/* Image Section */}
              <div className="relative h-48 w-full bg-gray-100 dark:bg-white/5 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                    View Certificate
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-[#a31f4d]">
                    <Award size={16} />
                    <span>{cert.issuer}</span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2" title={cert.title}>
                  {cert.title}
                </h3>

                {cert.credentialId && (
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 font-mono">
                    ID: {cert.credentialId.slice(0, 8)}...
                  </div>
                )}

                {/* Skills Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-1 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-md border border-gray-100 dark:border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-[10px] px-2 py-1 bg-gray-50 dark:bg-white/5 text-gray-500 rounded-md">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
