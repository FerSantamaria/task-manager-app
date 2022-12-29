import styled from "styled-components"
import MenuItem from "./MenuItem"
import { ReactComponent as DashboardIcon } from './../assets/icons/dashboard.svg';
import { ReactComponent as MyTaskIcon } from './../assets/icons/bars.svg';
import { ReactComponent as SettingsIcon } from './../assets/icons/cog.svg';

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
        icon={<DashboardIcon />}
        path="/"
      />
      <MenuItem 
        title="My Task"
        icon={<MyTaskIcon />}
        path="task"
      />
      <MenuItem 
        title="Settings"
        icon={<SettingsIcon />}
        path="settings"
      />
    </StyledMenuList>
  )
}
