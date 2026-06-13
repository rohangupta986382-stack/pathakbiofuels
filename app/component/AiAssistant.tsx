"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AiAssistant() {
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Welcome to Pathak Biofuels AI Assistant. Ask about biomass pellets, briquettes, GCV values, bulk procurement or logistics.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setTyping(true);

    setTimeout(() => {
      let response =
        "Our team will assist you with biomass fuel requirements. Please contact our sales department for detailed quotations.";

      if (
        input.toLowerCase().includes("pellet")
      ) {
        response =
          "We supply Pinewood, Sawdust, Groundshell and Mustard Pellets for industrial applications.";
      }

      if (
        input.toLowerCase().includes("gcv")
      ) {
        response =
          "Our biomass fuels offer GCV ranging from 3400 to 4500 depending on product type.";
      }

      if (
        input.toLowerCase().includes("briquette")
      ) {
        response =
          "We provide 90MM biomass briquettes suitable for boilers and thermal systems.";
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response,
        },
      ]);

      setTyping(false);
    }, 1200);
  };

  return (
    <section
      id="ai-assistant"
      className="py-24 bg-gradient-to-b from-white via-green-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
            AI CO-PILOT
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Pathak Biofuels AI Assistant
          </h2>

          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Get instant information regarding biomass fuels,
            specifications, logistics, procurement and industrial applications.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-green-100 shadow-2xl overflow-hidden">
          <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
            <h3 className="font-semibold text-white">
              AI Operations Console
            </h3>

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>

              <span className="text-sm text-gray-300">
                Status: Engine Offline - Awaiting OpenAI Webhook Node
              </span>
            </div>
          </div>

          <div className="h-[500px] overflow-y-auto p-6 bg-slate-50">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[75%] px-5 py-3 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-green-700 text-white"
                        : "bg-white border border-slate-200 text-slate-800"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 rounded-2xl px-5 py-3">
                    AI is typing...
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="border-t border-slate-200 p-4 bg-white">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ask about pellets, briquettes, GCV..."
                value={input}
                onChange={(e) =>
                  setInput(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
                className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-4 focus:ring-green-100 focus:border-green-600"
              />

              <button
                onClick={handleSend}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-700 to-emerald-600 text-white font-semibold hover:scale-105 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}