'use client';
import AlignmentFramework from '@/Components/Home/AlignmentFramework';
import ChooseYourMission from '@/Components/Home/ChooseYourMission';
import CosmicEcosystem from '@/Components/Home/CosmicEcosystem';
import DashboardCheck from '@/Components/Home/DashboardCheck';
import ExpertGuideMentor from '@/Components/Home/ExpertGuideMentor';
import ExploreOurCapsules from '@/Components/Home/ExploreOurCapsules';
import ForMentors from '@/Components/Home/ForMentors';
import Hero from '@/Components/Home/Hero';
import HomeTestimonial from '@/Components/Home/HomeTestimonial';
import Knowsomeone from '@/Components/Home/Knowsomeone';
import Mostcompanies from '@/Components/Home/Mostcompanies';
import Theirprofessionallife from '@/Components/Home/Theirprofessionallife';
import WhatExplorersSay from '@/Components/Home/WhatExplorersSay';
import YourExploration from '@/Components/Home/YourExploration';
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
                <YourExploration />
                <WhatExplorersSay />
                <ForMentors />
                <Knowsomeone />
                <Mostcompanies />
                {/* <ExploreOurCapsules />
                <ExpertGuideMentor />
                <HomeTestimonial /> */}
            </div>
        </div>
    );
}

export default Page;
