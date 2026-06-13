"use client";

import { useState } from "react";

export default function PaymentPortal() {
  const [form, setForm] = useState({
    clientName: "",
    invoiceId: "",
    amount: "",
    paymentMethod: "Bank Transfer",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);

        setForm({
          clientName: "",
          invoiceId: "",
          amount: "",
          paymentMethod: "Bank Transfer",
        });
      }
    } catch (error) {
      console.error(error);
      alert("Payment processing failed");
    }

    setLoading(false);
  };

  return (
    <section id="payment" className="relative overflow-hidden bg-gradient-to-b from-white via-green-50 to-white py-24">
      {/* BACKGROUND DECORATION */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-100 blur-3xl opacity-40" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-100 blur-3xl opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* SECTION HEADER */}
        <div className="mb-16 text-center">
          <span className="rounded-full border border-green-200 bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            SECURE PAYMENT PORTAL
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Invoice Settlement & Corporate Payments
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Securely settle invoices, confirm procurement payments,
            and manage biomass fuel transactions with Pathak Biofuels.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* LEFT INFO PANEL */}
          <div className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-green-100 bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900">
                Payment Information
              </h3>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm text-slate-500">
                    Accepted Methods
                  </p>
                  <p className="font-semibold text-slate-900">
                    Bank Transfer, UPI, RTGS, NEFT
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Finance Department
                  </p>
                  <p className="font-semibold text-slate-900">
                    Pathak Biofuels Accounts Team
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Invoice Verification
                  </p>
                  <p className="font-semibold text-green-700">
                    Real-Time Validation
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Processing Time
                  </p>
                  <p className="font-semibold text-slate-900">
                    Within 24 Hours
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-5">
                <p className="font-semibold text-green-800">
                  🔒 Secure Corporate Transactions
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  All invoice settlements are verified through
                  our internal transaction validation system.
                </p>
              </div>
            </div>
          </div>

          {/* PAYMENT FORM */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-xl">
              <h3 className="mb-8 text-2xl font-bold text-slate-900">
                Make a Payment
              </h3>

              <form onSubmit={handlePayment} className="space-y-6">
                <input
                  type="text"
                  name="clientName"
                  placeholder="Corporate Client Name"
                  value={form.clientName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm focus:border-green-600 focus:ring-4 focus:ring-green-100 outline-none"
                />

                <input
                  type="text"
                  name="invoiceId"
                  placeholder="Invoice ID (PB-2026-001)"
                  value={form.invoiceId}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm focus:border-green-600 focus:ring-4 focus:ring-green-100 outline-none"
                />

                <input
                  type="number"
                  name="amount"
                  placeholder="Amount (INR)"
                  value={form.amount}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm focus:border-green-600 focus:ring-4 focus:ring-green-100 outline-none"
                />

                <select
                  name="paymentMethod"
                  value={form.paymentMethod}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm focus:border-green-600 focus:ring-4 focus:ring-green-100 outline-none"
                >
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="UPI">UPI</option>
                  <option value="RTGS">RTGS</option>
                  <option value="NEFT">NEFT</option>
                </select>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-to-r from-green-700 to-emerald-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  {loading ? "Processing Payment..." : "Verify & Proceed"}
                </button>

                {success && (
                  <div className="rounded-xl border border-green-300 bg-green-50 p-4 text-green-700">
                    Payment request submitted successfully. Our finance team will verify your invoice.
                  </div>
                )}
              </form>

              {/* TRUST BADGES */}
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-700">
                  ✓ Invoice Verification
                </span>
                <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-700">
                  ✓ Secure Processing
                </span>
                <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-700">
                  ✓ Corporate Payments
                </span>
                <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-700">
                  ✓ B2B Transactions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}