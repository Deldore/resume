import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Эмиль Набиуллин | Резюме',
  description: 'Резюме разработчика',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
