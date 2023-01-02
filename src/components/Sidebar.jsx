import { MenuList } from './MenuList'
import { StyledSidebar, StyledLogoWrapper, StyledLogo } from './styled/components/Sidebar.styled'
import RavnLogo from './../assets/ravn.svg'

StyledSidebar
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
