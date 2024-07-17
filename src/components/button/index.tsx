import React, { ComponentProps } from 'react'

import { ButtonContainer } from './styles'

type ButtonProps = ComponentProps<'button'>

export function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <ButtonContainer type="button" onClick={onClick} {...props}>
      {children}
    </ButtonContainer>
  )
}
