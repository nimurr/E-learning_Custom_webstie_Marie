'use client';
import React, { useState } from 'react';

const faqs = [
    {
        q: 'How do I reset my password?',
        a: 'Go to the Profile tab in Settings, click Edit, and update your password field. Save your changes when done.',
    },
    {
        q: 'Can I download my certificates?',
        a: 'Yes! Navigate to your Learning Progress page and click "Download Certificate" next to any completed course.',
    },
    {
        q: 'How do I contact my mentor?',
        a: 'On your dashboard, click the calendar icon next to your mentor to schedule a session or reach out directly.',
    },
    {
        q: 'What happens when I complete a capsule?',
        a: 'Upon completing a capsule, you unlock a certificate and may receive a bonus gift capsule as a reward for your dedication.',
    },
    {
        q: 'Can I change my profile picture?',
        a: 'Yes, go to Settings → Profile, and click "Change Image" to upload a new profile photo.',
    },
];

const FAQTab = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="bg-gray-50 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-3">
                {faqs.map((faq, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex items-center justify-between px-5 py-4 text-left"
                        >
                            <span className="text-sm font-medium text-gray-800">{faq.q}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-4 h-4 text-indigo-600 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {openIndex === i && (
                            <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQTab;