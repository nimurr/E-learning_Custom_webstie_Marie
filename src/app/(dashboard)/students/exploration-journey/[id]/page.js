'use client';

import { useGetJourneyDetailsQuery } from "@/redux/fetures/capsules/capsules";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {

  const params = useParams();
  const id = params?.id;

  const {
    data: capsuleJourney,
    isLoading,
    isError
  } = useGetJourneyDetailsQuery(
    { journeyId: id },
    { skip: !id }
  );

  // ✅ FIXED DATA STRUCTURE
  const capsule = capsuleJourney?.data?.capsule;
  const modules = capsuleJourney?.data?.modules || [];

  console.log("API:", capsuleJourney);

  if (isLoading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500 py-10">Failed to load data</p>;
  }

  return (
    <div className="min-h-screen bg-[#f4f5fb] px-6 py-10 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-sm p-10">

        {/* Capsule Tag */}
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full mb-4">
          ⭐ Capsule {capsule?.capsuleNumber || "01"}
        </div>

        {/* 🔥 STATIC CONTENT (UNCHANGED) */}
        <h1 className="text-3xl font-bold text-indigo-900">
          Launch Base : Ignite Your Engines
        </h1>

        <p className="text-gray-500 mt-2">
          Establish your baseline for meaningful growth. The foundation of your
          stellar journey starts here.
        </p>

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          {/* Static Mission */}
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
                introspection protocols. Your progress is monitored by Luna.
              </p>

              <p>
                By the end of this module, you will define your trajectory.
              </p>
            </div>
          </div>

          {/* Dynamic Mission Details */}
          <div className="bg-gray-100 rounded-2xl p-6 border">
            <h2 className="text-xl font-semibold text-indigo-900 mb-6">
              Mission Details
            </h2>

            <div className="space-y-5 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>⏱ Estimated Time</span>
                <span className="font-medium text-gray-800">
                  {capsule?.estimatedTime || "--"}
                </span>
              </div>

              <div className="flex justify-between">
                <span>📚 Total Modules</span>
                <span className="font-medium text-gray-800">
                  {capsule?.totalModule || modules.length}
                </span>
              </div>

              <div className="flex justify-between">
                <span>📌 Description</span>
                <span className="font-medium text-gray-800 text-right max-w-[120px]">
                  {capsule?.description || "--"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-indigo-900 mb-6">
            Capsule Roadmap
          </h2>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-indigo-200"></div>

            <div className="space-y-4">

              {/* Modules Only (your API doesn't return intro here) */}
              {modules.length > 0 ? (
                modules.map((mod, index) => (
                  <div key={mod._id} className="relative flex items-start gap-6">

                    {/* Icon */}
                    <div className="relative z-10">
                      <div className="w-8 h-8 bg-white border rounded-full flex items-center justify-center">
                        {index === 0 ? "▶" : "•"}
                      </div>
                    </div>

                    {/* Card */}
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
                        {mod.estimatedTime || "--"}
                      </div>
                    </div>

                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-sm pl-10">
                  No modules found
                </p>
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;