import { styled } from '@/styles'
import { Close, Content } from '@radix-ui/react-dialog'

export const CartContent = styled(Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '30rem',
  background: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontWeight: 700,
    fontSize: '$lg',
    color: '$gray100',
    marginBottom: '2rem',
  },

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    flex: 1,
    overflowY: 'auto',
  },
})

export const CartClose = styled(Close, {
  background: 'none',
  border: 'none',
  color: '$gray500',
  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',
})

export const CartProduct = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '1.25rem',
  // alignItems: 'center',
})

export const CartProductImage = styled('div', {
  width: '6.371rem',
  height: '5.813rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  },
})

export const CartProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  p: {
    color: '$gray300',
    fontSize: '$md',
    paddingBottom: '2px',
  },

  strong: {
    fontSize: '$md',
    fontWeight: 700,
  },

  button: {
    marginTop: 'auto',
    width: 'max-content',
    background: 'none',
    border: 'none',
    fontSize: '1rem',
    color: '$green500',
    fontWeight: 'bold',
  },
})

export const Checkout = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',
})

export const Button = styled('button', {
  border: 'none',
  background: '$green500',
  color: '$white',
  fontSize: '$md',
  padding: '1.25rem 0',
  borderRadius: 8,
  fontWeight: 'bold',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    background: '$green300',
  },
})

export const CheckoutDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  paddingBottom: 55,

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    span: {
      fontSize: '1rem',
      color: '$gray100',
    },

    p: {
      fontSize: '$md',
      color: '$gray300',
    },

    strong: {
      color: '$gray100',
    },

    h3: {
      color: '$gray100',
    },
  },
})
