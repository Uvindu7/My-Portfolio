"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#7c3aed]/15 bg-[#07081a]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight"
        >
          U<span className="text-[#8b5cf6]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#a78bfa]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/cv.pdf"
            target="_blank"
            className="rounded-full border border-[#7c3aed]/30 px-5 py-2 text-sm text-slate-300 transition-all duration-200 hover:border-[#8b5cf6] hover:text-[#a78bfa]"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#7c3aed]/15 bg-[#0d0f28] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 transition-colors hover:text-[#a78bfa]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/cv.pdf"
              target="_blank"
              className="rounded-lg bg-[#7c3aed] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#8b5cf6] transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
