import { TUser } from "@/types";
import setAuthToken from "@/utils/setAuthToken";
import { FieldValues } from "react-hook-form";

type TUserLogin = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TUser;
};

const loginUser = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  const userData: TUserLogin | any = await res.json();

  if (userData?.data?.accessToken) {
    setAuthToken(userData.data.accessToken, { redirect: "/dashboard" });
  }
  return userData;
};

export default loginUser;
