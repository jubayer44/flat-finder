"use server";
import { authKey } from "@/constants/authKey";
import { redirect } from "next/navigation";
import {cookies} from "next/headers";

const setAuthToken = (token: string, option?: any) => {
    cookies().set(authKey, token);
    if(option && option?.redirect){
        redirect('/dashboard')
    };

};

export default setAuthToken;