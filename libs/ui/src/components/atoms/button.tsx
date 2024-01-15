import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'
import { buttonVariants } from '../../util/variants'
import { cn } from '../../util'
import { Loader } from 'lucide-react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      type = 'button',
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={type}
        {...props}
      >
        {loading ? <Loader className="animate-spin" /> : children}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button }
