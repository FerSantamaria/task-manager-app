import { StyledAvatar } from './styled/Avatar.styled'
import UserAvatar from './../assets/avatar.jpg'
import PropTypes from 'prop-types'

const Avatar = ({ size }) => {
  return (
    <StyledAvatar size={size} src={UserAvatar} alt="User's avatar"/>
  )
}

Avatar.propTypes = {
  size: PropTypes.oneOf([32, 40, 48])
}

export default Avatar;