import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  imageFit?: "cover" | "contain";
  github?: string;
  frontend?: string;
  backend?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "LegalEase",
    description:
      "A legal consultation platform connecting clients with verified lawyers through online consultations, appointment booking and secure payments.",
    technologies: [
      "React",
      "PHP",
      "MySQL",
      "Stripe",
      "REST API",
    ],
    image: "/projects/legalease.png",
    frontend: "https://github.com/Uvindu7/LeagleEase_Frontend",
    backend: "https://github.com/Uvindu7/LeagleEase_Backend",
    demo: "#",
  },
  {
    number: "02",
    title: "Liyara",
    description:
      "Liyara is an online fashion store with product browsing, cart management, secure checkout, order tracking, and a 3D virtual fitting studio. It also includes an admin dashboard for managing products, orders, users, reviews, and sales.",
    technologies: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Superbase",
      "PostgreSQL",
      "Stripe"
    ],
    image: "/projects/liyara.png",
    frontend: "https://github.com/Uvindu7/3.2-Project-Front-End",
    backend: "https://github.com/Uvindu7/3.2-Project-Back-End",
    demo: "#",
  },
  {
    number: "03",
    title: "JungleEye Safari",
    description:
      "A modern tourism website built to showcase safari experiences, destinations and services using a modern full-stack architecture.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
    image: "/projects/jungleeye.png",
    demo: "#",
  },
  {
    number: "04",
    title: "Alien Shooter",
    description:
      "Alien Shooter is a 2D Unity Game developed using Unity and C#. Features interactive gameplay, player movement, obstacle navigation, and custom game mechanics, demonstrating practical skills in game development and programming.",
    technologies: [
      "Unity Engine",
      "C#",
    ],
    image: "/projects/alien shooter.jpeg",
    imageFit: "contain",
    github: "https://github.com/Uvindu7/Space_Shooter",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-[#7c3aed]/10 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8b5cf6]/80">
          03 — Projects
        </p>

        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-4xl font-bold">
            Things I&apos;ve built.
          </h2>

          <a
            href="https://github.com/Uvindu7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-[#a78bfa]"
          >
            More on GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-16 space-y-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-[#7c3aed]/10 bg-[#0d0f28] transition-all duration-300 hover:border-[#8b5cf6]/30"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-video md:aspect-auto md:h-full min-h-65 overflow-hidden bg-[#111338] flex items-center justify-center">
                  {project.imageFit === "contain" ? (
                    <>
                      <img
                        src={project.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full object-cover blur-2xl opacity-35 scale-125 pointer-events-none"
                      />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="relative z-10 max-h-full md:max-h-75 max-w-full object-contain p-4 md:p-6 drop-shadow-2xl transition duration-500 group-hover:scale-105"
                      />
                    </>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="text-sm text-[#8b5cf6]/50">
                    {project.number}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-[#7c3aed]/8 border border-[#7c3aed]/15 px-3 py-1.5 text-xs text-slate-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium"
                      >
                        <FaGithub size={17} />
                        GitHub Repository
                      </a>
                    )}

                    {project.frontend && (
                      <a
                        href={project.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium"
                      >
                        <FaGithub size={17} />
                        Frontend
                      </a>
                    )}

                    {project.backend && (
                      <a
                        href={project.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium"
                      >
                        <FaGithub size={17} />
                        Backend
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white"
                      >
                        Live Demo
                        <ArrowUpRight size={17} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}