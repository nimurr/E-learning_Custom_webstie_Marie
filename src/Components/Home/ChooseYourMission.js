import React from 'react';

const ChooseYourMission = () => {
    return (
        <div className='lg:py-20 py-10 relative'>
            <h2 className='text-4xl font-semibold text-white text-center mb-10'>Pour <span className='text-orange-400'>qui c’est</span></h2>
            <img className='lg:w-72 lg:block hidden absolute top-0 left-0' src="/Images/Home/whoItsFor.png" alt="" />
            <div className='max-w-5xl mx-auto'>
                <div className='grid lg:grid-cols-2 gap-5'>
                    <div className='bg-blue-400/10 p-5 rounded-lg border border-orange-400'>
                        <h3 className='text-white my-5 flex items-center justify-between text-2xl'>Pour les particuliers<span className='text-5xl'>🤖</span></h3>

                        <ul className='text-gray-300 space-y-2'>
                            <li><span className='h-1 w-1 bg-orange-400 rounded-full clear-start inline-block'></span> Bilan de tableau de bord gratuit</li>
                            <li><span className='h-1 w-1 bg-orange-400 rounded-full clear-start inline-block'></span> Parcours d’expédition</li>
                            <li><span className='h-1 w-1 bg-orange-400 rounded-full clear-start inline-block'></span> Accompagnement mentor optionnel</li>
                        </ul>

                        <button className='py-3 w-full text-center font-semibold bg-orange-500 text-white mt-5 rounded-lg'>Commencez votre exploration</button>
                    </div>
                    <div className='bg-blue-400/10 p-5 rounded-lg border border-orange-400'>
                        <h3 className='text-white my-5 flex items-center justify-between text-2xl'>Pour les entreprises <span className='text-5xl'>🏭</span></h3>

                        <ul className='text-gray-300 space-y-2'>
                            <li><span className='h-1 w-1 bg-orange-400 rounded-full clear-start inline-block'></span> Détecter les premiers signaux de désalignement</li>
                            <li><span className='h-1 w-1 bg-orange-400 rounded-full clear-start inline-block'></span> Anticiper le désengagement avant la rupture</li>
                            <li><span className='h-1 w-1 bg-orange-400 rounded-full clear-start inline-block'></span> Proposer un parcours structuré d’alignement pour les employés</li>
                        </ul>
                        <span className='text-orange-400 my-5 block'>⭐ Solution entreprise bientôt disponible</span>
                        <button className='py-3 w-full text-center border font-semibold border-orange-500 bg-orange-400/20 text-orange-400  mt-5 rounded-lg'>Découvrez les solutions pour les entreprises</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseYourMission;
