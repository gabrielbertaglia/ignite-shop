import { X } from '@phosphor-icons/react'
import {
  Root,
  Portal,
  Title,
  Description,
  Trigger,
} from '@radix-ui/react-dialog'
import {
  CartContent,
  CartClose,
  CartProduct,
  CartProductImage,
  Checkout,
  CheckoutDetails,
  CartProductDetails,
} from './styles'
import { CartButton } from '../cart-button'
import Image from 'next/image'
import { Button } from '../button'
import { useCart } from '@/hooks/useCart'

export function Cart() {
  const { cartItems, cartTotal, removeToCart } = useCart()

  const cartQuantity = cartItems.length

  const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotal)

  return (
    <Root>
      <Trigger asChild>
        <CartButton />
      </Trigger>
      <Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <Title>Sacolas e compras</Title>

          {cartQuantity <= 0 && (
            <Description>Não há produto no carrinho 🙁</Description>
          )}

          <section>
            {cartItems.map((cartItem) => (
              <CartProduct key={cartItem.id}>
                <CartProductImage>
                  <Image
                    width={100}
                    height={93}
                    src={cartItem.imageUrl}
                    alt=""
                  />
                </CartProductImage>

                <CartProductDetails>
                  <p>{cartItem.name}</p>
                  <strong>{cartItem.price}</strong>
                  <button onClick={() => removeToCart(cartItem.id)}>
                    Remover
                  </button>
                </CartProductDetails>
              </CartProduct>
            ))}
          </section>

          <Checkout>
            <CheckoutDetails>
              <div>
                <span>Quantidade</span>
                <p>
                  {cartQuantity} {cartQuantity === 1 ? 'item' : 'itens'}
                </p>
              </div>
              <div>
                <strong>Valor total</strong>
                <h3>{formattedCartTotal}</h3>
              </div>
            </CheckoutDetails>
            <Button>Finalizar Compra</Button>
          </Checkout>
        </CartContent>
      </Portal>
    </Root>
  )
}
