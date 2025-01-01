import HomeNavbar from '@/components/HomeNavbar'
import React from 'react'

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className='font-cinzel'>
      <HomeNavbar />
      {children}
    </main>
  )
}
