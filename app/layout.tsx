import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ToastProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers/confetti-provider'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Edu Flow',
  description: 'Education courses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={rubik.className}>
          <ConfettiProvider/>
          <ToastProvider/>
          {children}
          </body>
      </html>
    </ClerkProvider>
  )
}
