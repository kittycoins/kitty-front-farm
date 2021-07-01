import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import TranslatedText from '../TranslatedText'

const StyledNav = styled.div`
  margin-bottom: 40px;
`

interface NavProps {
  activeIndex?: number
}

const Nav: React.FC<NavProps> = ({ activeIndex = 0 }) => (
  <StyledNav style={{ width: '250px', marginLeft: 'auto', marginRight: 'auto' }}>
    <ButtonMenu activeIndex={activeIndex} size="sm" variant="subtle">
      <ButtonMenuItem id="swap-nav-link" href="https://exchange.excodus.com/#/swap" as="a">
        <TranslatedText translationId={8}>Swap</TranslatedText>
      </ButtonMenuItem>
      <ButtonMenuItem id="farm-nav-link" to="/farm" as={Link}>
        <TranslatedText translationId={8}>Farm</TranslatedText>
      </ButtonMenuItem>
      <ButtonMenuItem id="pool-nav-link" href="https://exchange.excodus.com/#/pool" as="a">
        <TranslatedText translationId={74}>Liquidity</TranslatedText>
      </ButtonMenuItem>
    </ButtonMenu>
  </StyledNav>
)

export default Nav
