import { authKey } from "@/constants/authKey";
import { instance as axiosInstance } from "@/helpers/axios/axiosInstance";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";

export const isUserLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
  return false;
};

export const storeUser = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};


export const getUserInfo = () => {
  const token = getFromLocalStorage(authKey);
  if (token) {
    const decodedData: any = decodedToken(token);
    return {
      ...decodedData,
      role: decodedData?.role?.toLowerCase(),
    };
  }
};

export const getUserProfile = async () => {
  return await axiosInstance({
    url: `${process.env.NEXT_PUBLIC_URL}/me`,
    method: "GET",
  });
}

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${process.env.NEXT_PUBLIC_URL}/auth/refresh-token`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};


