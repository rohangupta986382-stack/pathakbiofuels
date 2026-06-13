import Image from "next/image";

export default function Products() {
  const products = [
    {
      name: "Pinewood Pellets",
      image: "/Pnewood.jpeg",
      badge: "Best Seller",
      gcv: "4200 - 4500",
      ash: "< 2%",
      moisture: "< 10%",
    },
    {
      name: "Sawdust Pellets",
      image: "/sawdustpallete.jpeg",
      badge: "High Demand",
      gcv: "3800 - 4200",
      ash: "< 5%",
      moisture: "< 10%",
    },
    {
      name: "Groundshell Pellets",
      image: "/Groundnutcell.jpeg",
      badge: "Industrial Grade",
      gcv: "3500 - 4000",
      ash: "< 8%",
      moisture: "< 10%",
    },
    {
      name: "Mustard Pellets",
      image: "/Mustered.jpeg",
      badge: "Eco Friendly",
      gcv: "3400 - 3800",
      ash: "< 10%",
      moisture: "< 10%",
    },
    {
      name: "90MM Sawdust Briquettes",
      image: "/Sawdustbrequet.jpeg",
      badge: "Boiler Fuel",
      gcv: "3800 - 4200",
      ash: "< 5%",
      moisture: "< 10%",
    },
    {
      name: "90MM Groundshell Briquettes",
      image: "/90mm-groundshell.jpg",
      badge: "Bulk Supply",
      gcv: "3500 - 4000",
      ash: "< 8%",
      moisture: "< 10%",
    },
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white to-green-50/20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
            OUR PRODUCTS
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Premium Biomass Fuel Solutions
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
            High-performance biomass pellets and briquettes designed
            for industrial boilers, thermal plants, food processing
            units and manufacturing facilities.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-white rounded-3xl overflow-hidden border border-green-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-w-7xl) 33vw, 100vw"
                />
                <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  {product.badge}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {product.name}
                </h3>

                <div className="mt-6 rounded-2xl bg-slate-50 p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-500">GCV</span>
                    <span className="font-semibold text-green-700">
                      {product.gcv}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Ash Content</span>
                    <span className="font-semibold">{product.ash}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Moisture</span>
                    <span className="font-semibold">{product.moisture}</span>
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <a
                    href="#contact"
                    className="flex-1 text-center py-3 rounded-xl bg-gradient-to-r from-green-700 to-emerald-600 text-white font-semibold hover:scale-105 transition"
                  >
                    Request Quote
                  </a>
                  <a
                    href="https://wa.me/916269831886"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl border border-green-200 text-green-700 font-semibold hover:bg-green-50 transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 text-center">
            <h3 className="text-3xl font-bold text-green-700">4500+</h3>
            <p className="mt-2 text-slate-600">Maximum GCV</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 text-center">
            <h3 className="text-3xl font-bold text-green-700">Low Ash</h3>
            <p className="mt-2 text-slate-600">Cleaner Combustion</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 text-center">
            <h3 className="text-3xl font-bold text-green-700">Bulk Supply</h3>
            <p className="mt-2 text-slate-600">Pan India Delivery</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 text-center">
            <h3 className="text-3xl font-bold text-green-700">24/7</h3>
            <p className="mt-2 text-slate-600">Customer Support</p>
          </div>
        </div>

      </div>
    </section>
  );
}