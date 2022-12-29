import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledMenuItem = styled.a`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 16px;
  cursor: pointer;
  
  border-right: ${ props=> props.active ?
    `solid 4px ${props.theme.colors.primary.four}`
    :
    'none'
  };
  
  background: ${ props=> props.active ? 
    'linear-gradient(90deg, rgba(186, 37, 37, 0) 0%, rgba(210, 77, 77, 0.1) 100%)'
    : 'none'
  };

  span{
    text-transform: uppercase;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 0.75px;
  }

  &:hover{
    color: ${props => props.theme.colors.primary.four};

    svg {
      fill: ${props => props.theme.colors.primary.four};
    }
  }
`

const StyledMenuIcon = styled.div`
  svg{
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.neutral.one};
  }
`

const MenuItem = ({ title, icon, active }) => {
  return (
    <StyledMenuItem active={active}>
      <StyledMenuIcon>
        { icon }
      </StyledMenuIcon>
      <span>{ title }</span>
    </StyledMenuItem>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
}

export default MenuItem
