import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const cinzel = localFont({
  src: [
    {
      path: './fonts/Cinzel-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Cinzel-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Cinzel-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Cinzel-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Cinzel-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Cinzel-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-cinzel',
})

const cinzelDecorative = localFont({
  src: [
    {
      path: './fonts/CinzelDecorative-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/CinzelDecorative-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-cinzel-d',
})

export const metadata: Metadata = {
  title: 'The Legend of Dollaretta',
  description: 'Comic',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${cinzel.variable} ${cinzelDecorative.variable}`}>
        {children}
      </body>
    </html>
  )
}
