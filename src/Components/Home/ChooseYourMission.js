import React from 'react';

const ChooseYourMission = () => {
    return (
        <div className='lg:py-20 py-10 relative'>
            <h2 className='text-4xl font-semibold text-white text-center mb-10'>Who <span className='text-orange-400'>it's for</span></h2>
            <img className='lg:w-72 lg:block hidden absolute top-0 left-0' src="/Images/Home/whoItsFor.png" alt="" />
            <div className='max-w-5xl mx-auto'>
                <div className='grid lg:grid-cols-2 gap-5'>
                    <div className='bg-blue-400/10 p-5 rounded-lg border border-orange-400'>
                        <h3 className='text-white my-5 flex items-center justify-between text-2xl'>For Individuals <span className='text-5xl'>🤖</span></h3>

                        <ul className='text-gray-300 space-y-2'>
                            <li><span className='h-1 w-1 bg-orange-400 rounded-full clear-start inline-block'></span> Free Dashboard Check</li>
                            <li><span className='h-1 w-1 bg-orange-400 rounded-full clear-start inline-block'></span> Expedition Path</li>
                            <li><span className='h-1 w-1 bg-orange-400 rounded-full clear-start inline-block'></span> Optional mentor support</li>
                        </ul>

                        <button className='py-3 w-full text-center font-semibold bg-orange-500 text-white mt-5 rounded-lg'>Start your exploration</button>
                    </div>
                    <div className='bg-blue-400/10 p-5 rounded-lg border border-orange-400'>
                        <h3 className='text-white my-5 flex items-center justify-between text-2xl'>For Companies <span className='text-5xl'>🏭</span></h3>

                        <ul className='text-gray-300 space-y-2'>
                            <li><span className='h-1 w-1 bg-orange-400 rounded-full clear-start inline-block'></span> Detect early misalignment signals</li>
                            <li><span className='h-1 w-1 bg-orange-400 rounded-full clear-start inline-block'></span> Anticipate disengagement before rupture</li>
                            <li><span className='h-1 w-1 bg-orange-400 rounded-full clear-start inline-block'></span> Provide a structured alignment journey for employees</li>
                        </ul>
                        <span className='text-orange-400 my-5 block'>⭐ Corporate solution launching soon</span>
                        <button className='py-3 w-full text-center border font-semibold border-orange-500 bg-orange-400/20 text-orange-400  mt-5 rounded-lg'>Discover corporate solutions</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseYourMission;
