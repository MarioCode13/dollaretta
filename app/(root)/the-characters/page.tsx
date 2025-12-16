import { sanityFetch } from '@/sanity/lib/live'
import { CHARACTERS_QUERY } from '@/sanity/lib/queries'
import { Character } from '@/sanity/types'
import CharacterCard from './CharacterCard'

const TheCharactersPage = async () => {
  const { data: characters } = await sanityFetch({ query: CHARACTERS_QUERY })
  return (
    <div className='min-h-screen flex flex-col items-center px-6 py-12'>
      {/* Heading */}
      <h1 className='text-5xl font-bold text-center mb-8 font-cinzel'>
        The Characters
      </h1>

      {/* Description */}
      <p className='text-lg   text-center max-w-3xl mb-12'>
        Meet the iconic individuals who bring the legend to life.
      </p>

      {/* Character Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl'>
        {characters.map((character: Character) => (
          <CharacterCard
            key={character._id}
            character={character}
          />
        ))}
      </div>
    </div>
  )
}

export default TheCharactersPage
