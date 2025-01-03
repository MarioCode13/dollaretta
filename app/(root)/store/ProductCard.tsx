'use client'
import { Button } from '@/components/ui/button'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'

type Product = {
  _id: string
  title: string
  price: number
  image: { asset: { url: string } }
  description: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      key={product._id}
      className='product-card bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex-col flex items-center'
    >
      <Image
        src={urlFor(product.image).url()}
        alt={product.title}
        className='product-image rounded-lg object-cover'
        height={400}
        width={400}
      />
      <h2 className='text-lg font-semibold mt-4 text-gray-800 font-cinzel'>
        {product.title}
      </h2>
      <p className='text-green-600 font-bold mt-2 font-cinzel'>
        ${product.price}
      </p>
      <p className='text-gray-600 mt-2 text-sm line-clamp-2 mb-4'>
        {product.description}
      </p>
      <Button
        className='mt-auto  text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-200 transition-colors'
        onClick={() => alert(`Buying ${product.title}`)}
      >
        Buy Now
      </Button>
    </div>
  )
}
