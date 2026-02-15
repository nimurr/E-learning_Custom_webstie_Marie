import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f3ff] to-[#efeafe] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-sm p-10">

        {/* Top Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-3xl">
            🚀
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-indigo-900">
          The Parcours Expédition
        </h1>

        <p className="text-center text-indigo-500 mt-3 font-medium">
          A Guided Journey To Rediscover Meaning, Clarity, And A Direction That Truly Fits You
        </p>

        {/* Description */}
        <p className="text-center text-gray-600 mt-6 leading-relaxed max-w-4xl mx-auto">
          <span className="font-semibold text-primary">
            The Expedition Journey
          </span>{" "}
          is a guided, multi-step experience designed to help you better
          understand yourself, clarify what is holding you back today, and
          realign your professional trajectory. Through a series of capsules
          combining introspection, science, and practical exercises, you
          progress step by step in your inner exploration, guided by Luna.
        </p>

        {/* What you'll get */}
        <div className="mt-10">
          <p className="text-gray-700 mb-6">Through several capsules, you will:</p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "A clearer understanding of your values and drivers",
              "A stronger sense of professional direction",
              "Concrete tools to take action",
              "A final completion certificate",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">
                  ✓
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Small Info Text */}
        <p className="text-gray-500 text-sm mt-8 text-center max-w-3xl mx-auto">
          Each capsule represents a step in the journey. They follow a precise
          order, designed to guide you step by step, without overwhelming you
          or losing direction.
        </p>

        {/* Luna Card */}
        <div className="mt-10 border border-indigo-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 bg-indigo-50/40">

          <div>
            <p className="text-gray-700 mb-4">
              <span className="italic font-medium">Luna</span> will be present throughout the journey to:
            </p>

            <div className="space-y-3">
              {[
                "Guide you",
                "And provide personalized summaries based on your answers",
                "Encourage you",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs">
                    ✓
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Luna Image Placeholder */}
          <div className="w-60 h-60 rounded-full flex items-center justify-center text-6xl">
            <img className="w-full" src="/Images/StudentsDash/explorationJourney_cartoon.png" alt="" />
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <Link href="/students/exploration-journey/capsule-journey" className="bg-gradient-to-r from-primary to-indigo-500 hover:opacity-90 text-white px-8 py-3 rounded-xl font-medium shadow-md transition">
            Start the Parcours Expédition →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Page;
