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
  CartProductDetails,
  Checkout,
  CheckoutDetails,
} from './styles'
import { CartButton } from '../cart-button'
import Image from 'next/image'
import { Button } from '../button'

export function Cart() {
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

          <Description>Não há produto no carrinho 🙁</Description>

          <section>
            <CartProduct>
              <CartProductImage>
                <Image width={100} height={93} src="" alt="" />
              </CartProductImage>

              <CartProductDetails>
                <p>Produto 1</p>
                <strong>R$ 50,00</strong>
                <button>Remover</button>
              </CartProductDetails>
            </CartProduct>
          </section>

          <Checkout>
            <CheckoutDetails>
              <div>
                <span>Quantidade</span>
                <p>2 items</p>
              </div>
              <div>
                <strong>Valor total</strong>
                <h3>R$ 170,00</h3>
              </div>
            </CheckoutDetails>
            <Button>Finalizar Compra</Button>
          </Checkout>
        </CartContent>
      </Portal>
    </Root>
  )
}
