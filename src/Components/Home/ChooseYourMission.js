import React from 'react';

const ChooseYourMission = () => {
    return (
        <div className='lg:py-20 py-10 relative'>
            <h2 className='text-4xl font-semibold text-white text-center mb-10'>Pour toi,
                <span className='text-orange-400'>si tu te poses des questions professionnelles</span></h2>
            <img className='lg:w-72 lg:block hidden absolute top-0 left-0' src="/Images/Home/whoItsFor.png" alt="" />
            <div className='max-w-5xl mx-auto'>
                <div className='grid lg:grid-cols-2 gap-5'>
                    <div className='bg-blue-400/10 p-5 rounded-lg border border-orange-400'>
                        <h3 className='text-white my-5 flex items-center justify-between text-2xl'>Pour les particuliers<span className='text-5xl'>🤖</span></h3>

                        <ul className='text-gray-300 space-y-2'>
                            <li><span className='h-1 w-1 bg-orange-400 rounded-full clear-start inline-block'></span> Faire le point sur ta situation actuelle</li>
                            <li><span className='h-1 w-1 bg-orange-400 rounded-full clear-start inline-block'></span> Comprendre ce qui te freine ou t’épuise</li>
                            <li><span className='h-1 w-1 bg-orange-400 rounded-full clear-start inline-block'></span> Clarifier ta direction professionnelle</li>
                        </ul>

                        <button className='py-3 w-full text-center font-semibold bg-orange-500 text-white mt-5 rounded-lg'>🚀 Faire mon bilan gratuit</button>
                    </div>
                    <div className='bg-blue-400/10 p-5 rounded-lg border border-orange-400'>
                        <h3 className='text-white my-5 flex items-center justify-between text-2xl'>Pour les entreprises <span className='text-5xl'>🏭</span></h3>

                        <ul className='text-gray-300 space-y-2'>
                            <li><span className='h-1 w-1 bg-orange-400 rounded-full clear-start inline-block'></span> Détecter les premiers signaux de désengagement</li>
                            <li><span className='h-1 w-1 bg-orange-400 rounded-full clear-start inline-block'></span> Mieux comprendre les dynamiques internes</li>
                            <li><span className='h-1 w-1 bg-orange-400 rounded-full clear-start inline-block'></span> Agir avant les départs et les pertes de motivation</li>
                        </ul>
                        <span className='text-orange-400 my-5 block'>⭐ Déploiement en cours – possibilité d’échanges dès maintenant</span>
                        <button className='py-3 w-full text-center border font-semibold border-orange-500 bg-orange-400/20 text-orange-400  mt-5 rounded-lg'>🔍 Échanger sur vos enjeux</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseYourMission;
