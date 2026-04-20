'use client';

import { useGetJourneyDetailsQuery } from "@/redux/fetures/capsules/capsules";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { data: capsuleJourney, isLoading } =
    useGetJourneyDetailsQuery(
      { journeyId: id },
      { skip: !id }
    );

  const capsule = capsuleJourney?.data;

  if (isLoading) {
    return <p className="text-center py-5">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-[#f4f5fb] px-6 py-10 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-sm p-10">

        {/* Capsule Tag (Dynamic) */}
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full mb-4">
          ⭐ Capsule {capsule?.capsuleNumber || "01"}
        </div>

        {/* 🔥 KEEP STATIC CONTENT */}
        <h1 className="text-3xl font-bold text-indigo-900">
          Launch Base : Ignite Your Engines
        </h1>

        <p className="text-gray-500 mt-2">
          Establish your baseline for meaningful growth. The foundation of your
          stellar journey starts here.
        </p>

        {/* Top Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          {/* 🔥 Static Mission Briefing */}
          <div className="md:col-span-2 bg-gray-100 rounded-2xl p-6 border">
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

          {/* ✅ Dynamic Mission Details */}
          <div className="bg-gray-100 rounded-2xl p-6 border">
            <h2 className="text-xl font-semibold text-indigo-900 mb-6">
              Mission Details
            </h2>

            <div className="space-y-5 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>⏱ Estimated Time</span>
                <span className="font-medium text-gray-800">
                  {capsule?.estimatedTime || "45 Mins"}
                </span>
              </div>

              <div className="flex justify-between">
                <span>📚 Total Modules</span>
                <span className="font-medium text-gray-800">
                  {capsule?.totalModule || "0"}
                </span>
              </div>

              <div className="flex justify-between">
                <span>🎬 Intro Video</span>
                <span className="font-medium text-gray-800">
                  {capsule?.introduction?.estimatedTime || "--"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Dynamic Roadmap */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-indigo-900 mb-6">
            Capsule Roadmap
          </h2>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-indigo-200"></div>

            <div className="space-y-4">

              {/* Intro */}
              <div className="relative flex items-start gap-6">
                <div className="relative z-10">
                  <div className="w-8 h-8 bg-white border rounded-full flex items-center justify-center">
                    ▶
                  </div>
                </div>

                <div className="flex-1 bg-gray-100 border rounded-xl p-4 flex justify-between">
                  <div>
                    <h3 className="font-medium text-indigo-900">
                      {capsule?.introduction?.title || "Introduction"}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {capsule?.introduction?.roadMapBrief}
                    </p>
                  </div>

                  <div className="text-sm text-gray-500">
                    {capsule?.introduction?.estimatedTime}
                  </div>
                </div>
              </div>

              {/* Modules */}
              {capsule?.modules?.map((mod, index) => (
                <div key={index} className="relative flex items-start gap-6">

                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-white border rounded-full flex items-center justify-center">
                      •
                    </div>
                  </div>

                  <div className="flex-1 bg-gray-100 border rounded-xl p-4 flex justify-between">
                    <div>
                      <h3 className="font-medium text-indigo-900">
                        {mod.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {mod.description}
                      </p>
                    </div>

                    <div className="text-sm text-gray-500">
                      {mod.time || "--"}
                    </div>
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;