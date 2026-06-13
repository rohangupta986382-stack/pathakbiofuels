import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-green-50/50 to-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium mb-6">
              🌱 Sustainable Biomass Energy Solutions
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
              Premium Biomass
              <span className="block text-green-700">
                Fuel Solutions
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed">
              High-quality biomass pellets and briquettes for
              industrial boilers, thermal plants and manufacturing
              facilities across India.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#products"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-green-700 to-emerald-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
              >
                Explore Products →
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-xl border border-green-200 bg-white text-slate-900 font-semibold hover:bg-green-50 transition-all duration-300"
              >
                Request Quote
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white border border-green-100 text-green-700 text-sm shadow-sm">
                ✓ High GCV
              </span>

              <span className="px-4 py-2 rounded-full bg-white border border-green-100 text-green-700 text-sm shadow-sm">
                ✓ Low Ash
              </span>

              <span className="px-4 py-2 rounded-full bg-white border border-green-100 text-green-700 text-sm shadow-sm">
                ✓ Pan India Supply
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14">
              <div>
                <h3 className="text-3xl font-bold text-green-700">
                  50K+
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  MT Annual Supply
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-700">
                  100+
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Industrial Clients
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-700">
                  4500+
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Maximum GCV
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-30"></div>

            <div className="bg-white rounded-3xl shadow-2xl border border-green-100 p-4 overflow-hidden">
              <div className="relative h-[650px] rounded-2xl overflow-hidden">
                <Image
                  src="/biomass2.png"
                  alt="Biomass Process"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-w-7xl) 50vw, 80vw"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Feature Bar */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl border border-green-100 p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold text-green-700">
                High GCV
              </h3>
              <p className="text-slate-600 mt-2">
                Maximum Efficiency
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-700">
                Low Ash
              </h3>
              <p className="text-slate-600 mt-2">
                Cleaner Combustion
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-700">
                Pan India
              </h3>
              <p className="text-slate-600 mt-2">
                Timely Delivery
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-700">
                24/7 Support
              </h3>
              <p className="text-slate-600 mt-2">
                Always Available
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}