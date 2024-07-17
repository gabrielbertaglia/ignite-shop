import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'

export function useCart() {
  const ctx = useContext(CartContext)
  return ctx
}
