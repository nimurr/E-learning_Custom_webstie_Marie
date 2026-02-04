import Capsules from '@/Components/Cards/Capsules';
import CategoryCarosal from '@/Components/Cards/CategoryCarosal';
import React from 'react';

const LearningCapsules = () => {

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

    return (
        <div className=' bg-white max-w-6xl mx-auto rounded-2xl lg:p-10 p-5 mt-10'>
            <h2 className="text-4xl lg:text-5xl text-center font-semibold text-primary">
                Explore Our Capsules
            </h2>
            {/* carosal with lg:grid-cols-8 item show swiper */}
            <div>
                <CategoryCarosal />
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-3'>
                {
                    data.map((item, index) => <Capsules key={index} item={item} />)
                }
            </div>
        </div>
    );
}

export default LearningCapsules;
