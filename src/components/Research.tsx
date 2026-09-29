import { ArrowUpRight } from "lucide-react";

export default function Research() {
  return (
    <section
      id="research"
      className="border-t border-[#7c3aed]/10 px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8b5cf6]/80">
          06 — Research
        </p>

        <div className="mt-12 rounded-2xl border border-[#7c3aed]/10 bg-[#0d0f28] p-8 md:p-12">
          <p className="text-sm text-[#8b5cf6]/60">
            Current Research Interest
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-bold md:text-4xl">
            Router-Based Network Traffic Analysis for Identifying
            Excessive Internet Usage Patterns Among University Students
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-slate-400">
            Exploring how network traffic data can be analyzed to identify
            internet usage patterns and provide useful insights for university
            network environments.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Network Analysis",
              "Data Analysis",
              "Machine Learning",
              "Intelligent Systems",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#7c3aed]/25 bg-[#7c3aed]/8 px-4 py-2 text-sm text-slate-400 transition-colors hover:border-[#8b5cf6]/60 hover:text-[#a78bfa]"
              >
                {tag}
              </span>
            ))}
          </div>

          <button className="mt-10 flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-[#a78bfa]">
            Research Details
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}