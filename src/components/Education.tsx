export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-[#7c3aed]/10 px-6 py-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8b5cf6]/80">
          04 — Education
        </p>

        <div className="mt-12 space-y-6">

          {/* Bachelor's Degree */}
          <div className="rounded-2xl border border-[#7c3aed]/10 bg-[#0d0f28] p-8 md:p-10">
            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div>
                <p className="text-sm text-[#8b5cf6]/60">
                  Undergraduate Degree
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Bachelor&apos;s Degree in Computer Science
                </h2>

                <p className="mt-2 text-slate-400">
                  University Student
                </p>
              </div>

              <p className="text-sm text-gray-500">
                2023 — Present
              </p>
            </div>

            <div className="mt-8 border-t border-[#7c3aed]/10 pt-6">
              <p className="text-sm text-[#8b5cf6]/60">
                Areas of Interest
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "Software Engineering",
                  "Machine Learning",
                  "Data Science",
                  "Networks",
                  "Intelligent Systems",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#7c3aed]/25 bg-[#7c3aed]/8 px-4 py-2 text-sm text-slate-400 transition-colors hover:border-[#8b5cf6]/60 hover:text-[#a78bfa]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Diploma */}
          <div className="rounded-2xl border border-[#7c3aed]/10 bg-[#0d0f28] p-8 md:p-10">
            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div>
                <p className="text-sm text-[#8b5cf6]/60">
                  Diploma
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Diploma in Information Technology
                </h2>

                <p className="mt-2 text-slate-400">
                  IDM Southern Campus
                </p>
              </div>

              <p className="text-sm text-gray-500">
                Completed
              </p>
            </div>

            <div className="mt-8 border-t border-[#7c3aed]/10 pt-6">
              <p className="max-w-2xl text-sm leading-7 text-slate-500">
                Developed foundational knowledge and practical skills in
                information technology, computing, and software development.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
