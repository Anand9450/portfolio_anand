"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Calendar, Send } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-black/30 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in <span className="text-[#a31f4d]">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss new opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#a31f4d]/10 rounded-lg text-[#a31f4d]">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">{personalInfo.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#a31f4d]/10 rounded-lg text-[#a31f4d]">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">{personalInfo.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#a31f4d]/10 rounded-lg text-[#a31f4d]">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Birthday</h3>
                <p className="text-gray-600 dark:text-gray-400">December 13</p>
              </div>
            </div>

            <div className="w-full h-64 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 mt-6 shadow-lg dark:shadow-none">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30766738.64414546!2d60.94602768393532!3d19.690604856037097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1716300000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="dark:invert dark:hue-rotate-180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              <input type="hidden" name="access_key" value="d3c84d0f-fad0-4429-8b69-0bc4b38b2d1b" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-[#a31f4d] focus:ring-1 focus:ring-[#a31f4d] text-gray-900 dark:text-white transition-all duration-300 hover:border-[#a31f4d]/50"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-[#a31f4d] focus:ring-1 focus:ring-[#a31f4d] text-gray-900 dark:text-white transition-all duration-300 hover:border-[#a31f4d]/50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-[#a31f4d] focus:ring-1 focus:ring-[#a31f4d] text-gray-900 dark:text-white transition-all duration-300 hover:border-[#a31f4d]/50 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#a31f4d] hover:bg-[#8a1a41] text-white rounded-lg font-medium transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-[#a31f4d]/20"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
