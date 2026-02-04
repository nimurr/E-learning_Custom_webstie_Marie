'use client';
import React, { useState } from 'react';

const options = [
    { value: 'earth', title: 'Earth', desc: 'Stable, but monotonous' },
    { value: 'mars', title: 'Mars', desc: 'Full of challenges, sometimes hostile' },
    { value: 'moon', title: 'Moon', desc: 'Calm, but isolated' },
    { value: 'sun', title: 'Sun', desc: 'Radiant and energizing' },
];

const questions = [
    { id: 'q1', title: 'Question 01', text: 'Current job as a planet:' },
    { id: 'q2', title: 'Question 02', text: 'Your work environment feels like:' },
    { id: 'q3', title: 'Question 03', text: 'Your daily energy level:' },
];

const Step2Identification = ({ onNext }) => {
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSelect = (questionId, value) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value,
        }));
    };

    const handleSave = async () => {
        // ensure all answered
        if (Object.keys(answers).length !== questions.length) return;

        setLoading(true);

        const payload = {
            step2Answers: answers,
        };

        try {
            console.log('Saving Step 2', payload);
            // await api.post('/steps/2', payload);
            onNext();
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-12">
            {questions.map((question) => (
                <div key={question.id}>
                    {/* QUESTION */}
                    <h2 className="text-lg font-semibold mb-2">
                        {question.title}
                    </h2>
                    <p className="mb-6 text-gray-700">
                        {question.text}
                    </p>

                    {/* OPTIONS */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {options.map((option) => {
                            const isActive = answers[question.id] === option.value;

                            return (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => handleSelect(question.id, option.value)}
                                    className={`text-left p-5 rounded-xl border transition
                                        ${isActive
                                            ? 'border-[#2b124f] bg-[#2b124f]/5'
                                            : 'border-gray-300 hover:border-[#2b124f]'
                                        }`}
                                >
                                    <div className="flex items-start gap-3">
                                        {/* RADIO */}
                                        <div
                                            className={`w-4 h-4 mt-1 rounded-full border flex items-center justify-center
                                                ${isActive
                                                    ? 'border-[#2b124f]'
                                                    : 'border-gray-400'
                                                }`}
                                        >
                                            {isActive && (
                                                <div className="w-2 h-2 bg-[#2b124f] rounded-full" />
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
                </div>
            ))}

            {/* SAVE */}
            <button
                onClick={handleSave}
                disabled={Object.keys(answers).length !== questions.length || loading}
                className="px-8 py-3 bg-[#2b124f] text-white rounded-lg disabled:opacity-50"
            >
                {loading ? 'Saving...' : 'Save & Continue'}
            </button>
        </div>
    );
};

export default Step2Identification;
