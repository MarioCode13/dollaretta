import Image from 'next/image'
import Link from 'next/link'

const HomeNavbar = async () => {
  return (
    <header className='fixed top-0 left-0 w-full px-5 py-3 bg-black bg-opacity-50 z-50'>
      <nav className='flex justify-between items-center container'>
        <div className='flex items-center gap-5'>
          <Link href='/'>
            <Image
              src='/logo.png'
              alt='Logo'
              height={80}
              width={60}
            />
          </Link>
        </div>

        <div className='flex items-center gap-5 text-white'>
          <Link
            href='/store'
            className='text-white'
          >
            Store
          </Link>
          <Link
            href='/the-legend'
            className='text-white'
          >
            The Legend
          </Link>
          <Link
            href='/the-characters'
            className='text-white'
          >
            The Characters
          </Link>
          <Link
            href='/the-creator'
            className='text-white'
          >
            The Creator
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default HomeNavbar
