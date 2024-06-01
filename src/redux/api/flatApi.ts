import { TAddFlat } from "@/types";
import { tagTypes } from "../tagType";
import { baseApi } from "./baseApi";

export const flatApi = baseApi.injectEndpoints({
    endpoints: (builder)=> ({
        addFlat: builder.mutation({
            query: (data: TAddFlat)=> ({
                url: "/flats",
                method: "POST",
                contentType: "application/json",
                data
            }),
            invalidatesTags: [tagTypes.flat]
        }),
        getMyFlats: builder.query({
            query: (args: Record<string, any>)=> ({
                url: "/flats/my-flats",
                method: "GET",
                params: args
            }),
            providesTags: [tagTypes.flat]
        }),
        deleteFlat: builder.mutation({
            query: (id: string)=> ({
                url: `/flats/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [tagTypes.flat]
        }),
    })
});

export const { useAddFlatMutation, useGetMyFlatsQuery, useDeleteFlatMutation } = flatApi;