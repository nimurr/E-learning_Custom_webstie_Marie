'use client';

import Capsules from '@/Components/Cards/Capsules';
import CategoryCarosal from '@/Components/Cards/CategoryCarosal';
import { useGetAllCapsulesbyIdQuery } from '@/redux/fetures/capsules/capsules'; 
import React from 'react';
import { useSearchParams } from 'next/navigation';

const LearningCapsules = () => {

    const searchParams = useSearchParams();
    const id = searchParams.get('category');

    const { data: capsule } = useGetAllCapsulesbyIdQuery(
        { categoryId: id }
    );

    console.log(capsule)

    return (
        <div className=' bg-white max-w-6xl mx-auto rounded-2xl lg:p-10 p-5 mt-10'>
            <h2 className="text-4xl lg:text-5xl text-center font-semibold text-primary">
                Explore Our Capsules
            </h2>

            <div>
                <CategoryCarosal />
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-3'>
                {
                    capsule?.data?.map((item) => (
                        <Capsules key={item._id} item={item} />
                    ))
                }
            </div>
        </div>
    );
}

export default LearningCapsules;