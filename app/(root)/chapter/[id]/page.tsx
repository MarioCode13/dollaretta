import { client } from '@/sanity/lib/client'
import { ISSUE_BY_ID_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import ChapterContent from '../../the-characters/character/[id]/ChapterContent'

export const experimental_ppr = true

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params

  const [chapter] = await Promise.all([client.fetch(ISSUE_BY_ID_QUERY, { id })])

  if (!chapter) return notFound()

  return (
    <>
      <section className='min-h-screen flex flex-col items-center justify-center mt-4 pb-10'>
        <Image
          src={urlFor(chapter.image ?? '').url()}
          alt={chapter.title}
          className='rounded-xl max-h-[80vh] object-cover mb-6'
          width={400}
          height={450}
        />
        <ChapterContent chapter={chapter} />

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
