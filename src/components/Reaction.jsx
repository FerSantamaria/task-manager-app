import PropTypes from 'prop-types'
import {StyledReaction, StyledReactionCount} from './../styled/components/Reaction.styled'

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