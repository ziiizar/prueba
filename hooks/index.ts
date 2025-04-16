'use client'

import { getUser } from "@/services/auth";
import { useEffect, useState } from "react";
import { AuthUser } from "@/types";
import { routes } from "@/constants/routes";
import { useRouter } from "next/navigation";

export const useAuthUser = () => {
    const [authUser, setAuthUser] = useState<AuthUser | null>(null);
    useEffect( ()  => {
        const getAuthUser = async () => {
          const accessToken = localStorage.getItem("accessToken");
          console.log('accessToken');
          console.log(accessToken);
          if (!accessToken) {
            return null;
          }
          const user = await getUser(accessToken);
          setAuthUser(user);
        }
        getAuthUser();
      }, []);
      return authUser;
}

export const useSignOut = () => {
    const router = useRouter();
    const signOut = () => {
        localStorage.removeItem("accessToken");
        
        router.push(routes.home);
        router.refresh()
    }
    return signOut;
}
