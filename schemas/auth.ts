import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  name: z.string().min(1),
  // city: z.string().min(1),
  state: z.string().min(1),
});

export type TSSignInSchema = z.infer<typeof signInSchema>;
export type TSSignUpSchema = z.infer<typeof signUpSchema>;

