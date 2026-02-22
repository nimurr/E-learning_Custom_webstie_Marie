"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Capsules from '@/Components/Cards/Capsules';

const data = [
    {
        title: 'Digital Marketing',
        discription: 'A gentle journey from career uncertainty to aligned purpose, guided by cosmic wisdom and human connection',
        type: 'Intermediate Level',
        image: '/Images/Cards/card-image.png',
        price: 40,
        totalRatings: 52,
        avgRating: 4.5,

    },
    {
        title: 'Advanced Product Design Management ',
        discription: 'A gentle journey from career uncertainty to aligned purpose, guided by cosmic wisdom and human connection',
        type: 'Intermediate Level',
        image: '/Images/Cards/card-image.png',
        price: 45,
        totalRatings: 78,
        avgRating: 4.6,
    },
    {
        title: 'Advanced Product Design Management ',
        discription: 'A gentle journey from career uncertainty to aligned purpose, guided by cosmic wisdom and human connection',
        type: 'Intermediate Level',
        image: '/Images/Cards/card-image.png',
        price: 45,
        totalRatings: 78,
        avgRating: 4.6,
    },
    {
        title: 'Advanced Product Design Management ',
        discription: 'A gentle journey from career uncertainty to aligned purpose, guided by cosmic wisdom and human connection',
        type: 'Intermediate Level',
        image: '/Images/Cards/card-image.png',
        price: 45,
        totalRatings: 78,
        avgRating: 4.6,
    },
    {
        title: 'Web Development & Design',
        discription: 'A gentle journey from career uncertainty to aligned purpose, guided by cosmic wisdom and human connection A gentle journey from career uncertainty to aligned purpose, guided by cosmic wisdom and human connection',
        type: 'Intermediate Level',
        image: '/Images/Cards/card-image.png',
        price: 60,
        totalRatings: 45,
        avgRating: 4.5,
    },
    {
        title: 'Web Development & Design',
        discription: 'A gentle journey from career uncertainty to aligned purpose, guided by cosmic wisdom and human connection A gentle journey from career uncertainty to aligned purpose, guided by cosmic wisdom and human connection',
        type: 'Intermediate Level',
        image: '/Images/Cards/card-image.png',
        price: 150,
        totalRatings: 45,
        avgRating: 4.5,
    }
]



const PurchasedCapsules = () => {
    return (
        <div className='max-w-7xl mx-auto my-10 bg-gray-100 rounded-2xl p-5 lg:p-10'>

            <h2 className="text-4xl font-bold text-center text-primary mb-6">🔥 Purchased Capsules</h2>
            <CategoryCarosal />

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-3'>
                {
                    data.map((item, index) => <Capsules key={index} item={item} />)
                }
            </div>
        </div>
    );
}

export default PurchasedCapsules;



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

export { CategoryCarosal };
