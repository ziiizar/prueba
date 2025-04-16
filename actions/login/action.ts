"use server";

import { signIn } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { AuthError } from "next-auth";
import { TSLoginSchema } from "./schema";

export const login = async (values: TSLoginSchema) => {
  const { email, password } = values;

  console.log(email, password);

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Not user found" };
  }



  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return { data: existingUser, success: "Welcome" };
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin")
        return { error: "Incorrect credentials" };

      if (error.type === "AccessDenied") return { error: "Access denied" };
    }
    return { error: "Error during login" };
  }
};

