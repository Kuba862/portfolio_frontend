import React from 'react'
import { Header_style, Logo, Navigation } from '../assets/styles/Header.styled'

const Header = () => {
  return (
    <Header_style>
        <Logo />
        <Navigation>
            <li>portfolio</li>
            <li>blog</li>
            <li>about me</li>
        </Navigation>
    </Header_style>
  )
}

export default Header