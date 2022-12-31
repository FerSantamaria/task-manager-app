import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const OutlineStyle = css`
  background-color: transparent;
  outline: solid 1px ${({theme, variant}) => theme.colors[variant] || theme.colors.neutral.one};
`

const StyledTag = styled.span`
  padding: 4px 16px;
  width: fit-content;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  user-select: none;

  color: ${({theme, variant}) =>  theme.colors[variant] || theme.colors.neutral.one};
  background-color: ${({theme, variant}) => `${theme.colors[variant] || theme.colors.neutral.one}19`};

  svg {
    fill: ${({theme, variant}) =>  theme.colors[variant] || theme.colors.neutral.one};
  }

  ${({outline}) => outline && OutlineStyle }
`

const Tag = ({ variant, outline, children}) => {
  return (
    <StyledTag variant={variant} outline={outline}>
      { children }
    </StyledTag>
  )
}

Tag.propTypes = {
  variant: PropTypes.oneOf(["success", "info", "warning", "danger"]),
  outline: PropTypes.bool,
}

export default Tag