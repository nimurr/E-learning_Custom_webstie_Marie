import React from 'react';

const Knowsomeone = () => {
    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7" stroke="#4a9eff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 6l-4-4-4 4" stroke="#4a9eff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 2v13" stroke="#4a9eff" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            ),
            text: 'Share the free Dashboard Check',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#a0aec0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            text: 'Encourage reflection without pressure',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="M12 8C10 5 6 5 6 8c0 2 2 4 6 7 4-3 6-5 6-7 0-3-4-3-6 0z" fill="#f5a623" stroke="#f5a623" strokeWidth="1" strokeLinejoin="round" />
                    <path d="M9 3.5C9.5 2.5 10.5 2 12 2s2.5.5 3 1.5" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M9 20.5C9.5 21.5 10.5 22 12 22s2.5-.5 3-1.5" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M3.5 9C2.5 9.5 2 10.5 2 12s.5 2.5 1.5 3" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M20.5 9C21.5 9.5 22 10.5 22 12s-.5 2.5-1.5 3" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
            text: 'Support them without replacing a professional',
        },
    ];

    return (
        <div className=" p-6 lg:py-20 flex items-center justify-center py-10 relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[
                    { top: '8%', left: '6%' }, { top: '12%', right: '12%' },
                    { top: '30%', right: '5%' }, { top: '48%', left: '4%' },
                    { top: '55%', right: '3%' }, { top: '70%', left: '8%' },
                    { top: '85%', right: '8%' }, { top: '92%', left: '3%' },
                ].map((pos, i) => (
                    <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-white opacity-40" style={pos} />
                ))}
            </div>

            <img className='absolute bottom-0 right-0 w-72 lg:block hidden' src="/Images/Home/357D7696-C6E7-40CA-9F3A-A7818B42392F.png" alt="" />

            <div>
                <div className="text-5xl text-center select-none" style={{ filter: 'drop-shadow(0 0 12px rgba(255,180,0,0.5))' }}>
                    🚀
                </div>

                <div className="text-center my-10 max-w-3xl">
                    <h1 className="text-4xl font-bold text-white">
                        Know someone who feels <span style={{ color: '#f5a623' }}>lost</span> at work?
                    </h1>
                    <p className="mt-2" style={{ color: '#8898b8' }}>
                        Sometimes people around us see the misalignment before we do.
                        Recommend the Dashboard Check to someone you care about.
                    </p>
                </div>

                <div className="relative w-full max-w-md mx-auto flex flex-col items-center gap-6">
                    <div className="w-full flex flex-col gap-3">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 px-5 py-4 rounded-xl bg-red-900/20 border border-red-600/20"
                            >
                                <div className="flex-shrink-0">{feature.icon}</div>
                                <span className="text-white text-sm font-medium">{feature.text}</span>
                            </div>
                        ))}
                    </div>

                    <button
                        className="w-3/4 py-3.5 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90 active:scale-95"
                        style={{
                            background: 'linear-gradient(135deg, #f5a623 0%, #e8870a 100%)',
                            boxShadow: '0 4px 20px rgba(245,166,35,0.35)',
                        }}
                    >
                        Recommend the Dashboard Check
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Knowsomeone;