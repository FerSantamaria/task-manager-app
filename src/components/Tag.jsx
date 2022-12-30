import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTag = styled.span`
  padding: 4px 16px;
  width: fit-content;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  border-radius: 4px;
  color: ${props => props.theme.colors.neutral.one};
  background-color: ${props => `${props.theme.colors.neutral.one}19`};
`

const Tag = ({children}) => {
  return (
    <StyledTag>
      { children }
    </StyledTag>
  )
}

Tag.propTypes = {}

export default Tag