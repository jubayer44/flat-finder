import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "https://flat-finder-server2.vercel.app/api" }),
  endpoints: () => ({}),
  tagTypes: ["flat"],
});
