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
    useGetTopMentorsQuery , 
    useBookingMentorMutation 
} = mentors;