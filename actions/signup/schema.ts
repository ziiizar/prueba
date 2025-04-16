import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email("El correo electrónico no es válido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
  confirmPassword: z.string().min(8, "La confirmación debe tener al menos 8 caracteres"),
  name: z.string().min(1, "El nombre es requerido"),
  state: z.string().min(1, "Debe seleccionar un estado"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"], 
});

export type TSSignUpSchema = z.infer<typeof signUpSchema>;
