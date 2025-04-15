import { authApi } from "@/lib/axios";
import {TSSignInSchema,TSSignUpSchema} from '@/schemas/auth'

export const login = async (data: TSSignInSchema) => {
    const response = await authApi.post("/login", data);
    return response.data;
}

export const signup = async (data: TSSignUpSchema) => {
    console.log('aaaaaaaaaaaaaaaaaaa');
    const response = await authApi.post("/signup", data);
    console.log('eeeeeeeeeeeeeeeeeeeeee');
    console.log(response);
    return response.data;
}

export const logout = async () => {
    const response = await authApi.post("/logout");
    return response.data;
}

export const getUser = async () => {
    const response = await authApi.get("/me");
    return response.data;
}







