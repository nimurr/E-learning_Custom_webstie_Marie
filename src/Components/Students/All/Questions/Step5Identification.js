'use client';

import IsLoading from '@/Components/IsLoading';
import {
    useAnswerTheQuestionsMutation,
    useGetAllQuestionCategoryPaidQuery
} from '@/redux/fetures/allQuestion/allQuestion';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MAX_SELECTION = 4;

const Step5Identification = ({ onNext }) => {
    const searchParams = useSearchParams();
    const stepId = searchParams.get('StepId');

    const { data: step, isLoading } =
        useGetAllQuestionCategoryPaidQuery({ id: stepId });

    const fullDataOfStep = step?.data;

    const [answerTheQuestions, { isLoading: isLoadingAnswer }] =
        useAnswerTheQuestionsMutation();

    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(false);

    // ✅ Initialize
    useEffect(() => {
        if (fullDataOfStep?.questions) {
            const initial = {};
            fullDataOfStep.questions.forEach((q) => {
                initial[q.id] =
                    q.type === 'Multiple Select' ? [] : '';
            });
            setAnswers(initial);
        }
    }, [fullDataOfStep]);

    // INPUT
    const handleInput = (id, value) => {
        setAnswers((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    // SELECT
    const handleSelect = (id, value) => {
        setAnswers((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    // MULTI SELECT
    const toggleMulti = (id, value) => {
        setAnswers((prev) => {
            const current = prev[id] || [];

            if (current.includes(value)) {
                return {
                    ...prev,
                    [id]: current.filter((v) => v !== value),
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

    // ✅ Convert format
    const formatAnswers = () => {
        return Object.entries(answers).map(([questionId, answer]) => ({
            questionId,
            answer,
        }));
    };

    // ✅ FINAL SUBMIT
    const handleSave = async () => {
        const allAnswered = Object.values(answers).every((val) =>
            Array.isArray(val) ? val.length > 0 : val !== ''
        );

        if (!allAnswered) {
            toast.error('Please answer all questions');
            return;
        }

        setLoading(true);

        try {
            const payload = {
                data: { answers: formatAnswers() },
                questionaryId: fullDataOfStep?.questionary?.id,
            };

            const res = await answerTheQuestions(payload).unwrap();

            if (res?.code === 200) {
                toast.success('All steps completed ✅');

                // 👉 FINAL STEP → maybe redirect or finish
                onNext?.(); 
            } else {
                toast.error(res?.message);
            }
        } catch (err) {
            console.error(err);
            toast.error(err?.data?.message || 'Submit failed');
        } finally {
            setLoading(false);
        }
    };

    if (isLoading) {
        return <IsLoading row={10} />;
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
                                className="w-full border border-gray-300 rounded-lg px-3 py-2"
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
                                className="w-full border border-gray-300 rounded-lg px-3 py-2"
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
                                            className={`p-4 border rounded-lg text-left
                                                ${isActive
                                                    ? 'border-[#2b124f] bg-[#2b124f]/5'
                                                    : 'border-gray-300'
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
                                                className={`p-4 border rounded-lg text-left
                                                    ${isActive
                                                        ? 'border-[#2b124f] bg-[#2b124f]/5'
                                                        : 'border-gray-300'
                                                    }
                                                    ${isDisabled ? 'opacity-50' : ''}
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

            {/* BUTTON */}
            <button
                onClick={handleSave}
                disabled={loading || isLoadingAnswer}
                className="px-8 py-3 bg-[#2b124f] text-white rounded-lg disabled:opacity-50"
            >
                {loading || isLoadingAnswer
                    ? 'Saving...'
                    : 'Finish'}
            </button>
        </div>
    );
};

export default Step5Identification;