import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

const StyledContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.neutral.five};
  color: ${props => props.theme.colors.neutral.one};
  font-family: ${props => props.theme.fonts.join(',')};
`
const SidebarWrapper = styled.div`
  width: 18rem;
  height: 100%;
  position: fixed;
  padding: 32px 0 32px 32px;

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    display: none;
  }
`
const Wrapper = styled.div`
  margin-left: 18rem;
  height: 100%;
  width: calc(100% - 18rem);
  position: fixed;
  padding-top: 32px;

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    width: 100%;
    margin-left: 0;
  }
`

const ContentWrapper = styled.div`
  padding: 32px;
`

export const Layout = () => {
  return (
    <StyledContainer>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <Wrapper>
        <Navbar />

        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </Wrapper>
    </StyledContainer>
  )
}
