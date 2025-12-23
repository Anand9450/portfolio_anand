"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Filter } from "lucide-react";
import { projects, Project } from "@/data/portfolio";

const ProjectsPage = () => {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "AI/ML", "Full Stack", "Web Dev", "Tools"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-[#a31f4d]">Projects</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A showcase of my technical journey, featuring complex systems in AI/ML, Full Stack Development, and more.
        </p>
      </motion.div>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border transition-all ${filter === cat
              ? "bg-[#a31f4d] border-[#a31f4d] text-white"
              : "bg-white/5 border-white/10 text-gray-400 hover:border-[#a31f4d]/50 hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#a31f4d]/50 transition-all duration-300 flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#a31f4d]/10"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                {project.category}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#a31f4d] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 flex-1">
                {project.tagline}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-white/5 rounded text-gray-500 border border-white/5">
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 text-[#a31f4d] font-medium hover:gap-3 transition-all"
              >
                View Case Study <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
