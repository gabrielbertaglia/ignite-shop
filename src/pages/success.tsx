import { stripe } from '@/lib/stripe'
import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from '@/styles/pages/success'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

interface SuccessProps {
  customerName: string
  productImage: string[]
}

export default function Success({ customerName, productImage }: SuccessProps) {
  console.log(productImage)
  return (
    <SuccessContainer>
      <ImagesContainer>
        {productImage.map((image, i) => (
          <ImageContainer key={i}>
            <Image alt="" src={image} width={120} height={110} />
          </ImageContainer>
        ))}
      </ImagesContainer>
      <h1>Compra efetuada!</h1>

      <p>
        Uhuul <strong>{customerName}</strong>, sua compra de{' '}
        {productImage.length} camisetas já está a minho da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const productImage = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product
    return product.images[0]
  })

  return {
    props: {
      customerName,
      productImage,
    },
  }
}
