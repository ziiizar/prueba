import { authApi } from "@/lib/axios";
import {TSSignInSchema,TSSignUpSchema} from '@/schemas/auth'

export const login = async (data: TSSignInSchema) => {
    const response = await authApi.post("/login", data);
    const accessToken = response.data.access_token;
    localStorage.setItem("accessToken", accessToken);
    return response.data;
}

export const signup = async (data: TSSignUpSchema) => {
    const response = await authApi.post("/signup", data);
    return response.data;
}

export const logout = async () => {
    const response = await authApi.post("/logout");
    return response.data;
}

export const getUser = async (accessToken: string) => {
    try {
        console.log('aaaaaaaaaaaaaaaaaaa');
        console.log(accessToken);
        const response = await authApi.get("/me", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        console.log('aaaaaaaaaaaaaaaaaaa');
        console.log(error);
        return null;
    }
}







