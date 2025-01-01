import Image from 'next/image'

const CreatorPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center px-6 py-12'>
      {/* Top Image */}
      <div className='mb-8'>
        <Image
          src='/creator/creator1.jpg'
          alt='The Creator'
          width={200}
          height={200}
          className='rounded-xl object-cover shadow-lg'
        />
      </div>

      {/* Heading */}
      <h1 className='text-4xl font-bold text-center mb-4 font-cinzel-d'>
        Cherry Gunzenhauser
      </h1>

      {/* Description */}
      <p className='text-lg text-gray-600 text-center max-w-2xl mb-12'>
        Discover the mind behind the creation. With a passion for storytelling
        and a vision for something extraordinary, the creator has poured their
        heart and soul into bringing this universe to life. Every detail, from
        the characters to the landscapes, is crafted with care and intention.
      </p>

      {/* Banner Image */}
      <div className='w-full '>
        <Image
          src='/creator/creator2.png'
          alt='Creator Banner'
          width={900}
          height={700}
          className='max-w-[900px] rounded-xl shadow-md object-cover max-h-[700px] mx-auto'
        />
      </div>
    </div>
  )
}

export default CreatorPage
