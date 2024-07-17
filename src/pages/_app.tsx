import { Roboto } from 'next/font/google'
import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { Header } from '../components/header'
import { Container } from '@/styles/pages/app'
import { CartProvider } from '@/context/CartContext'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Container className={roboto.className}>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
