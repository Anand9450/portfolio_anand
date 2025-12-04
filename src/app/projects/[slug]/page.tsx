import { projects } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, CheckCircle2, AlertTriangle } from "lucide-react";

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 container mx-auto">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft size={20} /> Back to Projects
      </Link>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-[#a31f4d]" /> Key Features
            </h2>
            <ul className="grid gap-4">
              {project.keyFeatures.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5"
                >
                  <span className="w-1.5 h-1.5 bg-[#a31f4d] rounded-full mt-2.5 shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The Challenge */}
          <div className="bg-[#a31f4d]/5 border border-[#a31f4d]/20 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertTriangle className="text-[#a31f4d]" /> The Challenge
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Tech Stack */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-black/50 border border-white/10 rounded-lg text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white mb-2">Project Links</h3>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-4 py-3 bg-white/5 hover:bg-[#a31f4d] border border-white/10 rounded-xl text-white transition-all group"
              >
                <span className="flex items-center gap-2">
                  <Github size={20} /> GitHub Repo
                </span>
                <ExternalLink size={16} className="opacity-50 group-hover:opacity-100" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-4 py-3 bg-white/5 hover:bg-[#a31f4d] border border-white/10 rounded-xl text-white transition-all group"
              >
                <span className="flex items-center gap-2">
                  <ExternalLink size={20} /> Live Demo
                </span>
                <ExternalLink size={16} className="opacity-50 group-hover:opacity-100" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
