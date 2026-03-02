'use client';
import React, { useState } from 'react';

// ── Data ──────────────────────────────────────────────────────
const ratingBars = [
    { star: 5, percent: 20 },
    { star: 4, percent: 40 },
    { star: 3, percent: 35 },
    { star: 2, percent: 5 },
    { star: 1, percent: 10 },
];

const reviews = [
    {
        id: 1,
        name: 'Jennie Yun',
        time: '2 days ago',
        rating: 4,
        text: '"Working With My Mentor Didn\'t Just Change My Job—It Changed How I See My Career. I Finally Have Clarity, Confidence, And A Path That Actually Feels Like Me."',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        id: 2,
        name: 'Jennie Yun',
        time: '2 days ago',
        rating: 4,
        text: '"Working With My Mentor Didn\'t Just Change My Job—It Changed How I See My Career. I Finally Have Clarity, Confidence, And A Path That Actually Feels Like Me."',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        id: 3,
        name: 'Jennie Yun',
        time: '2 days ago',
        rating: 4,
        text: '"Working With My Mentor Didn\'t Just Change My Job—It Changed How I See My Career. I Finally Have Clarity, Confidence, And A Path That Actually Feels Like Me."',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
];

// ── Star Display ──────────────────────────────────────────────
const Stars = ({ rating, size = 'sm' }) => {
    const sz = size === 'lg' ? 'w-7 h-7' : 'w-4 h-4';
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className={`${sz} ${s <= rating ? 'text-yellow-400' : 'text-gray-200'}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

// ── Page ──────────────────────────────────────────────────────
const Page = () => {
    const [showAll, setShowAll] = useState(false);
    const displayed = showAll ? reviews : reviews.slice(0, 3);

    return (
        <div className="relative lg:py-10 py-5 w-full px-5 lg:px-0 z-0">
            <div className="absolute -z-10 inset-0 bg-[url('/Images/StudentsDash/page_bg.png')] bg-cover bg-no-repeat opacity-60" />
            <div className=" space-y-4 max-w-6xl bg-gray-100 rounded-lg p-5 my-5 mx-auto">

                {/* ── Rating Overview ── */}
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <h2 className="text-sm font-bold text-gray-900 mb-4">Rating Overview</h2>

                    <div className="flex items-center gap-8">
                        {/* Left: Score */}
                        <div className="flex-shrink-0 text-center">
                            <p className="text-5xl font-bold text-gray-900 leading-none mb-2">4.0</p>
                            <Stars rating={4} size="sm" />
                            <p className="text-xs text-gray-400 mt-2">By 1.9k Users</p>
                        </div>

                        {/* Right: Bars */}
                        <div className="flex-1 space-y-2">
                            {ratingBars.map((row) => (
                                <div key={row.star} className="flex items-center gap-3">
                                    <span className="text-xs text-gray-500 w-3 flex-shrink-0">{row.star}</span>
                                    <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-indigo-800 rounded-full"
                                            style={{ width: `${row.percent}%` }}
                                        />
                                    </div>
                                    <span className="text-xs text-gray-400 w-7 text-right flex-shrink-0">
                                        {String(row.percent).padStart(2, '0')}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Review Overview ── */}
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-sm font-bold text-gray-900">Review Overview</h2>
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="flex items-center gap-1.5 border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-gray-50 transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                            All Reviews
                        </button>
                    </div>

                    <div className="space-y-3">
                        {displayed.map((review) => (
                            <div key={review.id} className="border border-gray-100 rounded-xl p-4 bg-gray-50/50">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={review.avatar}
                                            alt={review.name}
                                            className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                                        />
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800">{review.name}</p>
                                            <p className="text-xs text-gray-400">{review.time}</p>
                                        </div>
                                    </div>
                                    <Stars rating={review.rating} size="sm" />
                                </div>
                                <p className="text-xs text-gray-600 leading-relaxed mt-2 pl-14">
                                    {review.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-4">
                    <button className="customSignUpButton hover:bg-indigo-700 text-white text-sm font-bold py-3 px-10 rounded-lg transition">
                        Load More
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Page;