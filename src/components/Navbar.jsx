import Avatar from "./Avatar";
import { ClearableTextInput } from "./inputs/ClearableTextInput";
import { StyledNavbar, StyledSearch, StyledActions } from "./../styled/components/Navbar.styled";
import { ReactComponent as MagnifierIcon } from './../assets/icons/magnifier.svg';
import { ReactComponent as BellIcon } from './../assets/icons/bell.svg';

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
