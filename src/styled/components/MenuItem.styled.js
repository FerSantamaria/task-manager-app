import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledMenuItem = styled(NavLink)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 16px;
  text-decoration: none;
  transition: 0.3s;

  &.active{
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      border-right: solid 4px ${props => props.theme.colors.primary.four};
      background: linear-gradient(90deg, rgba(186, 37, 37, 0) 0%, rgba(210, 77, 77, 0.1) 100%);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 4px;
    padding: 8px;
  }
`

export const StyledMenuIcon = styled.div`
  svg{
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.neutral.two};
    transition: 0.3s;
    
    ${StyledMenuItem}:hover &,
    ${StyledMenuItem}.active & {
      fill: ${props => props.theme.colors.primary.four};
    }
  }
`

export const StyledMenuText = styled.span`
  text-transform: uppercase;
  font-size: 15px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0.75px;
  color: ${props => props.theme.colors.neutral.two};
  transition: 0.3s;

  ${StyledMenuItem}:hover &,
  ${StyledMenuItem}.active & {
    color: ${props => props.theme.colors.primary.four};
  }
`