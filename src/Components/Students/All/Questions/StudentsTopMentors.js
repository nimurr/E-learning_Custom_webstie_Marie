import Capsules from '@/Components/Cards/Capsules';
import CategoryCarosal from '@/Components/Cards/CategoryCarosal';
import Mentors from '@/Components/Cards/Mentors';
import React from 'react';

const StudentsTopMentors = () => {
    const mentorData = [
        {
            title: 'Web Development & Design',
            type: 'Intermediate Level',
            image: '/Images/StudentsDash/mentorsImaeg.png'
        },
        {
            title: 'Web Development & Design',
            type: 'Intermediate Level',
            image: '/Images/StudentsDash/mentorsImaeg.png'
        },
        {
            title: 'Web Development & Design',
            type: 'Intermediate Level',
            image: '/Images/StudentsDash/mentorsImaeg.png'
        },
        {
            title: 'Web Development & Design',
            type: 'Intermediate Level',
            image: '/Images/StudentsDash/mentorsImaeg.png'
        },
        {
            title: 'Web Development & Design',
            type: 'Intermediate Level',
            image: '/Images/StudentsDash/mentorsImaeg.png'
        },
        {
            title: 'Web Development & Design',
            type: 'Intermediate Level',
            image: '/Images/StudentsDash/mentorsImaeg.png'
        },
    ]


    return (
        <div className='bg-white max-w-6xl mx-auto rounded-2xl lg:p-10 p-5 mt-10'>

            <div>
                <CategoryCarosal />
            </div>
            <div className='grid lg:grid-cols-3 gap-3'>
                {
                    mentorData.map((item, index) => <Mentors key={index} item={item} />)
                }
            </div>

        </div>
    );
}

export default StudentsTopMentors;
