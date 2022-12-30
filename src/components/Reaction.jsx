import React from 'react'
import PropTypes from 'prop-types'
import { StyledFlexContainer } from './styled/FlexContainer.styled'
import styled from 'styled-components'

const StyledReaction = styled(StyledFlexContainer)`
  color: ${({theme}) => theme.colors.neutral.one};

  svg {
    fill: ${({theme}) => theme.colors.neutral.one};
  }
`

const StyledReactionCount = styled.span`
  font-weight: 400;
  line-height: 24px;
  font-size: 15px;
  letter-spacing: 0.75px;
  user-select: none;
`

const Reaction = ({ count, icon}) => {
  return (
    <StyledReaction alignItems="center" gap="4px">
      <StyledReactionCount>
        {count}
      </StyledReactionCount>
      {icon}
    </StyledReaction>
  )
}

Reaction.propTypes = {
  icon: PropTypes.object.isRequired,
  count: PropTypes.number,
}

export default Reaction