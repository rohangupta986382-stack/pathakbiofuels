export default function WhyChooseUs() {
  const features = [
    {
      title: "High GCV Fuel",
      description:
        "Premium biomass pellets and briquettes engineered to deliver superior calorific value and maximum thermal efficiency.",
    },
    {
      title: "Low Ash Content",
      description:
        "Cleaner combustion with minimal ash generation, reducing maintenance costs and improving operational efficiency.",
    },
    {
      title: "Consistent Quality",
      description:
        "Strict quality control processes ensure uniform product specifications across every batch.",
    },
    {
      title: "Pan India Supply Network",
      description:
        "Reliable logistics and transportation network supporting industrial clients across India.",
    },
    {
      title: "Bulk Supply Capacity",
      description:
        "Capability to fulfill large-scale industrial requirements with uninterrupted supply commitments.",
    },
    {
      title: "Dedicated Customer Support",
      description:
        "Professional assistance for procurement planning, technical guidance and after-sales support.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 text-slate-800 overflow-hidden relative border-t border-slate-200">
      {/* Light Industrial Engineering Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            Why Choose Pathak Biofuels
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
            Trusted Biomass Energy Partner
          </h2>

          <p className="max-w-3xl mx-auto text-base md:text-lg text-slate-600 font-normal leading-relaxed">
            Delivering sustainable fuel solutions through quality,
            reliability and industrial-scale supply capabilities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white p-8 border border-slate-200 rounded-sm hover:border-emerald-600 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-slate-50 border border-slate-200 text-emerald-700 font-mono flex items-center justify-center font-bold text-sm tracking-widest group-hover:border-emerald-600 group-hover:bg-emerald-50 transition-colors duration-300">
                0{index + 1}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900 uppercase tracking-wide">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Dashboard Block */}
        <div className="mt-20 border border-slate-200 bg-white p-10 rounded-sm shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-mono font-black text-emerald-700">
                4500+
              </h3>
              <p className="mt-2 text-xs uppercase tracking-wider font-bold text-slate-500">
                Maximum GCV (Kcal/Kg)
              </p>
            </div>

            <div className="md:border-l border-slate-200">
              <h3 className="text-3xl md:text-4xl font-mono font-black text-slate-900">
                LOW ASH
              </h3>
              <p className="mt-2 text-xs uppercase tracking-wider font-bold text-slate-500">
                Cleaner Combustion
              </p>
            </div>

            <div className="md:border-l border-slate-200">
              <h3 className="text-3xl md:text-4xl font-mono font-black text-slate-900">
                PAN INDIA
              </h3>
              <p className="mt-2 text-xs uppercase tracking-wider font-bold text-slate-500">
                Supply Network
              </p>
            </div>

            <div className="md:border-l border-slate-200">
              <h3 className="text-3xl md:text-4xl font-mono font-black text-slate-900">
                24/7
              </h3>
              <p className="mt-2 text-xs uppercase tracking-wider font-bold text-slate-500">
                Enterprise Support
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}