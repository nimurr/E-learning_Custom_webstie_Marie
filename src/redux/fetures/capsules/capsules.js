import { apiSlice } from "../../api/apiSlice";

const capsules = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCapsulesCategory: builder.query({
            query: () => ({
                url: `/student-dashboard/capsule-categories?page=1&limit=10`,
                method: "GET",
            }),
        }),
        getAllCapsulesbyId: builder.query({
            query: ({categoryId}) => ({
                url: `/student-dashboard/capsules?categoryId=${categoryId}&rating=4&page=1&limit=10`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetAllCapsulesCategoryQuery, useGetAllCapsulesbyIdQuery } = capsules;