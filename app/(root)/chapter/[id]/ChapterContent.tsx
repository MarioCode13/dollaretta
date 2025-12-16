'use client'

import { useEffect } from 'react'

const ChapterContent = ({
  chapter,
}: {
  chapter: { title: string; description: string }
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <h1 className='text-4xl font-bold text-center mb-6 font-cinzel-d'>
        {chapter.title}
      </h1>
      <p className='text-lg mb-8 max-w-2xl text-center font-cinzel'>
        {chapter.description}
      </p>
    </div>
  )
}

export default ChapterContent
