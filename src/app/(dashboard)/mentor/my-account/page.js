'use client';
import Basicinfo from '@/Components/mentors/All/Basicinfo';
import FAQTab from '@/Components/Students/Mentors/FAQTab';
import PrivacyTab from '@/Components/Students/Mentors/PrivacyTab';
import TermsTab from '@/Components/Students/Mentors/TermsTab';
import React, { useState } from 'react';

const tabs = [ 
    { label: 'Basic info', component: <Basicinfo /> },
    { label: 'Specialties', component: <TermsTab /> },
    { label: 'Values', component: <TermsTab /> },
    { label: 'Focus Area', component: <TermsTab /> },
    { label: 'Mentor To', component: <TermsTab /> },
    { label: 'Industry', component: <PrivacyTab /> },
    { label: 'Methodology', component: <FAQTab /> },
    { label: 'Subscription', component: <FAQTab /> },
];

const Page = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="p-6">
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                <div className="flex items-center gap-4 p-5 border-b border-gray-100 justify-center">
                    <img className=" w-20 h-20 rounded-full border-4 border-primary" src="https://www.fullstackexperts.eu/wp-content/uploads/2024/12/Projekt-bez-nazwy-38-1024x1024.png" alt="" />
                    <div>
                        <h2 className="font-semibold text-xl mb-0">John Doe</h2>
                        <p className="text-gray-500 text-sm">Mentor</p>
                    </div>
                </div>

                {/* Tab Bar */}
                <div className="flex border-b border-gray-100">
                    {tabs.map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className={`flex-1 py-4 text-sm font-medium transition-colors relative
                                ${activeTab === i
                                    ? 'text-primary'
                                    : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            {tab.label}
                            {activeTab === i && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="p-5">
                    {tabs[activeTab].component}
                </div>

            </div>
        </div>
    );
};

export default Page;