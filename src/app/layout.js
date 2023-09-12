import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '3d Earth Scroll',
  description: 'Next.js v13 - TailwindCss - React Three Fiber - Framer Motion - Lenis Scroll',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
