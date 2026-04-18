import { apiSlice } from "../../api/apiSlice";

const allQuestion = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllQuestionCategory: builder.query({
            query: () => ({
                url: `/question-system/student/questionary/category/free`,
                method: "GET",
            }),
        }),
        getAllQuestionCategoryPaid: builder.query({
            query: ({ id }) => ({
                url: `/question-system/student/questionary/${id}`,
                method: "GET",
            }),
        }),
        answerTheQuestions: builder.mutation({
            query: ({ data, questionaryId }) => ({
                url: `/student/questionary/${questionaryId}/answers`,
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const {
    useGetAllQuestionCategoryQuery,
    useGetAllQuestionCategoryPaidQuery,
    useAnswerTheQuestionsMutation
} = allQuestion;