import Link from 'next/link';
import React from 'react';

const YourPersonalizedSummary = () => {
    return (
        <div className="relative z-10 max-w-6xl mx-auto bg-white rounded-xl lg:p-10 p-5">
            <h2 className="text-xl lg:text-3xl font-semibold mb-3 text-primary text-center">🧠 YOUR PERSONALIZED SUMMARY</h2>
            <div className='flex items-center gap-5'>
                <img className='w-10' src="/Images/StudentsDash/Questions_Response/qs1.png" alt="" />
                <div className='border w-full border-blue-100 bg-blue-50 p-5 rounded-2xl'>
                    <h3>Values</h3>
                    <hr className='h-1 my-5' />
                    <p>Your professional compass is guided by:</p>

                    <ul className='my-3'>
                        <li>Creativity – You need space to imagine and build</li>
                        <li>Balance – Work-life harmony is non-negotiable</li>
                        <li>Impact – You want your work to contribute meaningfully</li>
                        <li>Autonomy – Freedom to direct your own path</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center gap-5 mt-5'>
                <img className='w-10' src="/Images/StudentsDash/Questions_Response/qs2.png" alt="" />
                <div className='border w-full border-orange-100 bg-orange-50 p-5 rounded-2xl'>
                    <h3>Values</h3>
                    <hr className='h-1 my-5' />
                    <p>Your professional compass is guided by:</p>

                    <ul className='my-3'>
                        <li>Creativity – You need space to imagine and build</li>
                        <li>Balance – Work-life harmony is non-negotiable</li>
                        <li>Impact – You want your work to contribute meaningfully</li>
                        <li>Autonomy – Freedom to direct your own path</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center gap-5 mt-5'>
                <img className='w-10' src="/Images/StudentsDash/Questions_Response/qs3.png" alt="" />
                <div className='border w-full border-red-100 bg-red-50 p-5 rounded-2xl'>
                    <h3>Values</h3>
                    <hr className='h-1 my-5' />
                    <p>Your professional compass is guided by:</p>

                    <ul className='my-3'>
                        <li>Creativity – You need space to imagine and build</li>
                        <li>Balance – Work-life harmony is non-negotiable</li>
                        <li>Impact – You want your work to contribute meaningfully</li>
                        <li>Autonomy – Freedom to direct your own path</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center gap-5 mt-5'>
                <img className='w-10' src="/Images/StudentsDash/Questions_Response/qs4.png" alt="" />
                <div className='border w-full border-green-100 bg-green-50 p-5 rounded-2xl'>
                    <h3>Values</h3>
                    <hr className='h-1 my-5' />
                    <p>Your professional compass is guided by:</p>

                    <ul className='my-3'>
                        <li>Creativity – You need space to imagine and build</li>
                        <li>Balance – Work-life harmony is non-negotiable</li>
                        <li>Impact – You want your work to contribute meaningfully</li>
                        <li>Autonomy – Freedom to direct your own path</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center justify-between w-full my-5 gap-5'>
                <Link href="/students/capsule-journey" className='px-8 flex items-center justify-center w-full customSignUpButton py-3 rounded-lg text-white'>Continue with the Exploration Journey</Link>
                <Link href="/students/recommended-mentors" className='px-8 flex items-center justify-center w-full customSignUpButton py-3 rounded-lg text-white'>Be connected with aligned mentors</Link>
            </div>
            <Link href="/students/my-account" className='px-8 w-full block text-center border border-primary  py-3 rounded-lg text-primary'>Continue on my own</Link>
        </div>
    );
}

export default YourPersonalizedSummary;
