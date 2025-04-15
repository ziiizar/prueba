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
import { Spinner } from "@/components/ui/spinner";

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
    try {
      const response = await signUp(data);
      
      if (response.success) {
        toast.success(response.success);
        router.push(routes.login);
      }
      if (response.error) {
        toast.error(response.error);
      }
    } catch (error) {
      toast.error("Error al crear la cuenta");
    }
  };

  return (
    <form className="space-y-6">
      <div className="">
        <Label className="mb-2" htmlFor="name">Nombre completo</Label>
        <Input
          {...register("name")}
          id="name"
          type="text"
          placeholder="Ingresa tu nombre completo"
          className={errors.name ? "border-red-500 focus:ring-red-500" : ""}
        />
        {errors.name && <p className="mt-1 text-xs text-red-600 font-medium animate-shake">{errors.name.message}</p>}
      </div>

      <div className="">
        <Label className="mb-2" htmlFor="email">Correo electrónico</Label>
        <Input
          {...register("email")}
          id="email"
          type="email"
          placeholder="ejemplo@correo.com"
          className={errors.email ? "border-red-500 focus:ring-red-500" : ""}
        />
        {errors.email && <p className="mt-1 text-xs text-red-600 font-medium animate-shake">{errors.email.message}</p>}
      </div>

      <div className="">
        <Label className="mb-2" htmlFor="password">Contraseña</Label>
        <Input
          {...register("password")}
          id="password"
          type="password"
          placeholder="••••••••"
          className={errors.password ? "border-red-500 focus:ring-red-500" : ""}
        />
        {errors.password && <p className="mt-1 text-xs text-red-600 font-medium animate-shake">{errors.password.message}</p>}
      </div>

      <div className="">
        <Label className="mb-2" htmlFor="confirm-password">Confirmar contraseña</Label>
        <Input
          {...register("confirmPassword")}
          id="confirm-password"
          type="password"
          placeholder="••••••••"
          className={errors.confirmPassword ? "border-red-500 focus:ring-red-500" : ""}
        />
        {errors.confirmPassword && <p className="mt-1 text-xs text-red-600 font-medium animate-shake">{errors.confirmPassword.message}</p>}
      </div>

      <div className="">
        <Label className="mb-2" htmlFor="state">Estado</Label>
        <Select
          defaultValue={STATES.CALIFORNIA}
          onValueChange={(value: string) => setValue("state", value)}
        >
          <SelectTrigger className={errors.state ? "border-red-500 focus:ring-red-500" : ""}>
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
        {errors.state && <p className="mt-1 text-xs text-red-600 font-medium animate-shake">{errors.state.message}</p>}
      </div>

      <Button
        onClick={handleSubmit(onSubmit)}
        type="submit"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : "Crear cuenta"}
      </Button>
    </form>
  );
};

export default SignupForm;
