import { ImageIcon } from "lucide-react";
import Image from "next/image";

export default function Leadership() {
  const leaders = [
    {
      name: "Ram Omar",
      role: "Managing Director",
      description:
        "Provides strategic direction and oversees long-term business growth initiatives.",
    },
    {
      name: "Ashutosh Pathak",
      image: "/ashu1.jpeg", // यहाँ 'Image' को small 'image' कर दिया है
      role: "Director",
      phone: "+91 62698 31886",
      description:
        "Leads business development, procurement, industrial partnerships and expansion activities.",
    },
    {
      name: "Harshita Tiwari",
      role: "Operational Head",
      description:
        "Manages operational excellence, quality assurance and supply chain coordination.",
    },
  ];

  return (
    <section
      id="leadership"
      className="py-24 bg-[#0f172a] text-slate-100 overflow-hidden relative"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Leadership Team
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Meet Our Leadership
          </h2>

          <p className="max-w-3xl mx-auto text-base md:text-lg text-slate-400 leading-relaxed">
            Experienced professionals committed to delivering sustainable energy
            solutions and long-term industrial value.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="flex flex-col justify-between bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-2xl hover:border-emerald-700 transition-all duration-300 group"
            >
              <div>
                {/* Image / Placeholder Container */}
                <div className="flex justify-center pt-8">
                  <div className="w-44 h-44 rounded-xl border-2 border-dashed border-slate-600 bg-slate-800/50 flex items-center justify-center shadow-xl overflow-hidden relative">
                    {leader.image ? (
                      <Image
                        src={leader.image}
                        alt={`${leader.name} - ${leader.role}`}
                        fill
                        className="object-cover"
                        sizes="(max-w-7xl) 176px"
                        priority={leader.name === "Ashutosh Pathak"}
                      />
                    ) : (
                      <ImageIcon className="w-20 h-20 text-slate-500" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pb-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-black text-white uppercase tracking-wide">
                      {leader.name}
                    </h3>

                    <p className="mt-2 text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
                      {leader.role}
                    </p>
                  </div>

                  <p className="mt-6 text-center text-sm text-slate-400 leading-relaxed min-h-[72px]">
                    {leader.description}
                  </p>
                </div>
              </div>

              {/* Action Button Section */}
              <div className="p-8 pt-0 mt-auto text-center min-h-[68px] flex items-center justify-center">
                {leader.phone ? (
                  <a
                    href={`tel:${leader.phone.replace(/\s+/g, "")}`}
                    className="inline-block w-full px-6 py-3 rounded-sm bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-wider text-xs transition duration-200 shadow-md"
                  >
                    Contact Director
                  </a>
                ) : (
                  <span className="text-xs text-slate-600 italic font-medium">
                    Corporate Office
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}