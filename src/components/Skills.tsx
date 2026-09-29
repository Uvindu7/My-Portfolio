const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "PHP", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Django", "Django REST Framework", "PHP", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "Supabase", "Prisma"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-[#7c3aed]/10 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8b5cf6]/80">
          02 — Skills
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Technologies I work with.
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[#7c3aed]/15 bg-[#7c3aed]/10 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-[#0d0f28] p-8 transition-colors duration-300 hover:bg-[#111338]"
            >
              <h3 className="text-xl font-semibold">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#7c3aed]/25 bg-[#7c3aed]/8 px-4 py-2 text-sm text-slate-400 transition-colors hover:border-[#8b5cf6]/60 hover:text-[#a78bfa]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}