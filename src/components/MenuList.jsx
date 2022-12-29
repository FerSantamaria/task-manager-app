import styled from "styled-components"
import MenuItem from "./MenuItem"
import { ReactComponent as DasbhboardIcon } from './../assets/icons/dashboard.svg';
import { ReactComponent as MyTaskIcon } from './../assets/icons/bars.svg';

const StyledMenuList = styled.div`
  width: 100%;
  gap: 8px;
  display: flex;
  flex-direction: column;
`
export const MenuList = () => {
  return (
    <StyledMenuList>
      <MenuItem 
        title="Dashboard"
        icon={<DasbhboardIcon />}
      />
      <MenuItem 
        title="My Task"
        icon={<MyTaskIcon />}
      />
    </StyledMenuList>
  )
}
