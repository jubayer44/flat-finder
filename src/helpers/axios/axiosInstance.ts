import { authKey } from "@/constants/authKey";
import { getNewAccessToken } from "@/services/authServices";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";
import setAuthToken from "@/utils/setAuthToken";
import axios from "axios";
import {TGenericErrorResponse} from '@/types';

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getFromLocalStorage(authKey);

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObject = {
      data: response?.data
    };
    return responseObject;
    // return response;
  },
  async function (error) {
    const config = error.config;
    if (error?.response?.data?.message?.includes("jwt") && !config.sent) {
      config.sent = true;
      const response = await getNewAccessToken();
      const accessToken = response?.data?.accessToken as string;
      config.headers["Authorization"] = accessToken;
      setToLocalStorage(authKey, accessToken);
      setAuthToken(accessToken);
      return instance(config);
    } else {
      const responseObject: TGenericErrorResponse = {
        statusCode: error?.response?.data?.errorDetails?.statusCode || 500,
        message: error?.response?.data?.message || "Something went wrong!!!",
        errorMessage: error?.response?.data?.message,
      };
      // return Promise.reject(error);
      
      return responseObject;
    }
  }
);

export { instance };
