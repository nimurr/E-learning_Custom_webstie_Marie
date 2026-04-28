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
                url: `/student-journey/${journeyId}/capsules`,
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
                url: `/journey-capsule/${journeyId}/modules-without-video`,
                method: "GET",
            }),
        }),

        getAllYouCapsulesJourney: builder.query({
            query: ({ journeyId }) => ({
                url: `/student-journey/${journeyId}/capsules`,
                method: "GET",
            }),
        }),
        getPurchesAllCapsule: builder.query({
            query: () => ({
                url: `/purchased-individual-capsule/paginate?page=1&limit=10`,
                method: "GET",
            }),
        }),
        getAllgiftCapsule: builder.query({
            query: () => ({
                url: `/student-dashboard/my-capsules?type=gifted`,
                method: "GET",
            }),
        }),
        getMySuggestedCapsule: builder.query({
            query: (type) => ({
                url: `/student-dashboard/my-capsules?type=${type}`,
                method: "GET",
            }),
        }),
        purchasedCapsule: builder.mutation({
            query: (id) => ({
                url: `/purchased-individual-capsule/${id}`,
                method: "POST"
            }),
        }),
    }),
});

export const {
    useGetAllCapsulesCategoryQuery,
    usePurchasedCapsuleJourneyMutation,
    useGetAllCapsulesCategoryFullDataQuery,
    useGetAllCapsulesbyIdQuery,
    useGetCapsuleJourneyQuery,
    useGetJourneyDetailsQuery,
    useGetAllYouCapsulesJourneyQuery,
    useGetPurchesAllCapsuleQuery,
    useGetAllgiftCapsuleQuery,
    useGetMySuggestedCapsuleQuery,
    usePurchasedCapsuleMutation
} = capsules;