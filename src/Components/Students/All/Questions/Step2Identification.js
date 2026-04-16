'use client';
import IsLoading from '@/Components/IsLoading';
import { useGetAllQuestionCategoryPaidQuery } from '@/redux/fetures/allQuestion/allQuestion';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Step2Identification = ({ onNext }) => {
    const searchParams = useSearchParams();
    const stepId = searchParams.get('StepId');

    const { data: step, isLoading } = useGetAllQuestionCategoryPaidQuery({ id: stepId });
    const fullDataOfStep = step?.data;

    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(false);

    // ✅ Initialize answers
    useEffect(() => {
        if (fullDataOfStep?.questions) {
            const initial = {};
            fullDataOfStep.questions.forEach((q) => {
                initial[q.id] = '';
            });
            setAnswers(initial);
        }
    }, [fullDataOfStep]);

    // ✅ Handle text input
    const handleInput = (id, value) => {
        setAnswers((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    // ✅ Handle select
    const handleSelect = (id, value) => {
        setAnswers((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSave = async () => {
        const allAnswered = Object.values(answers).every(v => v !== '');
        if (!allAnswered) return;

        setLoading(true);

        const payload = {
            stepId,
            answers,
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

    if (isLoading) {
        return <IsLoading row={10} />
    }

    return (
        <div className="space-y-10">

            {/* TITLE */}
            <div>
                <h2 className="text-xl font-semibold">
                    {fullDataOfStep?.questionary?.title}
                </h2>
                <p className="text-gray-500">
                    {fullDataOfStep?.questionary?.brief}
                </p>
            </div>

            {/* QUESTIONS */}
            {fullDataOfStep?.questions?.map((q) => (
                <div key={q.id} className="space-y-4">

                    <div>
                        <h3 className="font-semibold">{q.title}</h3>
                        {q.helperText && (
                            <p className="text-sm text-gray-500">
                                {q.helperText}
                            </p>
                        )}
                    </div>

                    {/* 🔥 TEXT INPUT */}
                    {q.type === 'Text Input' && (
                        <input
                            type="text"
                            value={answers[q.id] || ''}
                            onChange={(e) => handleInput(q.id, e.target.value)}
                            placeholder={q.helperText}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#2b124f]"
                        />
                    )}

                    {/* 🔥 SINGLE SELECT */}
                    {q.type === 'Single Select' && (
                        <div className="grid sm:grid-cols-2 gap-4">
                            {q.options.map((opt) => {
                                const isActive = answers[q.id] === opt.details;

                                return (
                                    <button
                                        key={opt.sl}
                                        type="button"
                                        onClick={() =>
                                            handleSelect(q.id, opt.details)
                                        }
                                        className={`text-left p-4 rounded-lg border transition
                                            ${isActive
                                                ? 'border-[#2b124f] bg-[#2b124f]/5'
                                                : 'border-gray-300 hover:border-[#2b124f]'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">

                                            {/* RADIO */}
                                            <div
                                                className={`w-4 h-4 rounded-full border flex items-center justify-center
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
                                            <span className="text-sm">
                                                {opt.details}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    )}

                </div>
            ))}

            {/* SAVE BUTTON */}
            <button
                onClick={handleSave}
                disabled={
                    !fullDataOfStep?.questions ||
                    Object.values(answers).some(v => v === '') ||
                    loading
                }
                className="px-8 py-3 bg-[#2b124f] text-white rounded-lg disabled:opacity-50"
            >
                {loading ? 'Saving...' : 'Save & Continue'}
            </button>

        </div>
    );
};

export default Step2Identification;