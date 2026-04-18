// 'use client';
// import IsLoading from '@/Components/IsLoading';
// import { useGetAllQuestionCategoryPaidQuery } from '@/redux/fetures/allQuestion/allQuestion';
// import { useSearchParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react';

// const MAX_SELECTION = 4;

// const Step3Identification = ({ onNext }) => {
//     const searchParams = useSearchParams();
//     const stepId = searchParams.get('StepId');

//     const { data: step , isLoading} = useGetAllQuestionCategoryPaidQuery({ id: stepId });
//     const fullDataOfStep = step?.data;

//     const [answers, setAnswers] = useState({});
//     const [loading, setLoading] = useState(false);

//     // ✅ Initialize
//     useEffect(() => {
//         if (fullDataOfStep?.questions) {
//             const initial = {};
//             fullDataOfStep.questions.forEach((q) => {
//                 if (q.type === 'Multiple Select') {
//                     initial[q.id] = [];
//                 } else {
//                     initial[q.id] = '';
//                 }
//             });
//             setAnswers(initial);
//         }
//     }, [fullDataOfStep]);

//     // ✅ TEXT / TEXTAREA
//     const handleInput = (id, value) => {
//         setAnswers((prev) => ({
//             ...prev,
//             [id]: value,
//         }));
//     };

//     // ✅ SINGLE SELECT
//     const handleSelect = (id, value) => {
//         setAnswers((prev) => ({
//             ...prev,
//             [id]: value,
//         }));
//     };

//     // ✅ MULTIPLE SELECT
//     const toggleMulti = (id, value) => {
//         setAnswers((prev) => {
//             const current = prev[id] || [];

//             if (current.includes(value)) {
//                 return {
//                     ...prev,
//                     [id]: current.filter((v) => v !== value),
//                 };
//             } else {
//                 if (current.length >= MAX_SELECTION) return prev;

//                 return {
//                     ...prev,
//                     [id]: [...current, value],
//                 };
//             }
//         });
//     };

//     const handleSave = async () => {
//         const allAnswered = Object.entries(answers).every(([key, val]) => {
//             return Array.isArray(val) ? val.length > 0 : val !== '';
//         });

//         if (!allAnswered) return;

//         setLoading(true);

//         const payload = {
//             stepId,
//             answers,
//         };

//         try {
//             console.log('Saving Step 3', payload);
//             // await api.post('/steps/3', payload);

//             onNext();
//         } catch (err) {
//             console.error(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (isLoading) {
//         return <IsLoading row={10} />
//     }

//     return (
//         <div className="space-y-10">

//             {/* HEADER */}
//             <div>
//                 <h2 className="text-xl font-semibold">
//                     {fullDataOfStep?.questionary?.title}
//                 </h2>
//                 <p className="text-gray-500">
//                     {fullDataOfStep?.questionary?.brief}
//                 </p>
//             </div>

//             {/* QUESTIONS */}
//             {fullDataOfStep?.questions?.map((q) => {
//                 const value = answers[q.id];

//                 return (
//                     <div key={q.id} className="space-y-4">

//                         <div>
//                             <h3 className="font-semibold">{q.title}</h3>
//                             {q.helperText && (
//                                 <p className="text-sm text-gray-500">
//                                     {q.helperText}
//                                 </p>
//                             )}
//                         </div>

//                         {/* 🔥 TEXT AREA */}
//                         {q.type === 'Text Area' && (
//                             <textarea
//                                 value={value || ''}
//                                 onChange={(e) =>
//                                     handleInput(q.id, e.target.value)
//                                 }
//                                 placeholder={q.helperText}
//                                 rows={4}
//                                 className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#2b124f]"
//                             />
//                         )}

//                         {/* 🔥 SINGLE SELECT */}
//                         {q.type === 'Single Select' && (
//                             <div className="grid sm:grid-cols-2 gap-4">
//                                 {q.options.map((opt) => {
//                                     const isActive = value === opt.details;

//                                     return (
//                                         <button
//                                             key={opt.sl}
//                                             type="button"
//                                             onClick={() =>
//                                                 handleSelect(q.id, opt.details)
//                                             }
//                                             className={`p-4 rounded-lg border text-left
//                                                 ${isActive
//                                                     ? 'border-[#2b124f] bg-[#2b124f]/5'
//                                                     : 'border-gray-300 hover:border-[#2b124f]'
//                                                 }`}
//                                         >
//                                             {opt.details}
//                                         </button>
//                                     );
//                                 })}
//                             </div>
//                         )}

//                         {/* 🔥 MULTIPLE SELECT */}
//                         {q.type === 'Multiple Select' && (
//                             <div className="grid sm:grid-cols-2 gap-4">
//                                 {q.options.map((opt) => {
//                                     const selectedList = value || [];
//                                     const isActive = selectedList.includes(opt.details);
//                                     const isDisabled =
//                                         !isActive &&
//                                         selectedList.length >= MAX_SELECTION;

//                                     return (
//                                         <button
//                                             key={opt.sl}
//                                             type="button"
//                                             onClick={() =>
//                                                 toggleMulti(q.id, opt.details)
//                                             }
//                                             disabled={isDisabled}
//                                             className={`p-4 rounded-lg border text-left
//                                                 ${isActive
//                                                     ? 'border-[#2b124f] bg-[#2b124f]/5'
//                                                     : 'border-gray-300 hover:border-[#2b124f]'
//                                                 }
//                                                 ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
//                                             `}
//                                         >
//                                             {opt.details}
//                                         </button>
//                                     );
//                                 })}
//                             </div>
//                         )}

//                         {/* MULTI COUNTER */}
//                         {q.type === 'Multiple Select' && (
//                             <p className="text-sm text-gray-500">
//                                 Selected {(value || []).length} / {MAX_SELECTION}
//                             </p>
//                         )}

//                     </div>
//                 );
//             })}

//             {/* SAVE */}
//             <button
//                 onClick={handleSave}
//                 disabled={
//                     !fullDataOfStep?.questions ||
//                     Object.entries(answers).some(([k, v]) =>
//                         Array.isArray(v) ? v.length === 0 : v === ''
//                     ) ||
//                     loading
//                 }
//                 className="px-8 py-3 bg-[#2b124f] text-white rounded-lg disabled:opacity-50"
//             >
//                 {loading ? 'Saving...' : 'Save & Continue'}
//             </button>
//         </div>
//     );
// };

// export default Step3Identification;


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

const Step3Identification = ({ onNext }) => {
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

    // ✅ TEXT / TEXTAREA
    const handleInput = (id, value) => {
        setAnswers((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    // ✅ SINGLE SELECT
    const handleSelect = (id, value) => {
        setAnswers((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    // ✅ MULTIPLE SELECT
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

    // ✅ Convert to API format
    const formatAnswers = () => {
        return Object.entries(answers).map(([questionId, answer]) => ({
            questionId,
            answer,
        }));
    };

    // ✅ Submit API
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

                        {/* TEXT AREA */}
                        {q.type === 'Text Area' && (
                            <textarea
                                value={value || ''}
                                onChange={(e) =>
                                    handleInput(q.id, e.target.value)
                                }
                                placeholder={q.helperText}
                                rows={4}
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
                            <div className="grid sm:grid-cols-2 gap-4">
                                {q.options.map((opt) => {
                                    const selectedList = value || [];
                                    const isActive =
                                        selectedList.includes(opt.details);
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
                                                ${isDisabled
                                                    ? 'opacity-50 cursor-not-allowed'
                                                    : ''}
                                            `}
                                        >
                                            {opt.details}
                                        </button>
                                    );
                                })}
                            </div>
                        )}

                        {/* COUNTER */}
                        {q.type === 'Multiple Select' && (
                            <p className="text-sm text-gray-500">
                                Selected {(value || []).length} / {MAX_SELECTION}
                            </p>
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
                    : 'Save & Continue'}
            </button>
        </div>
    );
};

export default Step3Identification;