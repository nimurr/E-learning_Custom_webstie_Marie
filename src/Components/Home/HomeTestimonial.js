import React from 'react';
import TestimonialCard from '../Cards/TestimonialCard';

const HomeTestimonial = () => {

    const data = [
        {
            userName: 'John Doe',
            userImg: '/Images/Home/Testimonial/user.png',
            userDesignation: 'CEO, Propulsaria',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
            rating: 5
        },
        {
            userName: 'John Doe',
            userImg: '/Images/Home/Testimonial/user.png',
            userDesignation: 'CEO, Propulsaria',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
            rating: 4
        },
        {
            userName: 'John Doe',
            userImg: '/Images/Home/Testimonial/user.png',
            userDesignation: 'CEO, Propulsaria',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
            rating: 4
        },
    ]

    return (
        <div className='my-20 lg:my-32 px-4'>
            <div className='text-center max-w-3xl mx-auto'>
                <h2 className="text-2xl lg:text-3xl font-semibold text-primary">
                    For Mentors To Share Your Starlight
                </h2>
                <p className="mt-4 text-gray-700 ">
                    A gentle, guided progression toward career clarity
                </p>
            </div>

            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    data.map((item, index) =>
                        <TestimonialCard item={item} key={index} />
                    )
                }
            </div>

        </div>
    );
}

export default HomeTestimonial;
