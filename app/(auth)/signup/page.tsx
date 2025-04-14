import { routes } from "@/constants/routes"
import Link from "next/link"
import SignupForm from "@/components/auth/signup/SignupForm"

const SignupPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Crear cuenta</h1>
          <p className="text-muted-foreground">Regístrate para comenzar tu experiencia</p>
        </div>

        <SignupForm />

        <div className="text-center text-sm">
          <span className="text-muted-foreground">¿Ya tienes una cuenta? </span>
          <Link 
            href={routes.login} 
            className="text-primary hover:underline"
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    </main>
  )
}

export default SignupPage