import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type SkeletonProps = {
  showContent?: boolean
} & ComponentProps<'div'>

export function Skeleton({
  showContent = false,
  className,
  children,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse select-none rounded-md bg-slate-200',
        className,
        {
          'text-transparent': !showContent,
        },
      )}
      {...props}
    >
      {children}
    </div>
  )
}
