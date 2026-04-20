'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
    { title: 'Web Development & Design', icon: '💻' },
    { title: 'Product Management', icon: '📊' },
    { title: 'Business & Marketing', icon: '💼' },
    { title: 'Creatives', icon: '🎨' },
    { title: 'Data Engineering', icon: '📈' },
    { title: 'Product Management', icon: '📦' },
    { title: 'Business & Marketing', icon: '💡' },
    { title: 'Creatives', icon: '🧠' },
    { title: 'Web Development', icon: '⚙️' },
];

const CategoryCarosal = () => {

    

    return (
        <div className="relative w-full py-4 my-5">
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={16}
                slidesPerView={2}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                }}
                className="!px-10"
            >
                {categories.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex items-center justify-center gap-2 overflow-hidden px-4 py-2 border rounded-full bg-white shadow-sm hover:shadow-md transition cursor-pointer whitespace-nowrap">
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-sm font-medium text-gray-700">
                                {item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title}
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CategoryCarosal;
