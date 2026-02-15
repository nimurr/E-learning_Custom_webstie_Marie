import React from "react";

const roadmap = [
  {
    title: "Founder's Welcome",
    desc: "A video introduction to the Stellar methodology and the path ahead.",
    time: "45 Mins",
  },
  {
    title: "Inspiration: Stellar Videos",
    desc: "Curated deep-dives into the neurobiology of Happiness & Purpose.",
    time: "45 Mins",
  },
  {
    title: "Internal Diagnostics",
    desc: "5 core introspective questions to map your psychological landscape.",
    time: "— — — —",
  },
  {
    title: "Practical Exercise",
    desc: "Draft your Propulsion Fuel Statement — the draft of your career mission.",
    time: "— — — —",
  },
  {
    title: "The Science of Meaning",
    desc: "Concluding framework on the psychology pillars that sustain fulfillment.",
    time: "— — — —",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen bg-[#f4f5fb] px-6 py-10 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-sm p-10">

        {/* Capsule Tag */}
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full mb-4">
          ⭐ Capsule 01
        </div>

        {/* Header */}
        <h1 className="text-3xl font-bold text-indigo-900">
          Launch Base : Ignite Your Engines
        </h1>

        <p className="text-gray-500 mt-2">
          Establish your baseline for meaningful growth. The foundation of your
          stellar journey starts here.
        </p>

        {/* Top Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          {/* Mission Briefing */}
          <div className="md:col-span-2 bg-gray-100 rounded-2xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-indigo-900 mb-4">
              Your Mission Briefing
            </h2>

            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Your journey begins at the Launch Base, where we strip away the
                noise of conventional career paths to find what truly drives you.
              </p>

              <p>
                Throughout this capsule, you'll be guided through a series of
                introspection protocols. Your progress is monitored by Luna, our
                advanced resonance engine.
              </p>

              <p>
                By the end of this module, Luna will synthesize your inputs into
                a personalized "Propulsion Manifesto" — the core document that
                will define your trajectory through the upcoming Career Nebulae.
              </p>
            </div>
          </div>

          {/* Mission Details */}
          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-indigo-900 mb-6">
              Mission Details
            </h2>

            <div className="space-y-5 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>⏱ Estimated Time</span>
                <span className="font-medium text-gray-800">45 Mins</span>
              </div>

              <div className="flex justify-between">
                <span>📚 Total Modules</span>
                <span className="font-medium text-gray-800">6</span>
              </div>

              <div className="flex justify-between">
                <span>🤖 AI</span>
                <span className="font-medium text-gray-800">Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Capsule Roadmap */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-indigo-900 mb-6">
            Capsule Roadmap
          </h2>

          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-indigo-200"></div>

            <div className="space-y-4">
              {roadmap.map((item, index) => (
                <div key={index} className="relative flex items-start  gap-6">

                  {/* Icon */}
                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-white border border-indigo-300 rounded-full flex items-center justify-center text-indigo-600 text-sm shadow-sm">
                      {index === 0 ? "▶" : "•"}
                    </div>
                  </div>

                  {/* Roadmap Card */}
                  <div className="flex-1 bg-gray-100 border border-gray-200 rounded-xl p-4 shadow-sm flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-indigo-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.desc}
                      </p>
                    </div>

                    <div className="text-sm text-gray-500 whitespace-nowrap">
                      {item.time}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-gray-100 border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-indigo-900">
            Ready To Initialize?
          </h2>

          <p className="text-gray-500 mt-3 text-sm">
            Click below to enter the portal. Luna will start your Mission
            Briefing immediately.
          </p>

          <button className="mt-6 bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-xl shadow transition">
            Begin Journey ▼
          </button>
        </div>

      </div>
    </div>
  );
};

export default Page;
