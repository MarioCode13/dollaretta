'use client'

import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Character } from '@/sanity/types'

interface CharacterCardProps {
  character: Character
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const router = useRouter()

  return (
    <div
      className='flex flex-col items-center text-center cursor-pointer grayscale hover:grayscale-0 ease-in-out duration-700'
      onClick={() => router.push(`the-characters/character/${character._id}`)}
    >
      {/* Image */}
      <div className='rounded-lg overflow-hidden shadow-xl  '>
        <Image
          src={urlFor(character.image ?? '').url()}
          alt={character.nickname ?? 'portrait'}
          width={300}
          height={300}
          className='object-cover'
        />
      </div>

      {/* Name */}
      <h2 className='mt-4 text-xl font-semibold font-cinzel'>
        {character.name}
      </h2>
    </div>
  )
}

export default CharacterCard
