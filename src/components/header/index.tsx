import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'

import React from 'react'
import Image from 'next/image'
import { Cart } from '../cart'

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />

      <Cart />
    </HeaderContainer>
  )
}
