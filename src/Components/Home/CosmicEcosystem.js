import React from 'react';

const CosmicEcosystem = () => {
    return (
        <div className='lg:py-20 py-10'>
            <h2 className='text-3xl text-center font-semibold py-10 text-white'>A Structured <span className='text-orange-400'>Cosmic Ecosystem</span></h2>
            <div className='text-gray-300 grid grid-cols-4 gap-5 my-10'>
                <div className="text-white text-center border p-10 border-orange-300 rounded-xl bg-gradient-to-b from-orange-400/20 to-black/20">
                    <span className='text-5xl'>🤖</span>
                    <h3 className='text-white text-xl my-5'>The Explorers</h3>
                    <p className='text-gray-400'>People reflecting on their professional path.</p>
                </div>
                <div className="text-white text-center border p-10 border-orange-300 rounded-xl bg-gradient-to-b from-orange-400/20 to-black/20">
                    <span className='text-5xl'>✨</span>
                    <h3 className='text-white text-xl my-5'>The Boosters</h3>
                    <p className='text-gray-400'>Supportive friends who recommend the platform.</p>
                </div>
                <div className="text-white text-center border p-10 border-orange-300 rounded-xl bg-gradient-to-b from-orange-400/20 to-black/20">
                    <span className='text-5xl'>⭐</span>
                    <h3 className='text-white text-xl my-5'>The Mentors</h3>
                    <p className='text-gray-400'>Selected professionals guiding users.</p>
                </div>
                <div className="text-white text-center border p-10 border-orange-300 rounded-xl bg-gradient-to-b from-orange-400/20 to-black/20">
                    <span className='text-5xl'>🏭</span>
                    <h3 className='text-white text-xl my-5'>The Companies</h3>
                    <p className='text-gray-400'>Organizations preventing disengagement.</p>
                </div>

            </div>
        </div>
    );
}

export default CosmicEcosystem;
