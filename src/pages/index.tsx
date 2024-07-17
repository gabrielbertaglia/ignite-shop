import { HomeContainer, Product, SliderContainer } from '@/styles/pages/home'
import Image from 'next/image'

import { stripe } from '@/lib/stripe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import { CartButton } from '@/components/cart-button'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/context/CartContext'
import { MouseEvent, useEffect, useState } from 'react'
import { ProductSkeleton } from '@/components/product-skeleton'
import Head from 'next/head'

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log('Setting timeout')
    const timeOut = setTimeout(() => {
      console.log('Timeout executed')
      setIsLoading(false)
    }, 2000)

    return () => {
      console.log('Clearing timeout')
      clearTimeout(timeOut)
    }
  }, [])

  const [emblaRef] = useEmblaCarousel({
    align: 'center',
    skipSnaps: false,
    dragFree: true,
  })

  const { addToCart, checkIfItemAlreadyExists } = useCart()

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: IProduct,
  ) {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <HomeContainer>
          <div className="embla" ref={emblaRef}>
            <SliderContainer className="embla__container container">
              <>
                {isLoading ? (
                  <>
                    <ProductSkeleton className="embla__slide" />
                    <ProductSkeleton className="embla__slide" />
                    <ProductSkeleton className="embla__slide" />
                  </>
                ) : (
                  <>
                    {products.map((product) => (
                      <Link
                        key={product.id}
                        href={`product/${product.id}`}
                        prefetch={false}
                      >
                        <Product className="embla__slide">
                          <Image
                            src={product.imageUrl}
                            alt=""
                            width={520}
                            height={480}
                          />

                          <footer>
                            <div>
                              <strong>{product.name}</strong>
                              <span>{product.price}</span>
                            </div>
                            <CartButton
                              color={'green'}
                              disabled={checkIfItemAlreadyExists(product.id)}
                              size="large"
                              onClick={(e) => handleAddToCart(e, product)}
                            />
                          </footer>
                        </Product>
                      </Link>
                    ))}
                  </>
                )}
              </>
            </SliderContainer>
          </div>
        </HomeContainer>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(Number(price.unit_amount) / 100),
      imageUrl: product.images[0],
      totalPrice: Number(price.unit_amount) / 100,
      defaultPriceId: price.id,
    }
  })
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}
