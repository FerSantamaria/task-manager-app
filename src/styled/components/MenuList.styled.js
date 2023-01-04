import styled from "styled-components"

export const StyledMenuList = styled.div`
  width: 100%;
  gap: 8px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`