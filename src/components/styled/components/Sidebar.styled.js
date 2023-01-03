import styled from "styled-components"

export const StyledSidebar = styled.aside`
  width: 100%;
  min-height: 100%;
  background-color: ${props => props.theme.colors.neutral.four};
  border-radius: 24px;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
    border-radius: 0;
  }
`

export const StyledLogoWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

export const StyledLogo = styled.img`
  width: 40px;
  height: 40px;
`