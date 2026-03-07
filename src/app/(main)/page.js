'use client';
import AlignmentFramework from '@/Components/Home/AlignmentFramework';
import ChooseYourMission from '@/Components/Home/ChooseYourMission';
import CosmicEcosystem from '@/Components/Home/CosmicEcosystem';
import DashboardCheck from '@/Components/Home/DashboardCheck';
import ExpertGuideMentor from '@/Components/Home/ExpertGuideMentor';
import ExploreOurCapsules from '@/Components/Home/ExploreOurCapsules';
import Hero from '@/Components/Home/Hero';
import HomeTestimonial from '@/Components/Home/HomeTestimonial';
import Theirprofessionallife from '@/Components/Home/Theirprofessionallife';
import YourPathThrough from '@/Components/Home/YourPathThrough';
import React from 'react';

const Page = () => {


    return (
        <div className=''>
            <Hero />
            <div className='container mx-auto'>
                <Theirprofessionallife />
                <DashboardCheck />
                <AlignmentFramework />
                <YourPathThrough />
                <ChooseYourMission />
                <CosmicEcosystem />
                {/* <ExploreOurCapsules />
                <ExpertGuideMentor />
                <HomeTestimonial /> */}
            </div>
        </div>
    );
}

export default Page;
