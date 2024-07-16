import { ComponentProps } from 'react'
import { ButtonContainer } from './styles'

type ButtonProps = ComponentProps<'button'>

export function Button({ children }: ButtonProps) {
  // { children, ...rest }
  return (
    <>
      <ButtonContainer>{children}</ButtonContainer>
    </>
  )
}
