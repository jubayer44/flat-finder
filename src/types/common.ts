import { USER_ROLE } from './../constants/role';
import { TFlat } from './flat';



export type TUserRole = keyof typeof USER_ROLE;

export type TUser = {
    id: string;
    role: string;
    username: string;
    email: string;
    accessToken?: string;
    createdAt?: string;
    updatedAt?: string
};

export type TUserProfile = {
  id: string;
  username: string;
  email: string;
  role: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}

export type TFlatShareRequest = {
    success: boolean;
    statusCode: number;
    message: string;
    data: TFlatShareRequestData;
  }
  
  export type TFlatShareRequestData = {
    id: string;
    flatId: string;
    userId: string;
    status: string;
    space: any;
    message?: string;
    createdAt: string;
    updatedAt: string;
  }

  export type TFlatRequestResponse = {
    flat: TFlat;
    flatId: string;
    id: string;
    message: string;
    space: null | string;
    status: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
  }

  export type TGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorMessage: TGenericErrorMessage;
};

export type TGenericErrorMessage = {
  path: string;
  message: string;
}
