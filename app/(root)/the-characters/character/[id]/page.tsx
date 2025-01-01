import Image from 'next/image'

const CharacterPage = () => {
  // Temporary static data for demonstration
  const character = {
    name: 'Character Name',
    image: '/character1.jpg',
    description:
      'This is a brief description of the character. It highlights their role in the story, personality, and significant traits.',
  }

  return (
    <div className='min-h-screen flex flex-col items-center px-6 py-12'>
      {/* Image */}
      <div className='w-full max-w-lg rounded-lg overflow-hidden shadow-lg mb-8'>
        <Image
          src={character.image}
          alt={character.name}
          width={400}
          height={400}
          className='object-cover w-full h-full'
        />
      </div>

      {/* Name */}
      <h1 className='text-4xl font-bold text-center mb-4 font-cinzel'>
        {character.name}
      </h1>

      {/* Description */}
      <p className='text-lg text-gray-600 text-center max-w-3xl'>
        {character.description}
      </p>
    </div>
  )
}

export default CharacterPage
