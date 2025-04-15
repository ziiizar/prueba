import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-secondary to-primary text-foreground font-medium ",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 bg-transparent relative before:absolute before:inset-0 before:p-[2px] before:rounded-md before:bg-gradient-to-r before:from-secondary before:to-primary before:-z-10 before:content-[''] after:absolute after:inset-[2px] after:rounded-[5px] after:bg-background after:-z-10 after:content-[''] text-foreground hover:bg-gradient-to-r hover:from-secondary hover:to-primary",
        secondary:"bg-secondary dark:bg-secondary-apple text-blackolive hover:bg-primary hover:text-sage font-medium",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 px-6 py-3 w-[244px] ",
        sm: "h-8  px-3",
        lg: "h-8  px-8",
        xl: "h-12  w-full ",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className  }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }



export const ButtonWithGradientBorder = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <button className={cn("gradient-border rounded-lg", className)}>{children}</button>
  )
}

