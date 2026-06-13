export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-green-700 tracking-wider uppercase px-4 py-2 bg-green-50 rounded-full">
            About Pathak Biofuels
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Building a Greener Future Through Biomass Energy
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
            Pathak Biofuels is committed to providing sustainable
            and efficient biomass fuel solutions for industries
            across India. We manufacture premium quality pellets
            and briquettes that help businesses reduce fuel costs
            while supporting environmental sustainability.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-100 shadow-lg">
              <h3 className="text-3xl font-bold text-slate-900">
                Our Mission
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                To provide industries with high-quality renewable
                biomass fuels that deliver excellent thermal
                efficiency while reducing carbon emissions.
              </p>

              <h3 className="text-3xl font-bold text-slate-900 mt-8">
                Our Vision
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                To become one of India's most trusted biomass
                energy providers and accelerate the transition
                towards sustainable industrial energy solutions.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border border-green-100 rounded-2xl p-6 shadow-lg">
              <h4 className="text-3xl font-bold text-green-700">
                2024
              </h4>
              <p className="mt-2 text-slate-600">
                Company Established
              </p>
            </div>

            <div className="bg-white border border-green-100 rounded-2xl p-6 shadow-lg">
              <h4 className="text-3xl font-bold text-green-700">
                Pan India
              </h4>
              <p className="mt-2 text-slate-600">
                Supply Network
              </p>
            </div>

            <div className="bg-white border border-green-100 rounded-2xl p-6 shadow-lg">
              <h4 className="text-3xl font-bold text-green-700">
                4500+
              </h4>
              <p className="mt-2 text-slate-600">
                Maximum GCV
              </p>
            </div>

            <div className="bg-white border border-green-100 rounded-2xl p-6 shadow-lg">
              <h4 className="text-3xl font-bold text-green-700">
                100%
              </h4>
              <p className="mt-2 text-slate-600">
                Renewable Fuel
              </p>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-slate-900">
              Leadership Team
            </h3>
            <p className="mt-4 text-slate-600">
              The professionals leading Pathak Biofuels towards
              innovation and sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-green-100 rounded-3xl p-8 shadow-lg text-center hover:-translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center text-4xl">
                👨
              </div>
              <h4 className="mt-6 text-2xl font-bold text-slate-900">
                Ram Omar
              </h4>
              <p className="mt-2 text-green-700 font-medium">
                Managing Director
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-3xl p-8 shadow-xl text-center hover:-translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center text-4xl">
                👨‍💼
              </div>
              <h4 className="mt-6 text-2xl font-bold text-slate-900">
                Ashutosh Pathak
              </h4>
              <p className="mt-2 text-green-700 font-medium">
                Director
              </p>
              <p className="mt-4 text-slate-600">
                +91 62698 31886
              </p>
            </div>

            <div className="bg-white border border-green-100 rounded-3xl p-8 shadow-lg text-center hover:-translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center text-4xl">
                👩
              </div>
              <h4 className="mt-6 text-2xl font-bold text-slate-900">
                Harshita Tiwari
              </h4>
              <p className="mt-2 text-green-700 font-medium">
                Operational Head
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}