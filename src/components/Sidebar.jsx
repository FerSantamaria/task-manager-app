import React from 'react'
import styled from 'styled-components'
import { MenuList } from './MenuList'
import RavnLogo from './../assets/ravn.svg'

const StyledSidebar = styled.aside`
  width: 100%;
  min-height: 100%;
  background-color: ${props => props.theme.colors.neutral.four};
  border-radius: 24px;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

const StyledLogoWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
`

const StyledLogo = styled.img`
  width: 40px;
  height: 40px;
`
export const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledLogoWrapper>
        <StyledLogo src={RavnLogo} />
      </StyledLogoWrapper>
      <MenuList />
    </StyledSidebar>
  )
}
