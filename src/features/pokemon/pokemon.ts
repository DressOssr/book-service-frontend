import {apiSlice} from "../../app/api/apiSlice.ts";

export const extendedApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        example: build.query({
            query: () => 'test',
        }),
    })
})

