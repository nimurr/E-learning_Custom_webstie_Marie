'use client';

import {
    useGetCapsuleJourneyQuery,
    useGetAllCapsulesCategoryFullDataQuery,
    usePurchasedCapsuleJourneyMutation
} from "@/redux/fetures/capsules/capsules";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const Page = () => {

    // 🔹 First API (Journey)
    const { data: capsuleJourney, isLoading } = useGetCapsuleJourneyQuery();
    const journeyId = capsuleJourney?.data?.results?.[0]?.id;

    // 🔹 Second API (Capsules) → WAIT
    const {
        data: capsuleData,
        isLoading: capsuleLoading
    } = useGetAllCapsulesCategoryFullDataQuery(
        { journeyId },
        { skip: !journeyId }
    );

    const [purchesJourney] = usePurchasedCapsuleJourneyMutation();

    const capsules = capsuleData?.data?.capsules || [];
    const isPurchased = capsuleData?.data?.isPurchased;


    // 🔹 Loading
    if (isLoading || capsuleLoading) {
        return <p className="text-center py-10">Loading...</p>;
    }


    return (
        <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-sm p-8">

                {/* Header */}
                <h1 className="text-3xl text-center mb-5 font-bold text-primary">
                    🚀 Your Journey
                </h1>

                <div className="flex items-center justify-between flex-wrap gap-5 mb-10">
                    <p className="text-sm text-gray-500 tracking-wide">
                        DISCOVER YOUR VALUES, UNLOCK YOUR STRENGTHS, AND CHART YOUR PROFESSIONAL DESTINY
                    </p>

                    {/* 🔥 Show button only if NOT purchased */}

                    <button
                        className="bg-primary text-white text-sm px-5 py-3 rounded-lg"
                    >
                        Resume Journey
                    </button>

                </div>

                {/* Timeline */}
                <div className="relative">
                    <div className="absolute left-5 top-0 bottom-0 w-px bg-indigo-200"></div>

                    <div className="space-y-6">

                        {capsules.map((item, index) => {

                            const isLocked = !isPurchased && index !== 0; // 🔥 lock others

                            return (
                                <div key={item._id} className="relative flex items-start gap-6">

                                    {/* Icon */}
                                    <div className="relative z-10">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-white">
                                            {isLocked ? "🔒" : "⭐"}
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div
                                        className={`flex-1 border rounded-xl p-6 transition
                                            ${isLocked ? 'bg-gray-100 opacity-60 cursor-not-allowed' : 'bg-gray-50 hover:shadow-md'}
                                        `}
                                    >
                                        {isLocked ? (
                                            <div>
                                                <p className="text-sm text-primary font-medium mb-1">
                                                    Capsule {item.capsuleNumber}
                                                </p>

                                                <h3 className="text-lg font-semibold text-gray-800">
                                                    {item.title}
                                                </h3>

                                                <p className="text-sm text-gray-500 mt-2">
                                                    🔒 Unlock to access this capsule
                                                </p>
                                            </div>
                                        ) : (
                                            <Link href={`/students/exploration-journey/after-purchas-capsul`}>
                                                <div className="flex justify-between items-start">

                                                    <div>
                                                        <p className="text-sm text-primary font-medium mb-1">
                                                            Capsule {item.capsuleNumber}
                                                        </p>

                                                        <h3 className="text-lg font-semibold text-gray-800">
                                                            {item.title}
                                                        </h3>

                                                        <p className="text-sm text-gray-500 mt-2">
                                                            {item.roadMapBrief}
                                                        </p>
                                                    </div>

                                                    <div className="text-right">
                                                        <p className="text-xs text-gray-400 uppercase">
                                                            Modules
                                                        </p>

                                                        <p className="text-lg font-semibold text-gray-700">
                                                            {item.totalModule}
                                                        </p>
                                                    </div>

                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Page;