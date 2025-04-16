"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { signUpSchema, TSSignUpSchema } from "@/actions/signup/schema";
import bcrypt from "bcryptjs";

export const signUp = async (values: TSSignUpSchema) => {
  // Validar los datos del formulario
  const validatedFields = signUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos" };
  }

  const { email, password, name, state } = validatedFields.data;

  try {
    console.log("hola");

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return { error: "El correo ya está en uso" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        state,
      },
    });

    return {
      success:
        "Usuario creado correctamente",
    };
  } catch (error) {
    return { error: "Algo salió maaaaaaaaaaaal" };
  }
};
