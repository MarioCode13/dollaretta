import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { CHARACTER_BY_ID_QUERY } from '@/sanity/lib/queries'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Character } from '@/sanity/types'

export const experimental_ppr = true

const CharacterPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params

  const [character] = await Promise.all([
    client.fetch<Character>(CHARACTER_BY_ID_QUERY, { id }),
  ])

  if (!character) return notFound()

  return (
    <div className='min-h-screen flex flex-col items-center px-6 py-12'>
      {/* Image */}
      <div className='w-full max-w-lg rounded-lg overflow-hidden shadow-lg mb-8 flex  justify-center'>
        <Image
          src={urlFor(character.image ?? '').url()}
          alt={character.nickname ?? 'portrait'}
          width={300}
          height={300}
        />
      </div>

      {/* Name */}
      <h1 className='text-4xl font-bold text-center mb-4 font-cinzel'>
        {character.name}
      </h1>
      <div className='w-full max-w-lg rounded-lg overflow-hidden shadow-lg mb-8 flex  justify-center'>
        <Image
          src={urlFor(character.descriptionImage ?? '').url()}
          alt={character.nickname ?? 'portrait'}
          width={1000}
          height={1000}
        />
      </div>
    </div>
  )
}

export default CharacterPage
