import styled from "styled-components"
import { ReactComponent as MagnifierIcon } from './../assets/icons/magnifier.svg';
import { ReactComponent as BellIcon } from './../assets/icons/bell.svg';
import Avatar from "./Avatar";
import { ClearableTextInput } from "./ClearableTextInput";

const StyledNavbar = styled.nav`
  background-color: ${props => props.theme.colors.neutral.four};
  border-radius: 16px;
  padding: 0 16px;
  margin-left: 32px;
  margin-right: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  
  @media (max-width: ${({theme}) => theme.breakpoints.xs}) {
    gap: 12px;
  }

  svg {
    fill: ${props => props.theme.colors.neutral.two};
    width: 24px;
    height: 24px;
  }
`

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  gap: 24px;

  @media (max-width: ${({theme}) => theme.breakpoints.xs}) {
    gap: 12px;
  }
`

const StyledActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;

  @media (max-width: ${({theme}) => theme.breakpoints.xs}) {
    gap: 12px;
  }
`

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledSearch>
        <MagnifierIcon />
        <ClearableTextInput />
      </StyledSearch>
      <StyledActions>
        <BellIcon />
        <Avatar size={40} />
      </StyledActions>
    </StyledNavbar>
  )
}
