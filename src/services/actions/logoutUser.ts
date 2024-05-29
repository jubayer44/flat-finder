import { authKey } from "@/constants/authKey";
import { deleteCookies } from "./deleteCookies";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { removeFromLocalStorage } from "@/utils/localStorage";

export const logoutUser = (router: AppRouterInstance) => {
    removeFromLocalStorage("accessToken");
    deleteCookies([authKey, "refreshToken"]);
    router.push("/");
};