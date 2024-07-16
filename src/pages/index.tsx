import { HomeContainer, Product, SliderContainer } from '@/styles/pages/home'
import Image from 'next/image'

import { stripe } from '@/lib/stripe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import { CartButton } from '@/components/cart-button'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [emblaRef] = useEmblaCarousel({
    align: 'center',
    skipSnaps: false,
    dragFree: true,
  })

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <HomeContainer>
        <div className="embla" ref={emblaRef}>
          <SliderContainer className="embla__container container">
            <>
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`product/${product.id}`}
                  className="keen-slider__slide"
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
                      <CartButton color={'green'} size="large" />
                    </footer>
                  </Product>
                </Link>
              ))}
            </>
          </SliderContainer>
        </div>
      </HomeContainer>
    </div>
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
    }
  })
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}
