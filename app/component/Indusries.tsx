import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#0f172a] text-slate-100 overflow-hidden min-h-screen flex items-center">
      {/* Background Subtle Industrial Overlay Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
      
      {/* Structural Glow - Not cartoonish, representing thermal energy */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-28 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT CONTENT - 7 Columns for better readability */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-950 border border-emerald-800/60 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Sustainable Industrial Bio-Coal Solutions
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-none">
              Powering Heavy Industry With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                High-Efficiency Biomass
              </span>
            </h1>

            <p className="max-w-xl text-base md:text-lg text-slate-400 font-normal leading-relaxed">
              Engineered industrial-grade biomass pellets and briquettes. Formulated specifically for maximum thermal output, ultra-low moisture retention, and zero-slagging compliance across manufacturing infrastructure in India.
            </p>

            {/* Premium Solid CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#products"
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold tracking-wide uppercase text-sm transition-all duration-200 shadow-lg shadow-emerald-950/40 rounded-sm"
              >
                Technical Specifications
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border border-slate-700 hover:border-emerald-500 text-slate-200 hover:text-white font-bold tracking-wide uppercase text-sm transition-all duration-200 rounded-sm"
              >
                Procurement & RFQ
              </a>
            </div>

            {/* Industrial Specs / Badges */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 text-sm">▪</span>
                <span className="text-xs font-mono tracking-wider uppercase text-slate-400">High Calorific Value</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 text-sm">▪</span>
                <span className="text-xs font-mono tracking-wider uppercase text-slate-400">Low Ash Slagging</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 text-sm">▪</span>
                <span className="text-xs font-mono tracking-wider uppercase text-slate-400">Pan India Supply Chain</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE INDUSTRIAL FRAME - 5 Columns */}
          <div className="lg:col-span-5 relative">
            {/* Rigid Outer Box Structure representing real industrial machine elements */}
            <div className="relative bg-slate-900/80 p-3 rounded-md border border-slate-800 shadow-2xl">
              <div className="absolute top-3 left-3 flex gap-1.5 z-20">
                <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                <span className="w-2 h-2 rounded-full bg-slate-700"></span>
              </div>
              
              <div className="relative h-[550px] w-full grayscale-[20%] contrast-[110%] rounded-sm overflow-hidden bg-slate-950">
                <Image
                  src="/biomass2.png" 
                  alt="Pathak Biofuels Industrial Pellet Processing Manufacturing Plant"
                  fill
                  priority
                  className="object-cover opacity-85 hover:scale-105 transition-transform duration-1000"
                  sizes="(max-w-7xl) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
              </div>

              {/* Data Floating Tag - Heavy Tech Theme */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 backdrop-blur-md p-4 border border-slate-800 rounded-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-mono text-slate-500">Facility Status</p>
                    <p className="text-sm font-bold tracking-wide uppercase text-white">Continuous Production</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest font-mono text-emerald-400">SGS Certified ✓</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM METRICS BAR - Grid style like an analytics dashboard */}
        <div className="mt-24 border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-8 rounded-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 division-x division-slate-800">
            <div className="text-left md:px-4">
              <p className="text-3xl md:text-4xl font-mono font-black text-white">50K+</p>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-2">MT Annualized Volume</p>
            </div>

            <div className="text-left md:border-l border-slate-800 md:px-6">
              <p className="text-3xl md:text-4xl font-mono font-black text-emerald-500">4,500+</p>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-2">Kcal/Kg Gross GCV</p>
            </div>

            <div className="text-left md:border-l border-slate-800 md:px-6">
              <p className="text-3xl md:text-4xl font-mono font-black text-white">100+</p>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-2">Enterprise Clients</p>
            </div>

            <div className="text-left md:border-l border-slate-800 md:px-6">
              <p className="text-3xl md:text-4xl font-mono font-black text-white">&lt; 5%</p>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-2">Ash Generation Limit</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}