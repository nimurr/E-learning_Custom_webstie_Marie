import React from 'react';

const DashboardCheck = () => {
    return (
        <div className='lg:py-20 py-10 '>
            <h2 className='text-3xl text-center py-10 text-white'>Ce que <span className='text-orange-400'>révèle votre </span> Dashboard Check</h2>
            <div className='grid items-center grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-5'>
                <img className='w-full' src="/Images/Home/dashboard_ck.png" alt="" />
                <div className='text-white p-5'>
                    <p className='text-gray-300'>Votre tableau de bord personnel vous aide à comprendre <br /> ce qui se passe réellement dans votre vie professionnelle.</p>
                    <br />
                    <span className='p-4 border-orange-400 rounded-lg bg-orange-500/20 block border my-2'>🎯 Signaux d’alignement</span>
                    <span className='p-4 border-orange-400 rounded-lg bg-orange-500/20 block border my-2'>⚡ Niveau d’énergie</span>
                    <span className='p-4 border-orange-400 rounded-lg bg-orange-500/20 block border my-2'>🔍 Principaux points de tension</span>
                </div>
            </div>
        </div>
    );
}

export default DashboardCheck;
