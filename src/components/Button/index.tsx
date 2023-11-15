import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { Skeleton } from '../Skeleton'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex whitespace-nowrap justify-center items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      color: {
        primary:
          'border-blue-900 outline-blue-900 bg-blue-700 text-white hover:bg-blue-800 hover:border-blue-950 hover:outline-blue-950 disabled:bg-blue-100 disabled:text-blue-600 disabled:outline-blue-200',
        secondary:
          'border-slate-300 outline-slate-300 bg-slate-100 text-slate-700 hover:border-slate-400 hover:outline-slate-400 hover:bg-slate-200 disabled:bg-slate-50 disabled:text-slate-600 disabled:outline-slate-200',
        tertiary:
          'border-slate-300 outline-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:outline-slate-400 disabled:outline-slate-50',
        quaternary:
          'border-blue-600 outline-blue-600 bg-white text-blue-700 hover:bg-blue-100 hover:border-blue-800 hover:outline-blue-800 disabled:outline-slate-50',
        success:
          'border-teal-900 outline-teal-900 bg-teal-700 text-white hover:bg-teal-800 hover:outline-teal-950 hover:border-teal-950 disabled:bg-teal-100 disabled:text-teal-600 disabled:outline-teal-200',
        danger:
          'border-pink-900 outline-pink-900 bg-pink-700 text-white hover:bg-pink-800 hover:border-pink-950 disabled:text-pink-600 hover:outline-pink-950 disabled:bg-pink-100 disabled:outline-pink-200',
      },
      size: {
        xs: 'text-xs py-0.5 xl:py-1 2xl:py-1.5 px-1 xl:px-1.5 2xl:px-2',
        sm: 'text-sm py-1 xl:py-1.5 2xl:py-2 px-2.5 xl:px-3 2xl:px-3.5',
        md: 'text-base py-1.5 xl:py-2 2xl:py-2.5 px-3.5 xl:px-4 2xl:px-5',
        lg: 'text-xl py-2 xl:py-2.5 2xl:py-3 px-4 xl:px-5 2xl:px-6',
        xl: 'text-3xl py-2.5 xl:py-3 2xl:py-3.5 px-5 xl:px-6 2xl:px-7',
      },
      pill: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      color: 'secondary',
      size: 'md',
      pill: false,
    },
  },
)

type ButtonProps = {
  asChild?: boolean
  loading?: boolean
} & ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof buttonVariants>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      loading = false,
      color,
      size,
      pill,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <>
        {loading ? (
          <Skeleton
            className={cn(buttonVariants({ color, size, pill, className }))}
          >
            {children}
          </Skeleton>
        ) : (
          <Comp
            className={cn(buttonVariants({ color, size, pill, className }))}
            ref={ref}
            {...props}
          >
            {children}
          </Comp>
        )}
      </>
    )
  },
)

Button.displayName = 'Button'
