import { TAddFlat } from "@/types";
import { tagTypes } from "../tagType";
import { baseApi } from "./baseApi";

export const flatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addFlat: builder.mutation({
      query: (data: TAddFlat) => ({
        url: "/flats",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.flat],
    }),
    getSingleFlat: builder.query({
      query: (id: string) => ({
        url: `/flats/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.flat],
    }),
    getMyFlats: builder.query({
      query: (args: Record<string, any>) => ({
        url: "/flats/my-flats",
        method: "GET",
        params: args,
      }),
      providesTags: [tagTypes.flat],
    }),
    getAllFlats: builder.query({
      query: (args: Record<string, any>) => ({
        url: "/flats",
        method: "GET",
        params: args,
      }),
      providesTags: [tagTypes.flat],
    }),
    updateFlat: builder.mutation({
      query: (payload: any) => ({
        url: `/flats/${payload?.id}`,
        method: "PUT",
        contentType: "application/json",
        data: payload?.data,
      }),
      invalidatesTags: [tagTypes.flat],
    }),
    deleteFlat: builder.mutation({
      query: (id: string) => ({
        url: `/flats/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.flat],
    }),
    removeFlatPhoto: builder.mutation({
      query: (data: { imageLink: string; id: string }) => ({
        url: `/flats/${data.id}/photo`,
        method: "DELETE",
        contentType: "application/json",
        data: { imageLink: data?.imageLink },
      }),
      invalidatesTags: [tagTypes.flat],
    }),
  }),
});

export const {
  useAddFlatMutation,
  useGetSingleFlatQuery,
  useGetMyFlatsQuery,
  useDeleteFlatMutation,
  useGetAllFlatsQuery,
  useUpdateFlatMutation,
  useRemoveFlatPhotoMutation,
} = flatApi;
