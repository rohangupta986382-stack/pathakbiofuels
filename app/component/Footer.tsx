export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* COMPANY */}
          <div>
            <h2 className="text-2xl font-bold text-green-400">
              Pathak Biofuels
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              Premium manufacturer and supplier of biomass pellets
              and briquettes for industrial boilers, thermal plants,
              food processing units and commercial heating systems.
            </p>

            <div className="mt-6 flex gap-3">
              <span className="px-3 py-1 rounded-full bg-green-900/40 text-green-300 text-sm">
                Biomass Pellets
              </span>

              <span className="px-3 py-1 rounded-full bg-green-900/40 text-green-300 text-sm">
                Briquettes
              </span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#home" className="hover:text-green-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-green-400">
                  About Us
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-green-400">
                  Products
                </a>
              </li>

              <li>
                <a href="#payments" className="hover:text-green-400">
                  Payments
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-green-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Products
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Pinewood Pellets</li>
              <li>Sawdust Pellets</li>
              <li>Groundshell Pellets</li>
              <li>Mustard Pellets</li>
              <li>90MM Briquettes</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">
              <p>
                Ashutosh Pathak
                <br />
                Director
              </p>

              <p>
                +91 62698 31886
              </p>

              <p>
                Main Road SH 49,
                <br />
                Nearby Guest House,
                <br />
                Amanganj,
                <br />
                Dist Panna,
                <br />
                Madhya Pradesh 488441
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* GOOGLE MAP */}
      <div className="border-t border-slate-800">
        <iframe
          title="Pathak Biofuels Location"
          src="https://maps.google.com/maps?q=Amanganj%20Panna%20Madhya%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[350px]"
          loading="lazy"
        />
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Pathak Biofuels. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-green-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-green-400">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-green-400">
              Corporate Procurement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}