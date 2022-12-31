import styled from "styled-components"

export const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.neutral.four};
  border-radius: 16px;
  padding: 0 16px;
  margin-left: 32px;
  margin-right: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    gap: 12px;
  }

  svg {
    fill: ${props => props.theme.colors.neutral.two};
    width: 24px;
    height: 24px;
  }
`

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    gap: 12px;
  }
`

export const StyledActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    gap: 12px;
  }
`