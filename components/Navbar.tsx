'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className='fixed top-0 left-0 w-full px-5 py-3 bg-black bg-opacity-50 z-50'>
      <nav className='flex justify-between items-center container mx-auto'>
        {/* Logo */}
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='Logo'
            height={80}
            width={60}
            className='cursor-pointer'
          />
        </Link>

        {/* Desktop Links */}
        <div className='hidden md:flex items-center gap-5 text-white'>
          <Link
            href='/store'
            className='hover:text-primary-200'
          >
            Store
          </Link>
          <Link
            href='/the-legend'
            className='hover:text-primary-200'
          >
            The Legend
          </Link>
          <Link
            href='/the-characters'
            className='hover:text-primary-200'
          >
            The Characters
          </Link>
          <Link
            href='/the-creator'
            className='hover:text-primary-200'
          >
            The Creator
          </Link>
        </div>

        {/* Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className='text-white text-2xl md:hidden'
          aria-label='Toggle Menu'
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[95px] left-0 w-full bg-black bg-opacity-90 text-white md:hidden h-[calc(100vh-95px)] transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
      >
        <nav className='flex flex-col items-center gap-6 pt-10  pb-8 h-full'>
          <Link
            href='/store'
            className='hover:text-primary-200'
            onClick={() => setIsMenuOpen(false)}
          >
            Store
          </Link>
          <Link
            href='/the-legend'
            className='hover:text-primary-200'
            onClick={() => setIsMenuOpen(false)}
          >
            The Legend
          </Link>
          <Link
            href='/the-characters'
            className='hover:text-primary-200'
            onClick={() => setIsMenuOpen(false)}
          >
            The Characters
          </Link>
          <Link
            href='/the-creator'
            className='hover:text-primary-200'
            onClick={() => setIsMenuOpen(false)}
          >
            The Creator
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
