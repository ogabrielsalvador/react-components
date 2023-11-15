import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono as RobotoMono } from 'next/font/google'

import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const robotoMono = RobotoMono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: {
    template: '%s | React Components',
    default: 'React Components',
  },
  description: 'A collection of React components',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          robotoMono.variable,
          inter.className,

          'antialiased',
        )}
      >
        {children}
      </body>
    </html>
  )
}
