// 'use client';
// import IsLoading from '@/Components/IsLoading';
// import { useAnswerTheQuestionsMutation, useGetAllQuestionCategoryPaidQuery } from '@/redux/fetures/allQuestion/allQuestion';
// import { useSearchParams } from 'next/navigation';
// import React, { useState } from 'react';

// const Step1Identification = ({ onNext }) => {
//     // StepId get in search params
//     const searchParams = useSearchParams();
//     const stepId = searchParams.get('StepId');
//     console.log(stepId)
//     const { data: step, isLoading } = useGetAllQuestionCategoryPaidQuery({ id: stepId });
//     const fullDataOfStep = step?.data;
//     console.log(fullDataOfStep)

//      const [answerTheQuestions, { isLoading: isLoadingAnswer }] = useAnswerTheQuestionsMutation();


//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleSave = async () => {
//         setLoading(true);

//         const payload = {
//             name,
//             email,
//         };

//         try {
//             // 🔥 save only this step
//             console.log('Saving Step 1', payload);
//             // await api.post('/steps/1', payload);

//             onNext(); // 🚀 go next AFTER save
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     };


//     if (isLoading) {
//         return <IsLoading row={10} />
//     }

//     return (
//         <div>
//             <h2 className="text-xl font-semibold mb-3">
//                 {fullDataOfStep?.questionary?.title}
//             </h2>
//             <h2 className="text-sm text-gray-400 mb-6">
//                 {fullDataOfStep?.questionary?.brief}
//             </h2>

//             {
//                 fullDataOfStep?.questions.map((question, index) => (
//                     <div key={index} className="mb-6">
//                         <label className="block font-semibold mb-2">
//                             {question?.title}
//                         </label>
//                         <input
//                             type="text"
//                             value={question.answer}
//                             placeholder={question?.helperText}
//                             onChange={(e) => {
//                                 const updatedQuestions = fullDataOfStep.questionary.questions.map((q, i) =>
//                                     i === index ? { ...q, answer: e.target.value } : q
//                                 );
//                                 console.log(updatedQuestions);
//                             }}
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500"
//                         />
//                     </div>
//                 ))
//             }


//             {/* SAVE & NEXT */}
//             <button
//                 onClick={handleSave}
//                 disabled={loading}
//                 className="px-8 py-3 bg-[#2b124f] text-white rounded-lg disabled:opacity-50"
//             >
//                 {loading ? 'Saving...' : 'Save & Continue'}
//             </button>
//         </div>
//     );
// };

// export default Step1Identification;



'use client';

import IsLoading from '@/Components/IsLoading';
import {
    useAnswerTheQuestionsMutation,
    useGetAllQuestionCategoryPaidQuery
} from '@/redux/fetures/allQuestion/allQuestion';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Step1Identification = ({ onNext }) => {
    const searchParams = useSearchParams();
    const stepId = searchParams.get('StepId');

    const { data: step, isLoading } =
        useGetAllQuestionCategoryPaidQuery({ id: stepId });

    const fullDataOfStep = step?.data;

    const [answerTheQuestions, { isLoading: isLoadingAnswer }] =
        useAnswerTheQuestionsMutation();

    const [answers, setAnswers] = useState([]);
    const [loading, setLoading] = useState(false);

    // ✅ Initialize answers
    useEffect(() => {
        if (fullDataOfStep?.questions) {
            const initialAnswers = fullDataOfStep.questions.map((q) => ({
                questionId: q._id,
                answer: '',
            }));
            setAnswers(initialAnswers);
        }
    }, [fullDataOfStep]);

    // ✅ Handle input change
    const handleChange = (index, value) => {
        const updated = [...answers];
        updated[index].answer = value;
        setAnswers(updated);
    };

    // ✅ Submit API
    const handleSave = async () => {
        setLoading(true);

        try {
            const payload = {
                questionaryId: fullDataOfStep?.questionary?._id,
                answers: answers,
            };

            console.log('Submitting:', payload);

            await answerTheQuestions(payload).unwrap();

            onNext(); // go next step
        } catch (error) {
            console.error('Submit error:', error);
        } finally {
            setLoading(false);
        }
    };

    if (isLoading) {
        return <IsLoading row={10} />;
    }

    return (
        <div>
            <h2 className="text-xl font-semibold mb-3">
                {fullDataOfStep?.questionary?.title}
            </h2>

            <p className="text-sm text-gray-400 mb-6">
                {fullDataOfStep?.questionary?.brief}
            </p>

            {fullDataOfStep?.questions?.map((question, index) => (
                <div key={question._id} className="mb-6">
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
                {loading || isLoadingAnswer
                    ? 'Saving...'
                    : 'Save & Continue'}
            </button>
        </div>
    );
};

export default Step1Identification;