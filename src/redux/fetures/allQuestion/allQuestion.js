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
            query: ({id}) => ({
                url: `/question-system/student/questionary/${id}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetAllQuestionCategoryQuery , useGetAllQuestionCategoryPaidQuery} = allQuestion;