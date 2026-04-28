




"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Capsules from '@/Components/Cards/Capsules';
import { useGetMySuggestedCapsuleQuery } from '@/redux/fetures/capsules/capsules';



const PurchasedGiftedCapsules = () => {
    const type = 'gifted';
    const { data: capsules } = useGetMySuggestedCapsuleQuery(type);
    const fullData = capsules?.data;
    console.log(fullData)
 

    return (
        <div className='max-w-7xl mx-auto my-10 bg-gray-100 rounded-2xl p-5 lg:p-10'>

            <h2 className="text-4xl font-bold text-center text-primary mb-6">Gifted Capsules</h2>


            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-3'>
                {
                    fullData?.map((item, index) => <Capsules key={index} item={item} />)
                }
            </div>
            <div>
                {
                    !fullData?.length && <h2 className='text-center   font-semibold text-red-500 my-10'>No Capsules Purchased</h2>
                }
            </div>
        </div>
    );
}

export default PurchasedGiftedCapsules;



