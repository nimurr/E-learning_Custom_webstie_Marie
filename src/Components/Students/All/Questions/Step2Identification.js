'use client';

import IsLoading from '@/Components/IsLoading';
import {
    useAnswerTheQuestionsMutation,
    useGetAllQuestionCategoryPaidQuery,
    useGetresumeQuestionAnswerQuery
} from '@/redux/fetures/allQuestion/allQuestion';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Step2Identification = ({ onNext }) => {
    const searchParams = useSearchParams();
    const stepId = searchParams.get('StepId');

    const { data: step, isLoading } =
        useGetAllQuestionCategoryPaidQuery({ id: stepId });

    const { data: resume } =
        useGetresumeQuestionAnswerQuery({ questionaryId: stepId });

    const fullDataOfStep = step?.data;
    const fullDataOfResume = resume?.data?.answers;

    const [answerTheQuestions, { isLoading: isLoadingAnswer }] =
        useAnswerTheQuestionsMutation();

    const [answers, setAnswers] = useState([]);
    const [loading, setLoading] = useState(false);

    // ✅ INIT + PREFILL (IMPORTANT FIX)
    useEffect(() => {
        if (!fullDataOfStep?.questions) return;

        // 🔥 map resume answers
        const answerMap = {};

        fullDataOfResume?.forEach((item) => {
            answerMap[item.questionId] = item.answer;
        });

        // 🔥 merge with questions
        const initial = fullDataOfStep.questions.map((q) => ({
            questionId: q.id,
            answer: answerMap[q.id] || '',
        }));

        setAnswers(initial);
    }, [fullDataOfStep, fullDataOfResume]);

    // ✅ UPDATE ANSWER
    const handleChange = (questionId, value) => {
        setAnswers((prev) =>
            prev.map((item) =>
                item.questionId === questionId
                    ? { ...item, answer: value }
                    : item
            )
        );
    };

    // ✅ SUBMIT
    const handleSave = async () => {
        const allAnswered = answers.every((a) => a.answer !== '');

        if (!allAnswered) {
            toast.error('Please answer all questions');
            return;
        }

        setLoading(true);

        try {
            const payload = {
                data: { answers },
                questionaryId: fullDataOfStep?.questionary?.id,
            };

            const res = await answerTheQuestions(payload).unwrap();

            if (res?.code === 200) {
                toast.success(res?.message);
                onNext();
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
            {fullDataOfStep?.questions?.map((q) => {
                const currentAnswer =
                    answers.find((a) => a.questionId === q.id)?.answer || '';

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
                                value={currentAnswer}
                                onChange={(e) =>
                                    handleChange(q.id, e.target.value)
                                }
                                placeholder={q.helperText}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                            />
                        )}

                        {/* SINGLE SELECT */}
                        {q.type === 'Single Select' && (
                            <div className="grid sm:grid-cols-2 gap-4">
                                {q.options.map((opt) => {
                                    const isActive =
                                        currentAnswer === opt.details;

                                    return (
                                        <button
                                            key={opt.sl}
                                            type="button"
                                            onClick={() =>
                                                handleChange(q.id, opt.details)
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

                    </div>
                );
            })}

            {/* BUTTON */}
            <button
                onClick={handleSave}
                disabled={loading || isLoadingAnswer}
                className="px-8 py-3 bg-[#2b124f] text-white rounded-lg"
            >
                {loading || isLoadingAnswer ? 'Saving...' : 'Save & Continue'}
            </button>

        </div>
    );
};

export default Step2Identification;