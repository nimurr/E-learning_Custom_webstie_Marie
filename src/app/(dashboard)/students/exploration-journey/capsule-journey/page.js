'use client';
import { useGetAllCapsulesCategoryFullDataQuery, useGetCapsuleJourneyQuery, usePurchasedCapsuleJourneyMutation } from "@/redux/fetures/capsules/capsules";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const Page = () => {
    const { data: capsuleJourney, isLoading } = useGetCapsuleJourneyQuery();
    const { data: allCapsulesCategoryFullData } = useGetAllCapsulesCategoryFullDataQuery({ journeyId: capsuleJourney?.data?.results[0]?.id });

    const [purchesJourney] = usePurchasedCapsuleJourneyMutation();


    const journeys = allCapsulesCategoryFullData?.data?.results;

    console.log(allCapsulesCategoryFullData)

    if (isLoading) {
        return <p className="text-center py-5">Loading...</p>;
    }

    const handleUnlockCapsule = async () => {

        try {
            const res = await purchesJourney({ journeyId: capsuleJourney?.data?.results[0]?.id }).unwrap();

            if (res?.code === 200) {
                toast.success("Pay for Capsule Journey Unlocked!");
                window.open(res?.data?.url, "_blank");
            }
        } catch (error) {
            console.error("Error unlocking capsule journey:", error);
            toast.error("Failed to unlock capsule journey. Please try again.");
        }

    };

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

                    <button
                        onClick={() => handleUnlockCapsule(journeys?.[0]?.price)}
                        className="bg-primary text-white text-sm px-5 py-3 rounded-lg"
                    >
                        Unlock Full Expedition - ${journeys?.[0]?.price}
                    </button>
                </div>

                {/* Timeline */}
                <div className="relative">
                    <div className="absolute left-5 top-0 bottom-0 w-px bg-indigo-200"></div>

                    <div className="space-y-6">
                        {journeys?.map((item, index) => (
                            <div key={item.id} className="relative flex items-start gap-6">

                                {/* Icon */}
                                <div className="relative z-10">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-white">
                                        ⭐
                                    </div>
                                </div>

                                {/* Card */}
                                <Link
                                    href={`/students/exploration-journey/${item.id}`}
                                    className="flex-1 border rounded-xl p-6 bg-gray-50 hover:shadow-md transition"
                                >
                                    <div className="flex justify-between items-start">

                                        <div>
                                            <p className="text-sm text-primary font-medium mb-1">
                                                Journey {index + 1}
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
                                                Capsules
                                            </p>
                                            <p className="text-lg font-semibold text-gray-700">
                                                {item.numberOfCapsule}
                                            </p>
                                        </div>

                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Page;