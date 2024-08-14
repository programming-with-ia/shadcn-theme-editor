import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary/90 text-primary-foreground shadow hover:bg-primary/80",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // linkHover: "relative after:absolute text-base after:bg-primary after:bottom-2 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300",
      },
      size: {
        default: "px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
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
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

//*  ModernButton

function getModernButtonClassName(){
  return cn(buttonVariants({size:"lg"}), "bg-gradient-to-br from-card to-secondary relative group/btn shadow-[0px_1px_0px_0px_hsl(var(--border))_inset,0px_-1px_0px_0px_hsl(var(--border))_inset]")
}

function ModernButton({asChild = false, className, children, ...props}:ButtonProps){
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
    className={getModernButtonClassName()}
    {...props}
  >
    {children}
    <ModernButtonGradient />
  </Comp>
  )
}

function ModernButtonGradient(){
  return <BottomGradient selector="group-hover/btn:opacity-100 opacity-0" />
}
const BottomGradient = ({className1, className2, selector}:{className1?:string, className2?:string, selector?:string}) => {
  return (
    <>
      <span className={cn("block transition duration-500 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-primary to-transparent", selector, className1)} />
      <span className={cn("block transition duration-500 absolute h-px blur-sm w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-800 to-transparent", selector, className2)} />
    </>
  );
};

export { Button, buttonVariants }
export {ModernButton, BottomGradient, ModernButtonGradient, getModernButtonClassName}
