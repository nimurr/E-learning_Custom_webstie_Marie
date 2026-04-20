import { apiSlice } from "../../api/apiSlice";

const capsules = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCapsulesCategory: builder.query({
            query: () => ({
                url: `/student-dashboard/capsule-categories?page=1&limit=10`,
                method: "GET",
            }),
        }),
        purchasedCapsuleJourney: builder.mutation({
            query: ({ journeyId }) => ({
                url: `/purchased-journey/${journeyId}`,
                method: "POST"
            }),
        }),
        getAllCapsulesCategoryFullData: builder.query({
            query: ({ journeyId }) => ({
                url: `/journey-capsule?journeyId=${journeyId}&page=1&limit=10`,
                method: "GET",
            }),
        }),
        getAllCapsulesbyId: builder.query({
            query: ({ categoryId }) => ({
                url: `/student-dashboard/capsules?categoryId=${categoryId}&rating=4&page=1&limit=10`,
                method: "GET",
            }),
        }),
        getCapsuleJourney: builder.query({
            query: () => ({
                url: `/journey/paginate?page=1&limit=10`,
                method: "GET",
            }),
        }),
        getJourneyDetails: builder.query({
            query: ({ journeyId }) => ({
                url: `/journey-capsule/${journeyId}/full-details`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetAllCapsulesCategoryQuery, usePurchasedCapsuleJourneyMutation, useGetAllCapsulesCategoryFullDataQuery, useGetAllCapsulesbyIdQuery, useGetCapsuleJourneyQuery,
    useGetJourneyDetailsQuery
} = capsules;