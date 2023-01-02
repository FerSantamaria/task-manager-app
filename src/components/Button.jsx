import PropTypes from 'prop-types'
import { StyledButton } from './styled/components/Button.styled'

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      { children }
    </ StyledButton>
  )
}

Button.propTypes = {
  selected: PropTypes.bool,
  unselected: PropTypes.bool,
}

export  { Button }