import { tagTypes } from "../tagType";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    changePassword: builder.mutation({
      query: (data: { oldPassword: string; newPassword: string }) => ({
        url: "/auth/change-password",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateUserProfile: builder.mutation({
      query: (data: { username?: string; email?: string }) => ({
        url: "/update-user",
        method: "PUT",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    getMyProfile: builder.query({
      query: () => ({
        url: "/me",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    getMetaData: builder.query({
      query: () => ({
        url: "/meta-data",
        method: "GET",
      }),
      providesTags: [tagTypes.flat, tagTypes.flatShareRequest, tagTypes.user],
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    deleteUser: builder.mutation({
      query: (id: string) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateUserRoleOrStatus: builder.mutation({
      query: (payload: {
        data: { role?: string; status?: string };
        id: string;
      }) => ({
        url: `/user/${payload?.id}`,
        method: "PATCH",
        contentType: "application/json",
        data: payload?.data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useChangePasswordMutation,
  useUpdateUserProfileMutation,
  useGetMyProfileQuery,
  useGetMetaDataQuery,
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useUpdateUserRoleOrStatusMutation,
} = userApi;
