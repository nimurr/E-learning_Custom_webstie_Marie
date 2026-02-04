import React from 'react';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


const ExpertGuideMentor = () => {
    return (
        <div className='my-20 lg:my-32 px-4 grid lg:grid-cols-3 gap-5'>
            <div className='lg:col-span-2'>
                <div>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-primary">
                        If You Are An Expert Guide Then Become A Cosmic <span className='text-orange-500'>Mentor</span>
                    </h2>
                    <p className="mt-4 text-gray-700 ">
                        Illuminate professional paths and guide fellow explorers by joining our constellation of mentors. If you've navigated your own career universe, help others chart their course among the stars.Journey With Purpose:
                    </p>
                </div>
                <div className='my-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        [1, 2, 3, 4, 5, 6].map((item, index) =>
                            <div className='flex gap-3 p-3'>
                                <IoIosCheckmarkCircleOutline className='text-3xl' />
                                <div>
                                    <h2 className='mb-2 font-medium'>Meaningful Impact</h2>
                                    <p className='text-gray-500'>Light the way for professionals seeking direction.</p>
                                </div>
                            </div>
                        )
                    }
                </div>

                <button className='px-10 customSignUpButton py-4 rounded-lg text-white'>Begin Your Mentorship Journey</button>

            </div>
            <div className='lg:col-span-1'>
                <img className='w-full' src="/Images/Home/Others/avatar.png" alt="" />
            </div>
        </div>
    );
}

export default ExpertGuideMentor;
