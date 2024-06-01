import { tagTypes } from "../tagType";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder)=> ({
        getMetaData: builder.query({
            query: ()=> ({
                url: "/meta-data",
                method: "GET",
            }),
            providesTags: [tagTypes.flat, tagTypes.flatShareRequest, tagTypes.user]
        })
    })
});

export const { useGetMetaDataQuery } = userApi;