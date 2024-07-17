import React, { ComponentProps } from 'react'

import { ButtonContainer } from './styles'

type ButtonProps = ComponentProps<typeof ButtonContainer>

export function Button({ children, ...props }: ButtonProps) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>
}
