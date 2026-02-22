import Capsules from '@/Components/Cards/Capsules';
import React from 'react';

const data = [
    {
        title: 'Digital Marketing',
        discription: 'A gentle journey from career uncertainty to aligned purpose, guided by cosmic wisdom and human connection',
        type: 'Intermediate Level',
        image: '/Images/Cards/card-image.png',
        price: 40,
        totalRatings: 52,
        avgRating: 4.5,
    }
]


const PurchasedGiftedCapsules = () => {
    return (
        <div className='max-w-7xl mx-auto my-10 bg-gray-100 rounded-2xl p-5 lg:p-10'>
            <h2 className="text-4xl font-bold text-center text-primary mb-6">🎁  Gifted Capsules</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 justify-center gap-3'>
                {
                    data.map((item, index) => <Capsules key={index} item={item} />)
                }
            </div>
        </div>
    );
}

export default PurchasedGiftedCapsules;
