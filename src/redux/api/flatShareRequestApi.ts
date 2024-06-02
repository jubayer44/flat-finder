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
        deleteAFlatShareRequest: builder.mutation({
            query: (id: string)=> ({
                url: `/flat-share-request/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.flatShareRequest]
        }),
        getMyRequestedFlat: builder.query({
            query: (args: Record<string, any>)=> ({
                url: "/my-flat-requests",
                method: "GET",
                params: args
            }),
            providesTags: [tagTypes.flatShareRequest]
        }),
        getRequestsOnMyFlat: builder.query({
            query: (args: Record<string, any>)=> ({
                url: "/requests-on-my-flat",
                method: "GET",
                params: args
            }),
            providesTags: [tagTypes.flatShareRequest]
        }),
    })
});

export const { useAddFlatShareRequestMutation, useGetMyRequestedFlatQuery, useDeleteAFlatShareRequestMutation, useGetRequestsOnMyFlatQuery} = flatShareRequestApi;