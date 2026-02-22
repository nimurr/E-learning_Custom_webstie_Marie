import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { HiStar } from 'react-icons/hi2';

const Capsules = ({ item }) => {

    return (
        <div className='border rounded-xl h-full flex flex-col'>
            <img
                className='rounded-t-xl h-60 object-cover w-full'
                src={item.image}
                alt=""
            />

            <div className='p-5 flex flex-col justify-between flex-1'>
                <div>
                    <span className='flex items-center gap-2'>
                        <HiStar className='text-orange-500 text-2xl' />
                        {item?.avgRating} ({item.totalRatings})
                    </span>

                    <h1 className='my-3 text-2xl font-semibold text-primary'>
                        {item?.title}
                    </h1>

                    <p className='text-gray-500'>{item?.discription}</p>
                </div>

                <div>
                    <hr className='my-3' />
                    <button className='w-full flex items-center justify-between'>
                        <span className='text-xl font-semibold'>
                            ${item?.price}
                        </span>
                        <FaArrowRight className='text-2xl text-primary' />
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Capsules;
