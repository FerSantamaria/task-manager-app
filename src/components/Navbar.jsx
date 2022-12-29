import styled from "styled-components"
import { ReactComponent as MagnifierIcon } from './../assets/icons/magnifier.svg';
import { ReactComponent as BellIcon } from './../assets/icons/bell.svg';
import { ReactComponent as CancelIcon } from './../assets/icons/cancel.svg';
import { Avatar } from "./avatar";

const StyledNavbar = styled.nav`
  grid-column: span 4;
  background-color: ${props => props.theme.colors.neutral.four};
  height: 100%;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.neutral.two};
  gap: 24px;
  line-height: 24px;

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
  gap: 24px;
`

const StyledActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledSearch>
        <MagnifierIcon />
        Search
      </StyledSearch>
      <StyledActions>
        <BellIcon />
        <Avatar />
      </StyledActions>
    </StyledNavbar>
  )
}
