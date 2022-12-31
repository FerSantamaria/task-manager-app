import React from 'react'
import PropTypes from 'prop-types'
import { StyledMenuItem, StyledMenuIcon, StyledMenuText } from './styled/MenuItem.styled'

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
