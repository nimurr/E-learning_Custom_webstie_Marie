'use client';

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { useGetAllCapsulesCategoryQuery, } from '@/redux/fetures/capsules/capsules';

const CategoryCarosal = () => {

    const { data, isLoading } = useGetAllCapsulesCategoryQuery();

    console.log(data)

    useEffect(() => {
        // set id in serarch perams for get all capsules first category
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('category', data?.data[0]?._id);
        const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
        window.history.replaceState(null, '', newUrl);

    }, [data]);
    
    if (isLoading) {
        return <p className="text-center py-5">Loading...</p>;
    }


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
                {data?.data?.map((item) => (
                    <SwiperSlide key={item._id}>
                        <div className="flex items-center justify-center gap-2 overflow-hidden px-4 py-2 border rounded-full bg-white shadow-sm hover:shadow-md transition cursor-pointer whitespace-nowrap">

                            {/* Thumbnail */}
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-6 h-6 rounded-full object-cover"
                            />

                            {/* Title */}
                            <span className="text-sm font-medium text-gray-700">
                                {item.title.length > 20
                                    ? item.title.slice(0, 20) + '...'
                                    : item.title}
                            </span>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CategoryCarosal;