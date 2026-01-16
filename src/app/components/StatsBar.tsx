import { CounterStat } from "@/app/components/CounterStat";

export function StatsBar() {
  return (
    <section className="py-16 bg-black/30 border-y border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <CounterStat
            value={150}
            suffix="+"
            label="Licensed Providers"
            description="Banks, SACCOs, Insurers"
            color="from-blue-400 to-cyan-500"
          />
          <CounterStat
            value={95}
            suffix="%"
            label="Match Accuracy"
            description="AI-driven recommendations"
            color="from-purple-400 to-pink-500"
          />
          <CounterStat
            value={2500000}
            prefix="KES "
            label="Avg. Capital Matched"
            description="Per MSME monthly"
            color="from-green-400 to-emerald-500"
          />
          <CounterStat
            value={100}
            suffix="%"
            label="Non-Custodial"
            description="We never hold your money"
            color="from-[#D4A43B] to-yellow-500"
          />
        </div>
      </div>
    </section>
  );
}
