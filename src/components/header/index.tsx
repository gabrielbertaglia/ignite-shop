import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'

import React from 'react'
import Image from 'next/image'
import { Cart } from '../cart'
import { useRouter } from 'next/router'

export function Header() {
  const { pathname } = useRouter()

  const showCartButton = pathname !== '/success'

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />

      {showCartButton && <Cart />}
    </HeaderContainer>
  )
}
