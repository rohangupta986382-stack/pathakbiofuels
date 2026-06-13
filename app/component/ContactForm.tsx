"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
     console.log("SUBMIT BUTTON CLICKED");
  try {
    setLoading(true);
    setSuccess("");

    const res = await fetch("/api/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(data);
  
    if (data.success) {
      setSuccess("Inquiry submitted successfully!");

      setForm({
        name: "",
        phone: "",
        email: "",
        product: "",
        message: "",
      });
    } else {
      setSuccess("Failed to submit inquiry.");
    }
  } catch (error) {
    console.error(error);
    setSuccess("Something went wrong.");
  } finally {
    setLoading(false);
  }
};

  // WhatsApp template string ko ekdum sahi format kiya hai
  const whatsappUrl = `https://wa.me/916269831886?text=${encodeURIComponent(
    `Hello Pathak Biofuels,

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Product: ${form.product}

Requirement:
${form.message}`
  )}`;

  const inputStyle =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm transition-all duration-300 focus:border-green-600 focus:ring-4 focus:ring-green-100 outline-none";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-white via-green-50 to-white py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-100 blur-3xl opacity-40" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-100 blur-3xl opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full border border-green-200 bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            PATHAK BIOFUELS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Let's Build a Sustainable Energy Future
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Connect with our biomass experts for industrial pellets,
            briquettes, and bulk procurement solutions across India.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Left Contact Card */}
          <div className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-green-100 bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900">
                Contact Information
              </h3>

              <p className="mt-3 text-slate-600">
                Our team responds to all business inquiries within 24 hours.
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <p className="text-sm text-slate-500">Director</p>
                  <p className="font-semibold text-slate-900">
                    Ashutosh Pathak
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Phone Number</p>
                  <p className="font-semibold text-green-700">
                    +91 62698 31886
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Business Email</p>
                  <p className="font-semibold text-slate-900">
                    info@pathakbiofuels.com
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Office Location</p>
                  <p className="font-semibold text-slate-900">
                    Main Road SH 49,
                    <br />
                    Amanganj, Dist Panna,
                    <br />
                    Madhya Pradesh 488441
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Business Hours</p>
                  <p className="font-semibold text-slate-900">
                    Monday - Saturday
                    <br />
                    9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-5">
                <p className="font-semibold text-green-800">
                  ⚡ Bulk Orders Available
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  Industrial biomass fuel solutions for boilers,
                  manufacturing units, food processing plants,
                  textile industries and commercial heating systems.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-xl">
              <h3 className="mb-8 text-2xl font-bold text-slate-900">
                Send Business Inquiry
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputStyle}
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputStyle}
                />

                <div className="md:col-span-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>

                <div className="md:col-span-2">
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className={inputStyle}
                  >
                    <option value="">Select Product</option>
                    <option value="Pinewood Pellets">Pinewood Pellets</option>
                    <option value="Sawdust Pellets">Sawdust Pellets</option>
                    <option value="Groundshell Pellets">Groundshell Pellets</option>
                    <option value="Mustard Pellets">Mustard Pellets</option>
                    <option value="90MM Sawdust Briquettes">90MM Sawdust Briquettes</option>
                    <option value="90MM Groundshell Briquettes">90MM Groundshell Briquettes</option>
                    <option value="90MM Mustard Briquettes">90MM Mustard Briquettes</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell us about your requirement..."
                    value={form.message}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="rounded-xl bg-gradient-to-r from-green-700 to-emerald-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50">
                  {loading ? "Submitting..." : "Submit Inquiry"}
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[#25D366] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
                >
                  WhatsApp Director
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-700">
                  ✓ Secure Inquiry
                </span>
                <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-700">
                  ✓ PAN India Supply
                </span>
                <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-700">
                  ✓ Bulk Orders
                </span>
                <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-700">
                  ✓ Industrial Grade Quality
                </span>
              </div>
              {success && (
                <p className="mt-4 font-semibold text-green-700">
                  {success}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}