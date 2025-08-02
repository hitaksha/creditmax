// src/pages/PartnerProgram.tsx

import React from "react";
import { CheckCircle, ArrowRight, Info } from "lucide-react";
import desktopBanner from "../data/banner_desktop.png";
import mobileBanner from "../data/banner_mobile.png";

export default function PartnerProgram() {
  return (
    <div className="bg-gray-50 pb-10 px-2 sm:px-0">
      {/* Banner section */}
      <div className="relative bg-white rounded-b-xl shadow overflow-hidden">
        {/* Desktop Banner */}
        <img
          src={desktopBanner}
          alt="CreditMax Sangh Desktop Banner"
          className="hidden md:block w-full h-80 object-cover rounded-b-xl"
          loading="lazy"
        />
        {/* Mobile Banner */}
        <img
          src={mobileBanner}
          alt="CreditMax Sangh Mobile Banner"
          className="block md:hidden w-full h-96 object-cover rounded-b-xl"
          loading="lazy"
        />
        {/* Overlayed content */}
        <div className="absolute inset-0 flex flex-col justify-start items-center bg-black bg-opacity-30 rounded-b-xl px-4 pt-10 pb-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
            CreditMax Sangh
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white font-semibold max-w-xl mx-auto drop-shadow-lg mb-4">
            Join CreditMax Sangh — a collective community empowering you to earn more with every connection.
          </p>
          <a
            href="/partner-signup"
            className="inline-block px-6 py-3 rounded-lg bg-blue-600 font-bold text-lg shadow-lg hover:bg-blue-700 transition text-white"
          >
            Apply Now
          </a>
        </div>
      </div>

      {/* About CreditMax Sangh */}
      <section className="max-w-3xl mx-auto mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black text-center">
          About CreditMax Sangh
        </h2>
        <p className="text-lg text-black text-center mb-6">
          <span className="font-bold">CreditMax Sangh</span> is your gateway to community-powered earning.
          Whether you’re a salaried professional, consultant, or business owner, Sangh brings like-minded partners together to grow wealth through referrals. Share trusted loan solutions with your network, support people’s dreams, and enjoy attractive commissions — all with transparent tracking and dedicated support.
        </p>
      </section>

      {/* Why Join CreditMax Sangh */}
      <section className="max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black text-center">
          Why Join CreditMax Sangh?
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Earn industry-leading commissions with every successful loan referral",
            "Easy, digital onboarding with no prior experience needed",
            "Access to exclusive tools, training & dedicated partner support",
            "On-time payouts and real-time commission tracking",
            "Grow your network while helping friends secure the best loans",
            "Become part of a trusted, collaborative community",
          ].map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-4 bg-white p-5 rounded-xl border shadow-sm"
            >
              <CheckCircle className="w-7 h-7 text-green-600 mt-1" />
              <span className="text-lg text-black font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How CreditMax Sangh Works */}
      <section className="bg-blue-50 border-y border-blue-100 mt-16 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black text-center">
            How CreditMax Sangh Works
          </h2>
          <div className="flex flex-col md:flex-row md:justify-between gap-7">
            {[
              {
                title: "1. Sign Up",
                desc: "Register online in minutes and join a powerful partner community.",
                icon: <Info className="w-8 h-8 text-blue-500" />,
              },
              {
                title: "2. Refer & Guide",
                desc: "Share CreditMax loan solutions and help friends, clients, and colleagues connect to the right loan.",
                icon: <ArrowRight className="w-8 h-8 text-blue-400" />,
              },
              {
                title: "3. Earn Together",
                desc: "Receive commissions for every successful disbursal—track your rewards in real time.",
                icon: <CheckCircle className="w-8 h-8 text-green-600" />,
              },
            ].map((step) => (
              <div
                key={step.title}
                className="flex-1 flex flex-col items-center text-center bg-white rounded-xl shadow-md border p-7"
              >
                {step.icon}
                <div className="mt-3 text-xl font-bold text-black">{step.title}</div>
                <div className="mt-1 text-black">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="max-w-3xl mx-auto my-12">
        <div className="bg-white rounded-xl shadow border px-6 py-8">
          <h3 className="text-xl font-semibold mb-5 text-blue-700 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-500" />
            Who Can Join CreditMax Sangh?
          </h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 text-base">
            <li>Anyone 18+ — individuals, consultants, and business owners</li>
            <li>No financial or banking background required</li>
            <li>Basic KYC and documentation</li>
            <li>Motivation to connect and help others access finance</li>
            <li>Collaborative mindset — everyone wins together!</li>
          </ul>
        </div>
      </section>

      {/* Bottom CTA Button */}
      <div className="text-center mt-8">
        <a
          href="/partner-signup"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition"
        >
          Join CreditMax Sangh &rarr;
        </a>
      </div>

      {/* Terms & Conditions */}
      <p className="mt-8 text-center text-sm text-gray-500">
        Commissions and eligibility subject to program rules. See{" "}
        <a href="/terms" className="underline hover:text-blue-600">
          Terms & Conditions
        </a>.
      </p>
    </div>
  );
}
