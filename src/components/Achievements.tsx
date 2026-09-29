import { Trophy, Users, Target } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "University Chess",
    description:
      "Active university chess player with experience competing at inter-university level.",
  },
  {
    icon: Users,
    title: "Chess Captain",
    description:
      "Served as a university chess captain, helping coordinate players, events and team activities.",
  },
  {
    icon: Target,
    title: "Continuous Learning",
    description:
      "Continuously improving programming, problem-solving and technical skills through academic and personal projects.",
  },
];

export default function Achievements() {
  return (
    <section className="border-t border-[#7c3aed]/10 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8b5cf6]/80">
          05 — Beyond Code
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          More than just programming.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-[#7c3aed]/10 bg-[#0d0f28] p-8 transition-all duration-300 hover:border-[#8b5cf6]/30"
              >
                <Icon size={28} className="text-[#8b5cf6]" />

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}