import { createContext, ReactNode, useState } from 'react'

interface CartProviderProps {
  children: ReactNode
}

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
  totalPrice: number
  description: string
  defaultPriceId: string
}

export interface CartContextType {
  cartItems: IProduct[]
  cartTotal: number
  addToCart: (product: IProduct) => void
  checkIfItemAlreadyExists(productId: string): boolean
  removeToCart(productId: string): void
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([])

  const cartTotal = cartItems.reduce((acc, product) => {
    return acc + product.totalPrice
  }, 0)

  function addToCart(product: IProduct) {
    setCartItems((state) => [...state, product])
  }

  function removeToCart(productId: string) {
    setCartItems((state) => state.filter((product) => product.id !== productId))
  }

  function checkIfItemAlreadyExists(productId: string) {
    return cartItems.some((product) => product.id === productId)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        addToCart,
        checkIfItemAlreadyExists,
        removeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
