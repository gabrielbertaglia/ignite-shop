import { styled } from '@/styles'

export const CartButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 6,
  position: 'relative',

  width: '3rem',
  height: '3rem',

  span: {
    content: 'attr(data-count)',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.8rem',

    position: 'absolute',
    width: '1.5rem',
    height: '1.5rem',
    right: '-0.7rem',
    top: '-0.7rem',

    backgroundColor: '$green500',
    border: '3px solid $gray900',
    borderRadius: '50%',

    fontWeight: 700,
    fontSize: '$xs',
    textAlign: 'center',
    color: '$white',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    color: {
      gray: {
        background: '$gray800',
        color: '$gray500',
      },
      green: {
        background: '$green500',
        color: '$white',

        '&:not(:disabled):hover': {
          background: '$green300',
        },
      },
    },
    size: {
      medium: {
        width: '3rem',
        height: '3rem',

        svg: {
          fontSize: 24,
        },
      },
      large: {
        width: '3.5rem',
        height: '3.5rem',
        svg: {
          fontSize: 32,
        },
      },
    },
  },
  defaultVariants: {
    color: 'gray',
    size: 'medium',
  },
})
