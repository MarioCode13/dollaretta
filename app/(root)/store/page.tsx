import { client } from '@/sanity/lib/client'
import { ISSUES_QUERY } from '@/sanity/lib/queries'
import ProductCard from './ProductCard'

type Product = {
  _id: string
  title: string
  price: number
  image: { asset: { url: string } }
  description: string
}

async function fetchProducts(): Promise<Product[]> {
  const products = await client.fetch(ISSUES_QUERY)
  return products
}

const StorePage = async () => {
  const products = await fetchProducts()

  return (
    <div className='min-h-screen flex flex-col items-center px-6 py-12 max-w-7xl mx-auto  '>
      <h1 className='text-5xl font-bold text-center mb-8 font-cinzel'>Store</h1>
      <div className='product-grid grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </div>
  )
}

export default StorePage
