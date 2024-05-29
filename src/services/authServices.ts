import { authKey } from "@/constants/authKey";
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
  console.log(accessToken)
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
