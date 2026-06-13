import Image from "next/image";

export default function SupplyProcess() {
  return (
    <section id="process" className="py-24 bg-[#0f172a] text-slate-100 overflow-hidden">
      {/* Subtle Industrial Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-955 border border-emerald-800/60 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Supply Process
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            From Collection To Industrial Delivery
          </h2>

          <p className="max-w-3xl mx-auto text-base md:text-lg text-slate-400 font-normal leading-relaxed">
            Our integrated supply chain ensures consistent product quality, 
            efficient operations and reliable delivery across heavy manufacturing hubs in India.
          </p>
        </div>

        {/* Process Infographic Container */}
        <div className="bg-slate-900/80 p-3 rounded-md border border-slate-800 shadow-2xl max-w-5xl mx-auto">
          <div className="relative rounded-sm overflow-hidden bg-slate-950 border border-slate-900">
            <Image
              src="/supply-process.png"
              alt="Pathak Biofuels End-to-End Supply Process Infographic"
              width={1600}
              height={1200}
              priority
              className="w-full h-auto opacity-90 object-contain grayscale-[10%] contrast-[105%]"
            />
          </div>
        </div>

        {/* Bottom Technical Metrics/Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          
          <div className="bg-slate-900/40 backdrop-blur-sm p-6 border border-slate-800 rounded-sm hover:border-emerald-800 transition-colors duration-300">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">01 / Rigorous</div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wide">
              Quality Assured
            </h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Tested & laboratory verified parameters for GCV and ash content.
            </p>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-sm p-6 border border-slate-800 rounded-sm hover:border-emerald-800 transition-colors duration-300">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">02 / Scalable</div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wide">
              Bulk Supply
            </h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              High volume continuous manufacturing to meet large plant requirements.
            </p>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-sm p-6 border border-slate-800 rounded-sm hover:border-emerald-800 transition-colors duration-300">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">03 / Logistics</div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wide">
              Pan India Delivery
            </h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Strategic transport network ensuring zero supply-chain downtime.
            </p>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-sm p-6 border border-slate-800 rounded-sm hover:border-emerald-800 transition-colors duration-300">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">04 / Operations</div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wide">
              Enterprise Support
            </h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Dedicated SLA-backed assistance for procurement and scheduling.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}