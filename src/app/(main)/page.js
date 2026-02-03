'use client';
import Loading from '@/Components/others/Loading';
import { useGetDemoDataQuery } from '@/redux/fetures/Demo/demoDataGet';
import React from 'react';

const Page = () => {


    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl font-semibold bg-primary text-center my-10 rounded-md py-2'>Demo Api Data Get For Check Rediux </h2>
           
        </div>
    );
}

export default Page;
