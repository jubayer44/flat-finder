import { tagTypes } from "../tagType";
import { baseApi } from "./baseApi";

export const flatShareRequestApi = baseApi.injectEndpoints({
    endpoints: (builder)=> ({
        addFlatShareRequest: builder.mutation({
            query: (data: any)=> ({
                url: "/flat-share-request",
                method: "POST",
                contentType: "application/json",
                data,
            }),
            invalidatesTags: [tagTypes.flatShareRequest]
        }),
        getMyFlatRequests: builder.query({
            query: (args: Record<string, any>)=> ({
                url: "/my-flat-requests",
                method: "GET",
                params: args
            }),
            providesTags: [tagTypes.flatShareRequest]
        })
    })
});

export const { useAddFlatShareRequestMutation, useGetMyFlatRequestsQuery } = flatShareRequestApi;