'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import './carousel.css'
import { Issue } from '@/sanity/types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { useRouter } from 'next/navigation'

export type CarouselItemType = Omit<Issue, 'issue'>

type PropType = {
  slides: Issue[]
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const router = useRouter()

  const handleSlideClick = (id: string) => {
    router.push(`/chapter/${id}`)
  }

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <div className='w-full relative max-w-[76rem]'>
      <PrevButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />
      <section className='embla'>
        <div
          className='embla__viewport'
          ref={emblaRef}
        >
          <div className='embla__container'>
            {slides.map((issue) => (
              <div
                className='embla__slide'
                key={issue._id}
                onClick={() => handleSlideClick(issue._id)}
              >
                <Image
                  src={urlFor(issue?.image ?? '').url()}
                  alt='cover'
                  height={400}
                  width={300}
                  objectFit='cover'
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <NextButton
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      />
    </div>
  )
}

export default Carousel
