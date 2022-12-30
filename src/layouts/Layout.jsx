import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

const StyledContainer = styled.main`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background-color: ${props => props.theme.colors.neutral.five};
  color: ${props => props.theme.colors.neutral.one};
  font-family: ${props => props.theme.fonts.join(',')};
`
const SidebarWrapper = styled.div`
  width: 18rem;
  height: 100vh;
  position: fixed;
  padding: 32px 0 32px 32px;

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    display: none;
  }
`
const Wrapper = styled.div`
  margin-left: 18rem;
  height: 100vh;
  max-height: 100vh;
  width: calc(100% - 18rem);
  position: fixed;
  padding-top: 32px;
  border: solid 2px green;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    width: 100%;
    margin-left: 0;
  }
`
export const Layout = () => {
  return (
    <StyledContainer>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <Wrapper>
        <Navbar />
        <Outlet />
      </Wrapper>
    </StyledContainer>
  )
}
