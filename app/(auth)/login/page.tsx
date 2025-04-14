'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { routes } from "@/constants/routes"
import Link from "next/link"
import LoginForm from "@/components/auth/signup/LoginForm"

const LoginPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Iniciar sesión</h1>
          <p className="text-muted-foreground">Bienvenido de nuevo</p>
        </div>

        <LoginForm />

        <div className="text-center text-sm">
          <span className="text-muted-foreground">¿No tienes una cuenta? </span>
          <Link 
            href={routes.signup} 
            className="text-primary hover:underline"
          >
            Crear cuenta
          </Link>
        </div>
      </div>
    </main>
  )
}

export default LoginPage
