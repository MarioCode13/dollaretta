import Image from 'next/image'

const characters = [
  { id: 1, name: 'Character One', image: '/character1.jpg' },
  { id: 2, name: 'Character Two', image: '/character2.jpg' },
  { id: 3, name: 'Character Three', image: '/character3.jpg' },
  { id: 4, name: 'Character Four', image: '/character4.jpg' },
  { id: 5, name: 'Character Five', image: '/character5.jpg' },
  { id: 6, name: 'Character Six', image: '/character6.jpg' },
]

const TheCharactersPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center px-6 py-12'>
      {/* Heading */}
      <h1 className='text-5xl font-bold text-center mb-8 font-cinzel'>
        The Characters
      </h1>

      {/* Description */}
      <p className='text-lg text-gray-600 text-center max-w-3xl mb-12'>
        Meet the iconic individuals who bring the legend to life. Each character
        plays a unique role in shaping the story, their journeys intertwining to
        create an unforgettable tale.
      </p>

      {/* Character Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl'>
        {characters.map((character) => (
          <div
            key={character.id}
            className='flex flex-col items-center text-center'
          >
            <div className='rounded-lg overflow-hidden shadow-lg'>
              <Image
                src={character.image}
                alt={character.name}
                width={300}
                height={300}
                className='object-cover'
              />
            </div>
            <h2 className='mt-4 text-xl font-semibold'>{character.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TheCharactersPage
