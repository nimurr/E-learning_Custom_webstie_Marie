import { apiSlice } from "../../api/apiSlice";

const mentors = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllRecommendedMentors: builder.query({
            query: () => ({
                url: `/student-dashboard/mentors?page=1&limit=10&type=recommended`,
                method: "GET",
            }),
        }),
        getTopMentors: builder.query({
            query: () => ({
                url: `/student-dashboard/mentors?page=1&limit=6&type=top`,
                method: "GET",
            }),
        }),
        getBookMentors: builder.query({
            query: () => ({
                url: `/student-dashboard/mentors?page=1&limit=10&type=booked`,
                method: "GET",
            }),
        }),
        getRecommendedMentors: builder.query({
            query: () => ({
                url: `/student-dashboard/mentors?page=1&limit=10&type=recommended`,
                method: "GET",
            }),
        }),
        bookingMentor: builder.mutation({
            query: ({ mentorId }) => ({
                url: `/mentors/${mentorId}/book-session`,
                method: "POST",
            }),
        }),
    }),
});

export const {
    useGetAllRecommendedMentorsQuery,
    useGetTopMentorsQuery,
    useGetBookMentorsQuery,
    useGetRecommendedMentorsQuery,
    useBookingMentorMutation
} = mentors;