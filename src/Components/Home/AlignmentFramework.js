import React from 'react';

const AlignmentFramework = () => {
    return (
        <div className='lg:py-20 py-10 text-center relative'>
            <div className='px-20'>
                <h2 className='text-4xl font-semibold text-white'>The <span className='text-orange-400 '>Alignment Framework</span></h2>
                <p className='my-10 text-gray-300'>La Propulserie is built from years of observing professional trajectories, disengagement signals and career transitions. It combines HR insight, <br /> introspection tools and structured guidance to help people clarify their professional direction. </p>
                <span className='p-4 border-orange-400 rounded-lg bg-orange-500/20 block border  max-w-[700px] mx-auto text-orange-400 font-semibold'>Framework built from 15+ years in Human Resources and real professional situations.</span>
            </div>

            <img className='absolute bottom-0 right-0 w-60 lg:block hidden' src="/Images/Home/Framework.png" alt="" />
        </div>
    );
}

export default AlignmentFramework;
