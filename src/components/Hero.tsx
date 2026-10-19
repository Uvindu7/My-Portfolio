import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

// GitHub & LinkedIn icons — removed from lucide-react v0.294+, using inline SVGs instead
function GithubIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden px-6 pt-24 pb-12"
    >
      {/* Purple glow — bottom center */}
      <div className="pointer-events-none absolute -bottom-60 left-1/2 -z-10 h-175 w-175 -translate-x-1/2 rounded-full bg-[#7c3aed]/10 blur-[140px]" />
      {/* Cyan hint — top right */}
      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-100 w-100 rounded-full bg-[#06b6d4]/5 blur-[100px]" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Left — text content */}
          <div className="max-w-xl">
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#8b5cf6]/80">
              Computer Science Undergraduate
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-gradient-purple">Uvindu.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
              I build modern web applications and software solutions while
              continuously improving my skills in computer science and
              software development.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="btn-glow-purple group flex items-center gap-2 rounded-full bg-[#7c3aed] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#8b5cf6]"
              >
                View Projects
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                className="rounded-full border border-[#7c3aed]/30 px-6 py-3 font-medium text-slate-300 transition-all duration-300 hover:border-[#7c3aed]/70 hover:text-[#a78bfa]"
              >
                Download CV
              </a>
            </div>

            <div className="mt-10 flex gap-5">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 transition-colors duration-300 hover:text-[#8b5cf6]"
              >
                <GithubIcon />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 transition-colors duration-300 hover:text-[#8b5cf6]"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Right — profile image */}
          <div className="relative shrink-0">
            {/* Outer glow ring */}
            <div className="absolute inset-0 -m-4 rounded-full bg-linear-to-br from-[#7c3aed]/40 via-[#06b6d4]/20 to-transparent blur-2xl" />
            {/* Rotating dashed border */}
            <div
              className="absolute inset-0 rounded-full border-2 border-dashed border-[#8b5cf6]/30"
              style={{ animation: "slow-spin 20s linear infinite" }}
            />
            {/* Image container */}
            <div
              className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-[#7c3aed]/50 shadow-[0_0_60px_rgba(124,58,237,0.35)] md:h-80 md:w-80"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Uvindu — profile photo"
                className="h-full w-full object-cover object-top"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 rounded-full bg-linear-to-t from-[#0f0f23]/30 via-transparent to-transparent" />
            </div>
            {/* Small decorative dot orbs */}
            <div className="absolute -right-3 -top-3 h-5 w-5 rounded-full bg-[#7c3aed] shadow-[0_0_12px_rgba(124,58,237,0.8)]" />
            <div className="absolute -bottom-3 -left-3 h-3 w-3 rounded-full bg-[#06b6d4] shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#7c3aed80] transition-colors hover:text-[#8b5cf6]"
        >
          <ArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}