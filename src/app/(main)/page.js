'use client';
import ExpertGuideMentor from '@/Components/Home/ExpertGuideMentor';
import ExploreOurCapsules from '@/Components/Home/ExploreOurCapsules';
import Hero from '@/Components/Home/Hero';
import YourPathThrough from '@/Components/Home/YourPathThrough';
import Loading from '@/Components/others/Loading';
import { useGetDemoDataQuery } from '@/redux/fetures/Demo/demoDataGet';
import React from 'react';

const Page = () => {


    return (
        <div className=''>
            <Hero />
            <div className='container mx-auto'>
                <YourPathThrough />
                <ExploreOurCapsules />
                <ExpertGuideMentor />
            </div>
        </div>
    );
}

export default Page;
