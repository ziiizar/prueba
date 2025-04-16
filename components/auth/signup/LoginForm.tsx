'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, TSLoginSchema } from '@/actions/login/schema'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { login } from '@/actions/login/action'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { routes } from '@/constants/routes'

const LoginForm = () => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors, isLoading } } = useForm<TSLoginSchema>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: TSLoginSchema) => {
    const response = await login(data)
    if (response.success) {
      toast.success(response.success);
      router.push(routes.home)
    }
    if (response.error) {
      toast.error(response.error);
    }
  }

  return (
    <form className="space-y-6">
          <div className="">
            <Label className="mb-2" htmlFor="email">Correo electrónico</Label>
            <Input 
              {...register("email")}
              id="email" 
              type="email" 
              placeholder="ejemplo@correo.com"
              className={errors.email ? "border-red-500 focus:ring-red-500" : ""}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600 font-medium animate-shake">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="">
            <div className="flex items-center justify-between mb-2">
              <Label htmlFor="password">Contraseña</Label>
              <Link 
                href="/forgot-password" 
                className="text-sm text-primary hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <Input 
              {...register("password")}
              id="password" 
              type="password" 
              placeholder="••••••••"
              className={errors.password ? "border-red-500 focus:ring-red-500" : ""}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-600 font-medium animate-shake">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full"
            onClick={handleSubmit(onSubmit)}
            disabled={isLoading}
          >
            {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
          </Button>
        </form>
  )
}

export default LoginForm