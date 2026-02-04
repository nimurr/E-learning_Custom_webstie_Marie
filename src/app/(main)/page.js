'use client';
import ExpertGuideMentor from '@/Components/Home/ExpertGuideMentor';
import ExploreOurCapsules from '@/Components/Home/ExploreOurCapsules';
import Hero from '@/Components/Home/Hero';
import HomeTestimonial from '@/Components/Home/HomeTestimonial';
import YourPathThrough from '@/Components/Home/YourPathThrough';
import React from 'react';

const Page = () => {


    return (
        <div className=''>
            <Hero />
            <div className='container mx-auto'>
                <YourPathThrough />
                <ExploreOurCapsules />
                <ExpertGuideMentor />
                <HomeTestimonial />
            </div>
        </div>
    );
}

export default Page;
