import React from 'react';

const CosmicEcosystem = () => {
    return (
        <div className='lg:py-20 py-10'>
            <h2 className='text-3xl text-center font-semibold py-10 text-white'>Un écosystème <span className='text-orange-400'>cosmique structuré</span></h2>
            <div className='text-gray-300 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                <div className="text-white text-center border p-10 border-orange-300 rounded-xl bg-gradient-to-b from-orange-400/20 to-black/20">
                    <span className='text-5xl'>🤖</span>
                    <h3 className='text-white text-xl my-5'>Les Explorateurs</h3>
                    <p className='text-gray-400'>Les personnes réfléchissant à leur parcours professionnel.</p>
                </div>
                <div className="text-white text-center border p-10 border-orange-300 rounded-xl bg-gradient-to-b from-orange-400/20 to-black/20">
                    <span className='text-5xl'>✨</span>
                    <h3 className='text-white text-xl my-5'>Les Promoteurs</h3>
                    <p className='text-gray-400'>Des amis bienveillants qui recommandent la plateforme.</p>
                </div>
                <div className="text-white text-center border p-10 border-orange-300 rounded-xl bg-gradient-to-b from-orange-400/20 to-black/20">
                    <span className='text-5xl'>⭐</span>
                    <h3 className='text-white text-xl my-5'>Les Mentors</h3>
                    <p className='text-gray-400'>Des professionnels sélectionnés guidant les utilisateurs.</p>
                </div>
                <div className="text-white text-center border p-10 border-orange-300 rounded-xl bg-gradient-to-b from-orange-400/20 to-black/20">
                    <span className='text-5xl'>🏭</span>
                    <h3 className='text-white text-xl my-5'>Les Entreprises</h3>
                    <p className='text-gray-400'>Les organisations prévenant le désengagement.</p>
                </div>

            </div>
        </div>
    );
}

export default CosmicEcosystem;
