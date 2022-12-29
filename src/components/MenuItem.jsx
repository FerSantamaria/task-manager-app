import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledMenuItem = styled(NavLink)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 16px;
  text-decoration: none;
  
  &.active{
    border-right: solid 4px ${props => props.theme.colors.primary.four};
    background: linear-gradient(90deg, rgba(186, 37, 37, 0) 0%, rgba(210, 77, 77, 0.1) 100%);
  }
`

const StyledMenuIcon = styled.div`
  svg{
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.neutral.two};

    ${StyledMenuItem}:hover, .active & {
      fill: ${props => props.theme.colors.primary.four};
    }
  }
`

const StyledMenuText = styled.span`
  text-transform: uppercase;
  font-size: 15px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0.75px;
  color: ${props => props.theme.colors.neutral.two};

  ${StyledMenuItem}:hover, .active & {
    color: ${props => props.theme.colors.primary.four};
  }
`

const MenuItem = ({ title, icon, path }) => {
  return (
    <StyledMenuItem
      to={path}
      className={({ isActive }) =>
        isActive ? 'active' : undefined
      }
    >
      <StyledMenuIcon>
        { icon }
      </StyledMenuIcon>
      <StyledMenuText>
        { title }
      </StyledMenuText>
    </StyledMenuItem>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
}

export default MenuItem
