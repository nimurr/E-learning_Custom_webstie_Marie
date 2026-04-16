'use client';
import IsLoading from '@/Components/IsLoading';
import { useGetAllQuestionCategoryPaidQuery } from '@/redux/fetures/allQuestion/allQuestion';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MAX_SELECTION = 4;

const Step6Identification = ({ onNext }) => {
    const searchParams = useSearchParams();
    const stepId = searchParams.get('StepId');

    const { data: step, isLoading } = useGetAllQuestionCategoryPaidQuery({ id: stepId });
    const fullDataOfStep = step?.data;

    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(false);

    // ✅ Initialize
    useEffect(() => {
        if (fullDataOfStep?.questions) {
            const initial = {};
            fullDataOfStep.questions.forEach((q) => {
                if (q.type === 'Multiple Select') {
                    initial[q.id] = [];
                } else {
                    initial[q.id] = '';
                }
            });
            setAnswers(initial);
        }
    }, [fullDataOfStep]);

    // TEXT / TEXTAREA
    const handleInput = (id, value) => {
        setAnswers(prev => ({
            ...prev,
            [id]: value,
        }));
    };

    // SINGLE SELECT
    const handleSelect = (id, value) => {
        setAnswers(prev => ({
            ...prev,
            [id]: value,
        }));
    };

    // MULTIPLE SELECT
    const toggleMulti = (id, value) => {
        setAnswers(prev => {
            const current = prev[id] || [];

            if (current.includes(value)) {
                return {
                    ...prev,
                    [id]: current.filter(v => v !== value),
                };
            } else {
                if (current.length >= MAX_SELECTION) return prev;

                return {
                    ...prev,
                    [id]: [...current, value],
                };
            }
        });
    };

    const handleSave = async () => {
        const allAnswered = Object.entries(answers).every(([_, val]) =>
            Array.isArray(val) ? val.length > 0 : val !== ''
        );

        if (!allAnswered) return;

        setLoading(true);

        const payload = {
            stepId,
            answers,
        };

        try {
            console.log('Saving Step 6', payload);
            // await api.post('/steps/6', payload);

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

            {/* HEADER */}
            <div>
                <h2 className="text-xl font-semibold">
                    {fullDataOfStep?.questionary?.title}
                </h2>
                <p className="text-gray-500">
                    {fullDataOfStep?.questionary?.brief}
                </p>
            </div>

            {/* QUESTIONS */}
            {fullDataOfStep?.questions?.map((q) => {
                const value = answers[q.id];

                return (
                    <div key={q.id} className="space-y-4">

                        <div>
                            <h3 className="font-semibold">{q.title}</h3>
                            {q.helperText && (
                                <p className="text-sm text-gray-500">
                                    {q.helperText}
                                </p>
                            )}
                        </div>

                        {/* TEXT INPUT */}
                        {q.type === 'Text Input' && (
                            <input
                                type="text"
                                value={value || ''}
                                onChange={(e) =>
                                    handleInput(q.id, e.target.value)
                                }
                                placeholder={q.helperText}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#2b124f]"
                            />
                        )}

                        {/* TEXT AREA */}
                        {q.type === 'Text Area' && (
                            <textarea
                                rows={4}
                                value={value || ''}
                                onChange={(e) =>
                                    handleInput(q.id, e.target.value)
                                }
                                placeholder={q.helperText}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#2b124f]"
                            />
                        )}

                        {/* SINGLE SELECT */}
                        {q.type === 'Single Select' && (
                            <div className="grid sm:grid-cols-2 gap-4">
                                {q.options.map((opt) => {
                                    const isActive = value === opt.details;

                                    return (
                                        <button
                                            key={opt.sl}
                                            type="button"
                                            onClick={() =>
                                                handleSelect(q.id, opt.details)
                                            }
                                            className={`p-4 rounded-lg border text-left
                                                ${isActive
                                                    ? 'border-[#2b124f] bg-[#2b124f]/5'
                                                    : 'border-gray-300 hover:border-[#2b124f]'
                                                }`}
                                        >
                                            {opt.details}
                                        </button>
                                    );
                                })}
                            </div>
                        )}

                        {/* MULTIPLE SELECT */}
                        {q.type === 'Multiple Select' && (
                            <>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {q.options.map((opt) => {
                                        const selectedList = value || [];
                                        const isActive = selectedList.includes(opt.details);
                                        const isDisabled =
                                            !isActive &&
                                            selectedList.length >= MAX_SELECTION;

                                        return (
                                            <button
                                                key={opt.sl}
                                                type="button"
                                                onClick={() =>
                                                    toggleMulti(q.id, opt.details)
                                                }
                                                disabled={isDisabled}
                                                className={`p-4 rounded-lg border text-left
                                                    ${isActive
                                                        ? 'border-[#2b124f] bg-[#2b124f]/5'
                                                        : 'border-gray-300 hover:border-[#2b124f]'
                                                    }
                                                    ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                                                `}
                                            >
                                                {opt.details}
                                            </button>
                                        );
                                    })}
                                </div>

                                <p className="text-sm text-gray-500">
                                    Selected {(value || []).length} / {MAX_SELECTION}
                                </p>
                            </>
                        )}

                    </div>
                );
            })}

            {/* SAVE */}
            <button
                onClick={handleSave}
                disabled={
                    !fullDataOfStep?.questions ||
                    Object.entries(answers).some(([_, v]) =>
                        Array.isArray(v) ? v.length === 0 : v === ''
                    ) ||
                    loading
                }
                className="px-8 py-3 bg-[#2b124f] text-white rounded-lg disabled:opacity-50"
            >
                {loading ? 'Saving...' : 'Save & Continue'}
            </button>

        </div>
    );
};

export default Step6Identification;