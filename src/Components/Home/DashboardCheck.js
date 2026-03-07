import React from 'react';

const DashboardCheck = () => {
    return (
        <div className='lg:py-20 py-10 '>
            <h2 className='text-3xl text-center py-10 text-white'>What your <span className='text-orange-400'>Dashboard Check</span> reveals</h2>
            <div className='grid items-center grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-5'>
                <img className='w-full' src="/Images/Home/dashboard_ck.png" alt="" />
                <div className='text-white p-5'>
                    <p className='text-gray-300'>Your personal dashboard helps you understand what is really <br /> happening in your professional life.</p>
                    <br />
                    <span className='p-4 border-orange-400 rounded-lg bg-orange-500/20 block border my-2'>🎯 Alignment signals</span>
                    <span className='p-4 border-orange-400 rounded-lg bg-orange-500/20 block border my-2'>⚡ Energy level</span>
                    <span className='p-4 border-orange-400 rounded-lg bg-orange-500/20 block border my-2'>🔍 Main tension points</span>
                </div>
            </div>
        </div>
    );
}

export default DashboardCheck;
