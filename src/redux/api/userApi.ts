import { tagTypes } from "../tagType";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder)=> ({
        changePassword: builder.mutation({
            query: (data: {oldPassword: string, newPassword: string})=> ({
                url: "/auth/change-password",
                method: "POST",
                data
            }),
            invalidatesTags: [tagTypes.user]
        }),
        getMetaData: builder.query({
            query: ()=> ({
                url: "/meta-data",
                method: "GET",
            }),
            providesTags: [tagTypes.flat, tagTypes.flatShareRequest, tagTypes.user]
        })
    })
});

export const { useChangePasswordMutation, useGetMetaDataQuery } = userApi;