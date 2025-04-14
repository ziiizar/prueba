import { cn } from "@/lib/utils"

interface SpinnerProps {
  className?: string
}

export const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div className="mx-auto size-8 mt-4">
      <div className={cn("animate-spin rounded-full border-2 border-primary border-t-transparent", className)} />
    </div>
  )
} 