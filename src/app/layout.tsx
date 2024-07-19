import { cx } from 'class-variance-authority'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { ReactElement, ReactNode } from 'react'

import { StoreProvider } from '@/modules/Core/providers/StoreProvider'

import './globals.css'

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: '700' })

export const metadata: Metadata = {
  title: 'Password Generator',
  description: `Enhance your online security with the Password Generator app!
    Create strong, unique passwords for all your accounts with just a few taps. 
    Our user-friendly interface and advanced algorithms ensure that 
    you always have the most secure passwords at your fingertips.`,
}

const bodyClassName = cx(jetBrainsMono.className, 'bg-ui-dark text-ui-light')

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactElement => {
  return (
    <html lang='en'>
      <StoreProvider>
        <body className={bodyClassName}>{children}</body>
      </StoreProvider>
    </html>
  )
}

export default RootLayout
