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

const Step1Identification = ({ onNext }) => {
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

    // ✅ INIT + PREFILL LOGIC
    useEffect(() => {
        if (!fullDataOfStep?.questions) return;

        // 🔥 convert resume array → map
        const answerMap = {};

        fullDataOfResume?.forEach((item) => {
            answerMap[item.questionId] = item.answer;
        });

        // 🔥 merge with questions
        const initialAnswers = fullDataOfStep.questions.map((q) => ({
            questionId: q.id,
            answer: answerMap[q.id] || '',
        }));

        setAnswers(initialAnswers);
    }, [fullDataOfStep, fullDataOfResume]);

    // ✅ INPUT CHANGE
    const handleChange = (index, value) => {
        const updated = [...answers];
        updated[index].answer = value;
        setAnswers(updated);
    };

    // ✅ SUBMIT
    const handleSave = async () => {
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
        } catch (error) {
            console.error('Submit error:', error);
            toast.error(error?.data?.message || 'Submit failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (isLoading) {
        return <IsLoading row={10} />;
    }

    return (
        <div>
            {/* TITLE */}
            <h2 className="text-xl font-semibold mb-3">
                {fullDataOfStep?.questionary?.title}
            </h2>

            <p className="text-sm text-gray-400 mb-6">
                {fullDataOfStep?.questionary?.brief}
            </p>

            {/* QUESTIONS */}
            {fullDataOfStep?.questions?.map((question, index) => (
                <div key={question.id} className="mb-6">
                    <label className="block font-semibold mb-2">
                        {question?.title}
                    </label>

                    <input
                        type="text"
                        value={answers[index]?.answer || ''}
                        placeholder={question?.helperText}
                        onChange={(e) =>
                            handleChange(index, e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500"
                    />
                </div>
            ))}

            {/* BUTTON */}
            <button
                onClick={handleSave}
                disabled={loading || isLoadingAnswer}
                className="px-8 py-3 bg-[#2b124f] text-white rounded-lg disabled:opacity-50"
            >
                {loading || isLoadingAnswer ? 'Saving...' : 'Save & Continue'}
            </button>
        </div>
    );
};

export default Step1Identification;