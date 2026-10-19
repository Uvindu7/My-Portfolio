export default function About() {
  return (
    <section id="about" className="border-t border-[#7c3aed]/10 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#8b5cf6]/80">
              01 — About
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              A developer who loves solving problems.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-400">
              I&apos;m a Computer Science undergraduate passionate about
              software development, problem solving and emerging technologies.
              I enjoy turning ideas into practical applications and learning
              how systems work behind the scenes.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              My current interests include full-stack development, machine
              learning, data analysis and intelligent systems. I&apos;m
              currently building projects and strengthening my technical skills
              as I prepare for a software engineering internship.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div>
                <p className="text-3xl font-bold text-gradient-purple">3+</p>
                <p className="mt-1 text-sm text-slate-500">
                  Years Learning
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-gradient-purple">5+</p>
                <p className="mt-1 text-sm text-slate-500">
                  Projects
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-gradient-purple">10+</p>
                <p className="mt-1 text-sm text-slate-500">
                  Technologies
                </p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}