import styled from "styled-components"
import { ReactComponent as MagnifierIcon } from './../assets/icons/magnifier.svg';
import { ReactComponent as BellIcon } from './../assets/icons/bell.svg';
import { Avatar } from "./avatar";
import { ClearableTextInput } from "./ClearableTextInput";

const StyledNavbar = styled.nav`
  grid-column: 2/-1;
  background-color: ${props => props.theme.colors.neutral.four};
  height: 100%;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

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
  flex-grow: 1;
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
        <ClearableTextInput />
      </StyledSearch>
      <StyledActions>
        <BellIcon />
        <Avatar />
      </StyledActions>
    </StyledNavbar>
  )
}
