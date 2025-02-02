import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImagesContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '3rem',

  'div + div': {
    marginLeft: 'calc(-115px / 2)',
  },
})

export const ImageContainer = styled('div', {
  maxWidth: 115,
  height: 115,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  boxShadow: '0px 0px 60px rgba(0,0,0,0.8)',
  position: 'relative',
  borderRadius: '50%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
