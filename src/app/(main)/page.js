'use client';
import Hero from '@/Components/Home/Hero';
import Loading from '@/Components/others/Loading';
import { useGetDemoDataQuery } from '@/redux/fetures/Demo/demoDataGet';
import React from 'react';

const Page = () => {


    return (
        <div className=''>
            <Hero />
        </div>
    );
}

export default Page;
