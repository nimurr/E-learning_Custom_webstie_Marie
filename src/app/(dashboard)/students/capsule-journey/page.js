import React from "react";

const capsules = new Array(6).fill({
    title: "Launch Base: Ignite Your Engines",
    subtitle: "Identify your deep values and your inner fuel.",
    modules: "6",
});

const Page = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-sm p-8">

                {/* Header */}
                <h1 className="text-3xl text-center  mb-5 font-bold text-primary">
                    🚀 Your 6-Capsule Journey
                </h1>
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <p className="text-sm text-gray-500 mt-2 tracking-wide flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-primary inline-block"></span>  DISCOVER YOUR VALUES, UNLOCK YOUR STRENGTHS, AND CHART YOUR PROFESSIONAL DESTINY
                        </p>
                    </div>

                    <button className="bg-primary hover:bg-indigo-800 text-white text-sm font-medium px-5 py-3 rounded-lg shadow">
                        Unlock Full Expedition - $150
                    </button>
                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Vertical Line */}
                    <div className="absolute left-5 top-0 bottom-0 w-px bg-indigo-200"></div>

                    <div className="space-y-6">
                        {capsules.map((capsule, index) => (
                            <div key={index} className="relative flex items-start gap-6">

                                {/* Timeline Icon */}
                                <div className="relative z-10">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-indigo-300 bg-white shadow-sm">
                                        ⭐
                                    </div>
                                </div>

                                {/* Card */}
                                <div className="flex-1 border border-indigo-200 rounded-xl p-6 bg-gray-50 hover:shadow-md transition">

                                    <div className="flex justify-between items-start">

                                        <div>
                                            <p className="text-sm text-primary font-medium mb-1">
                                                Capsule 01
                                            </p>
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                {capsule.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-2">
                                                {capsule.subtitle}
                                            </p>
                                        </div>

                                        <div className="text-right">
                                            <p className="text-xs text-gray-400 uppercase">
                                                Modules
                                            </p>
                                            <p className="text-lg font-semibold text-gray-700">
                                                {capsule.modules}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Page;
