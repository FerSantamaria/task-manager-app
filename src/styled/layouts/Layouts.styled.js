import styled from "styled-components";

export const StyledContainer = styled.main`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background-color: ${props => props.theme.colors.neutral.five};
  color: ${props => props.theme.colors.neutral.one};
  font-family: ${props => props.theme.fonts.join(',')};
`
export const SidebarWrapper = styled.div`
  width: 18rem;
  height: 100vh;
  position: fixed;
  padding: 32px 0 32px 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    bottom: 0;
    height: auto;
    z-index: 3;
    padding: 0;
    background-color: red;
    width: 100%;
  }
`
export const Wrapper = styled.div`
  margin-left: 18rem;
  height: 100vh;
  max-height: 100vh;
  width: calc(100% - 18rem);
  position: fixed;
  padding-top: 32px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    margin-left: 0;
  }
`