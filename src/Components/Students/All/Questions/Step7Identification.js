'use client';

import IsLoading from '@/Components/IsLoading';
import {
    useAnswerTheQuestionsMutation,
    useGetAllQuestionCategoryPaidQuery,
    useGetresumeQuestionAnswerQuery
} from '@/redux/fetures/allQuestion/allQuestion';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MAX_SELECTION = 4;

const Step7Identification = ({ onNext }) => {
    const searchParams = useSearchParams();
    const stepId = searchParams.get('StepId');

    // Step questions
    const { data: step, isLoading } =
        useGetAllQuestionCategoryPaidQuery({ id: stepId });

    const fullDataOfStep = step?.data;

    // 🔥 RESUME API (IMPORTANT)
    const { data: resume } =
        useGetresumeQuestionAnswerQuery({ questionaryId: stepId });

    const resumeAnswers = resume?.data?.answers;

    const [answerTheQuestions, { isLoading: isLoadingAnswer }] =
        useAnswerTheQuestionsMutation();

    const [answers, setAnswers] = useState({});

    // ✅ INIT + RESUME LOAD
    useEffect(() => {
        if (!fullDataOfStep?.questions) return;

        const initial = {};

        fullDataOfStep.questions.forEach((q) => {
            const saved = resumeAnswers?.find(
                (r) => r.questionId === q.id
            );

            initial[q.id] =
                saved?.answer ??
                (q.type === 'Multiple Select' ? [] : '');
        });

        setAnswers(initial);
    }, [fullDataOfStep, resumeAnswers]);

    // INPUT
    const handleInput = (id, value) => {
        setAnswers((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    // SINGLE
    const handleSingle = (id, value) => {
        setAnswers((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    // MULTI
    const toggleMulti = (id, value) => {
        setAnswers((prev) => {
            const current = prev[id] || [];

            if (current.includes(value)) {
                return {
                    ...prev,
                    [id]: current.filter((v) => v !== value),
                };
            }

            if (current.length >= MAX_SELECTION) return prev;

            return {
                ...prev,
                [id]: [...current, value],
            };
        });
    };

    // FORMAT
    const formatAnswers = () => {
        return Object.entries(answers).map(([questionId, answer]) => ({
            questionId,
            answer,
        }));
    };

    // VALIDATION
    const isValidAnswer = (val) => {
        if (Array.isArray(val)) return val.length > 0;
        if (typeof val === 'string') return val?.trim?.() !== '';
        return Boolean(val);
    };
    const router = useRouter();

    // SUBMIT
    const handleSave = async () => {
        const allFilled = Object.values(answers).every(isValidAnswer);

        if (!allFilled) {
            toast.error('Please answer all questions');
            return;
        }

        try {
            const payload = {
                data: { answers: formatAnswers() },
                questionaryId: fullDataOfStep?.questionary?.id,
            };

            const res = await answerTheQuestions(payload).unwrap();

            if (res?.code === 200) {
                toast.success(res?.message || 'Completed successfully');
                router.push('/students/question-summary');
                onNext?.();
            } else {
                toast.error(res?.message);
            }
        } catch (err) {
            console.error(err);
            toast.error(err?.data?.message || 'Submit failed');
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
                                value={value || ''}
                                onChange={(e) =>
                                    handleInput(q.id, e.target.value)
                                }
                                className="w-full border px-3 py-2 rounded-lg"
                            />
                        )}

                        {/* TEXTAREA */}
                        {q.type === 'Text Area' && (
                            <textarea
                                rows={4}
                                value={value || ''}
                                onChange={(e) =>
                                    handleInput(q.id, e.target.value)
                                }
                                className="w-full border px-3 py-2 rounded-lg"
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
                                                handleSingle(q.id, opt.details)
                                            }
                                            className={`p-4 border rounded-lg text-left
                                                ${isActive
                                                    ? 'border-[#2b124f] bg-[#2b124f]/5'
                                                    : 'border-gray-300'}
                                            `}
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
                                        const selected = value || [];
                                        const isActive = selected.includes(opt.details);
                                        const isDisabled =
                                            !isActive &&
                                            selected.length >= MAX_SELECTION;

                                        return (
                                            <button
                                                key={opt.sl}
                                                type="button"
                                                disabled={isDisabled}
                                                onClick={() =>
                                                    toggleMulti(q.id, opt.details)
                                                }
                                                className={`p-4 border rounded-lg text-left
                                                    ${isActive
                                                        ? 'border-[#2b124f] bg-[#2b124f]/5'
                                                        : 'border-gray-300'}
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

            {/* BUTTON */}
            <button
                onClick={handleSave}
                disabled={isLoadingAnswer}
                className="px-8 py-3 bg-[#2b124f] text-white rounded-lg"
            >
                {isLoadingAnswer ? 'Saving...' : 'Finish'}
            </button>
        </div>
    );
};

export default Step7Identification;