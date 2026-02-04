'use client';
import React, { useState } from 'react';

const valuesOptions = [
    {
        value: 'benevolence',
        title: 'Benevolence',
        desc: 'Respect, humanity, mutual aid',
    },
    {
        value: 'justice',
        title: 'Justice',
        desc: 'Fairness, equality, integrity',
    },
    {
        value: 'freedom',
        title: 'Freedom',
        desc: 'Independence, autonomy, expression',
    },
    {
        value: 'creativity',
        title: 'Creativity',
        desc: 'Imagination, innovation, originality',
    },
    {
        value: 'growth',
        title: 'Growth',
        desc: 'Learning, progress, evolution',
    },
    {
        value: 'security',
        title: 'Security',
        desc: 'Stability, safety, predictability',
    },
    {
        value: 'connection',
        title: 'Connection',
        desc: 'Belonging, relationships, community',
    },
    {
        value: 'purpose',
        title: 'Purpose',
        desc: 'Meaning, impact, contribution',
    },
];

const MAX_SELECTION = 4;

const Step3Identification = ({ onNext }) => {
    const [selected, setSelected] = useState([]);
    const [loading, setLoading] = useState(false);

    const toggleSelect = (value) => {
        if (selected.includes(value)) {
            // remove
            setSelected(prev => prev.filter(v => v !== value));
        } else {
            // add (limit check)
            if (selected.length < MAX_SELECTION) {
                setSelected(prev => [...prev, value]);
            }
        }
    };

    const handleSave = async () => {
        if (selected.length === 0) return;

        setLoading(true);

        const payload = {
            selectedValues: selected,
        };

        try {
            console.log('Saving Step 3', payload);
            // await api.post('/steps/3', payload);
            onNext();
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {/* QUESTION */}
            <h2 className="text-lg font-semibold mb-2">
                Question 11
            </h2>
            <p className="mb-6 text-gray-700">
                Among these constellations of values, which ones illuminate your inner sky?
                <span className="text-sm text-gray-500 ml-1">(Max {MAX_SELECTION} choices)</span>
            </p>

            {/* OPTIONS */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {valuesOptions.map(option => {
                    const isActive = selected.includes(option.value);
                    const isDisabled =
                        !isActive && selected.length >= MAX_SELECTION;

                    return (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => toggleSelect(option.value)}
                            disabled={isDisabled}
                            className={`text-left p-5 rounded-xl border transition
                                ${isActive
                                    ? 'border-[#2b124f] bg-[#2b124f]/5'
                                    : 'border-gray-300 hover:border-[#2b124f]'
                                }
                                ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                            `}
                        >
                            <div className="flex items-start gap-3">
                                {/* CHECK */}
                                <div
                                    className={`w-4 h-4 mt-1 rounded border flex items-center justify-center
                                        ${isActive
                                            ? 'bg-[#2b124f] border-[#2b124f]'
                                            : 'border-gray-400'
                                        }`}
                                >
                                    {isActive && (
                                        <span className="text-white text-xs">✓</span>
                                    )}
                                </div>

                                {/* TEXT */}
                                <div>
                                    <h3 className="font-semibold text-[#2b124f]">
                                        {option.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {option.desc}
                                    </p>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* COUNTER */}
            <p className="text-sm text-gray-500 mb-6">
                Selected {selected.length} / {MAX_SELECTION}
            </p>

            {/* SAVE */}
            <button
                onClick={handleSave}
                disabled={selected.length === 0 || loading}
                className="px-8 py-3 bg-[#2b124f] text-white rounded-lg disabled:opacity-50"
            >
                {loading ? 'Saving...' : 'Save & Continue'}
            </button>
        </div>
    );
};

export default Step3Identification;
