import { SkeletonProductId } from '@/components/skeleton-product-id'
import { IProduct } from '@/context/CartContext'
import { useCart } from '@/hooks/useCart'
import { stripe } from '@/lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stripe from 'stripe'

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()
  const { addToCart, checkIfItemAlreadyExists } = useCart()

  console.log(product)

  function handleAddToCart() {
    addToCart(product)
  }

  if (isFallback) {
    return <SkeletonProductId />
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image alt="" src={product.imageUrl} width={520} height={480} />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button
          onClick={handleAddToCart}
          disabled={checkIfItemAlreadyExists(product.id)}
        >
          Colocar na sacola
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  if (!params?.id) {
    return {
      notFound: true,
    }
  }

  const productId = String(params.id)

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(Number(price.unit_amount) / 100),
        imageUrl: product.images[0],
        description: product.description,
        totalPrice: Number(price.unit_amount) / 100,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1,
  }
}
