import PropTypes from 'prop-types'
import { StyledTag } from './styled/Tag.styled'

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