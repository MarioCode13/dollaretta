import { client } from '@/sanity/lib/client'
import { ISSUE_BY_ID_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import ChapterContent from './ChapterContent'

export const experimental_ppr = true

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params

  const [chapter] = await Promise.all([client.fetch(ISSUE_BY_ID_QUERY, { id })])

  if (!chapter) return notFound()

  return (
    <>
      <section className='min-h-screen flex flex-col items-center justify-center mt-4 pb-10 px-4'>
        {/* Chapter Image */}
        <Image
          src={urlFor(chapter.image ?? '').url()}
          alt={chapter.title}
          className='rounded-xl object-cover mb-6 w-full max-w-md sm:max-w-lg lg:max-w-xl'
          width={600}
          height={450}
        />

        {/* Chapter Content */}
        <div className='w-full max-w-3xl'>
          <ChapterContent chapter={chapter} />
        </div>

        {/* Amazon Link Button */}
        <div className='mt-6'>
          <a
            href={chapter.amazonLink}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition'
          >
            Buy on Amazon
          </a>
        </div>
      </section>
    </>
  )
}

export default Page
