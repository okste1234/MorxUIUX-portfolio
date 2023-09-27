import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MorxUIUX Portfolio',
  description: 'Adesewa Kolawole Portfolio, MorxUIUX Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupake">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
