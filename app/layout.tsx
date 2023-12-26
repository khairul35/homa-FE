import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/layout/Header';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyAccount2U',
  description: 'Accounting System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col h-screen'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
