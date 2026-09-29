export default function Education() {
  return (
    <section className="border-t border-[#7c3aed]/10 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8b5cf6]/80">
          04 — Education
        </p>

        <div className="mt-12 rounded-2xl border border-[#7c3aed]/10 bg-[#0d0f28] p-8 md:p-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div>
              <p className="text-sm text-slate-500">
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

          <div className="mt-10 border-t border-[#7c3aed]/10 pt-8">
            <p className="text-sm text-[#8b5cf6]/60">
              Areas of interest
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
      </div>
    </section>
  );
}