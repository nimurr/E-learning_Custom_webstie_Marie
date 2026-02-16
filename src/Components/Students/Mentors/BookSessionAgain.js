'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const mentors = [
    {
        name: 'James Chan',
        location: 'Lyon, France',
        price: '$70/Session',
        rating: '4/5',
        tag: 'For you',
    },
    {
        name: 'James Chan',
        location: 'Lyon, France',
        price: '$70/Session',
        rating: '4/5',
        tag: 'Top',
    },
    {
        name: 'James Chan',
        location: 'Lyon, France',
        price: '$70/Session',
        rating: '4/5',
        tag: 'For you',
    },
    {
        name: 'James Chan',
        location: 'Lyon, France',
        price: '$70/Session',
        rating: '4/5',
        tag: 'Top',
    },
];

const BookSessionAgain = () => {
    return (
        <div className="max-w-6xl lg:mx-auto bg-white/80 mx-3 backdrop-blur rounded-2xl p-8 shadow-lg border my-5">

            {/* Title */}
            <h2 className="text-4xl font-semibold text-center text-primary mb-8 flex items-center justify-center gap-2">
                <span className="text-3xl">🪐</span>
                Book Session Again
            </h2>

            {/* Swiper */}
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                navigation
                modules={[Navigation]}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {mentors.map((mentor, index) => (
                    <SwiperSlide key={index}>
                        <div className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition">

                            {/* Profile */}
                            <div className="flex items-center gap-3 mb-3">
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        {mentor.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {mentor.location}
                                    </p>
                                </div>

                                <span className="ml-auto text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                                    {mentor.tag}
                                </span>
                            </div>

                            {/* Meta */}
                            <div className="text-sm text-gray-600 flex gap-3 mb-3">
                                <span className="text-primary font-medium">
                                    {mentor.price}
                                </span>
                                <span>⭐ {mentor.rating}</span>
                                <span>🌐 Online, In-Person</span>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-500 mb-4">
                                With over 8 years as a career transition coach, I specialize in guiding tech and creative professionals out of burnout. My approach blends practical strategy with mindful introspection to help you design work that doesn't just pay the bills—it fuels your spirit.
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-xs border px-2 py-1 rounded-full">
                                    Career Clarity (Mid-Level)
                                </span>
                                <span className="text-xs border px-2 py-1 rounded-full">
                                    Values alignment
                                </span>
                            </div>

                            {/* Button */}
                            <Link href="/students/mentors/415415" className="w-full inline-block text-center customSignUpButton text-white py-4 rounded-lg font-medium hover:opacity-90">
                                See Profile
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BookSessionAgain;