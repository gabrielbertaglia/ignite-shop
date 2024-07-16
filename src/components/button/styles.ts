import { styled } from '@/styles'

export const ButtonContainer = styled('button', {
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
