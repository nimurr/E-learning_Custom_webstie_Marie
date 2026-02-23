import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const MentorDashboardFullDetails = () => {
    const rating = null; // null = no rating yet
    const revenue = 0.00;

    return (
        <div className="p-4 space-y-4 max-w-5xl mx-auto bg-white rounded-2xl shadow-md">

            {/* Top Stats Row */}
            <div className="grid grid-cols-2 gap-4">

                {/* Average Rating */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5">
                    <div className="flex items-start justify-between mb-3">
                        <p className="text-sm font-semibold text-gray-700">Average Rating</p>
                        <span className="text-2xl">⭐</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800 mb-2">--</p>
                    <div className="flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <svg key={s} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <p className="text-xs text-gray-400">No Rating Yet</p>
                </div>

                {/* Revenue Overview */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5">
                    <div className="flex items-start justify-between mb-3">
                        <p className="text-sm font-semibold text-gray-700">Revenue Overview</p>
                        <span className="text-2xl">💵</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800 mb-2">
                        ${revenue.toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-400 mt-6">Complete Your Profile To Start Earning</p>
                </div>
            </div>

            {/* Empty State Card */}
            <div className="bg-gray-100 rounded-2xl min-h-[60vh] p-10 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-3xl mb-5">
                    🚀
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Your First Mission Starts Here
                </h2>

                <p className="text-sm text-gray-500 max-w-md leading-relaxed mb-6">
                    Complete Your Profile To Attract Mentees And Receive Reviews. Once Your Profile Is
                    Visible, Your Future Mentees Will Find You Here.
                </p>

                <Link href="/mentor/profile-setup" className="bg-primary flex items-center hover:bg-indigo-800 transition text-white text-sm px-6 py-4 rounded-lg font-medium">
                    Complete Your Profile <FaChevronRight className="inline ml-1" />
                </Link>
            </div>

        </div>
    );
};

export default MentorDashboardFullDetails;