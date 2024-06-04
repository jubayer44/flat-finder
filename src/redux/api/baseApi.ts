import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tagType";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_URL}` }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
