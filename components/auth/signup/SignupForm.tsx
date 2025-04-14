"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signUpSchema, TSSignUpSchema } from "@/actions/signup/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { STATES } from "@/mocks";
import { signUp } from "@/actions/signup/action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";

const SignupForm = () => {
  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<TSSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: TSSignUpSchema) => {
    const response = await signUp(data);

    console.log("ddddddddddddddd");
    console.log(data);
    if (response.success) {
      toast.success(response.success);
      router.push(routes.login);
    }
    if (response.error) {
      toast.error(response.error);
    }
  };

  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre completo</Label>
        <Input
          {...register("name")}
          id="name"
          type="text"
          placeholder="Ingresa tu nombre completo"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          {...register("email")}
          id="email"
          type="email"
          placeholder="ejemplo@correo.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Contraseña</Label>
        <Input
          {...register("password")}
          id="password"
          type="password"
          placeholder="••••••••"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirm-password">Confirmar contraseña</Label>
        <Input
          {...register("confirmPassword")}
          id="confirm-password"
          type="password"
          placeholder="••••••••"
        />
      </div>
      <div className="flex gap-4">
        <div className="space-y-2">
          <Label htmlFor="state">Estado</Label>
          <Select
            defaultValue={STATES.CALIFORNIA}
            onValueChange={(value: string) => setValue("state", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleccione su estado" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(STATES).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {errors.state && <p className="text-red-500">{errors.state.message}</p>}
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword.message}</p>
        )}
      </div>

      <Button
        onClick={handleSubmit(onSubmit)}
        type="submit"
        className="w-full"
        disabled={isLoading}
      >
        Crear cuenta
      </Button>
    </form>
  );
};

export default SignupForm;
