import React from 'react';

const YourExploration = () => {
    return (
        <div className='lg:py-20 py-10 relative'>
            <h2 className='text-4xl font-semibold text-white text-center mb-10'>Go deeper in your <span className='text-orange-400'>exploration</span></h2>
            <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='bg-blue-950/25 p-5 rounded-lg border border-orange-400/20'>
                    <h1 className='text-xl font-semibold text-white'>Expedition Path</h1>
                    <p className='text-gray-300 mt-5 flex items-center gap-2'><span className='h-1.5 w-1.5 rounded-full inline-block bg-orange-400'></span>A structured step-by-step journey</p>
                </div>
                <div className='bg-blue-950/25 p-5 rounded-lg border border-orange-400/20'>
                    <h1 className='text-xl font-semibold text-white'>Expedition Path</h1>
                    <p className='text-gray-300 mt-5 flex items-center gap-2'><span className='h-1.5 w-1.5 rounded-full inline-block bg-orange-400'></span>A structured step-by-step journey</p>
                </div>
            </div>
            <img className='absolute bottom-0 right-0 w-60 lg:block hidden' src="/Images/Home/4648654D-4885-4FF7-BCED-519D37E225EB.png" alt="" />
        </div>
    );
}

export default YourExploration;
