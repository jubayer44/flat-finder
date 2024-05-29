import { USER_ROLE } from './../constants/role';



export type TUserRole = keyof typeof USER_ROLE;

export type TUser = {
    id: string;
    role: string;
    username: string;
    email: string;
    accessToken?: string;
    createdAt?: string;
    updatedAt?: string
}
