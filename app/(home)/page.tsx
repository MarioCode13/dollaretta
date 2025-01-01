import Carousel from '@/components/carousel/Carousel'
import { Button } from '@/components/ui/button'
import { sanityFetch } from '@/sanity/lib/live'
import { ISSUES_QUERY } from '@/sanity/lib/queries'
import Image from 'next/image'

export default async function Home() {
  const { data: issues } = await sanityFetch({ query: ISSUES_QUERY })

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Banner Section */}
      <div className='relative h-[101vh] w-full'>
        <Image
          src='/home/banner.png'
          alt='Banner'
          layout='fill'
          objectFit='cover'
          className='absolute inset-0 z-0'
        />
        <div className='absolute inset-0 z-10 bg-black bg-opacity-50  flex justify-center'>
          <div className='max-w-[1440px] w-full px-4 flex justify-end items-center'>
            <div className='flex flex-col justify-center items-center text-white max-w-lg'>
              <Image
                src={'/home/dreamcatcher.png'}
                width={90}
                height={90}
                alt='dreamcatcher'
              />
              <h1 className='text-center text-2xl font-cinzel-d'>
                An illustrated murder-mystery, fantasy series
              </h1>
              <Button className='mt-6'>Shop Now</Button>
            </div>
          </div>
        </div>
      </div>
      {/* Chapters */}
      <div className='relative h-screen w-full'>
        {/* Background Image */}
        <Image
          src='/home/banner2.jpg'
          alt='Banner'
          layout='fill'
          objectFit='cover'
          className='absolute inset-0 z-0'
        />

        {/* Overlay and Centered Carousel */}
        <div className='absolute inset-0 z-10 bg-gray-300 bg-opacity-80 flex items-center justify-center '>
          <div className='max-w-[1440px] w-full px-4 flex justify-end items-center flex-col'>
            <h1 className='text-center text-4xl font-cinzel-d text-black mb-14'>
              Chapters
            </h1>
            <Carousel
              slides={issues}
              options={{ align: 'center', loop: true }}
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <main className='flex flex-col gap-8 items-center sm:items-start px-8 pb-20 font-[family-name:var(--font-geist-sans)]'>
        {/* Add your main content here */}
      </main>
    </div>
  )
}
