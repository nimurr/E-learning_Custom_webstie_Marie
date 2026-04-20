import { apiSlice } from "../../api/apiSlice";

const capsules = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCapsules: builder.query({
            query: () => ({
                url: `/capsules`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetAllCapsulesQuery } = capsules;