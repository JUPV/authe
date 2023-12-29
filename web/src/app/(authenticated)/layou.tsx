import { ReactNode } from 'react'
import '../globals.css'
import { Roboto_Flex as Roboto } from 'next/font/google'
import { cookies } from 'next/headers'
import PrivateRouter from '@/context/privateRouter'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

// eslint-disable-next-line react-hooks/rules-of-hooks

export const metadata = {
  title: 'InnovateCode Group',
  description: 'Aplicativo Innovate gestão de rádios.',
}
export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')
  return (
    <html lang="en" className="h-full">
      <body className={`${roboto.variable} h-full font-sans text-[#5f6368]`}>
        <PrivateRouter isAuthenticated={isAuthenticated}>
          {children}
        </PrivateRouter>
      </body>
    </html>
  )
}
