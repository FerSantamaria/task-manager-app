import { StyledAvatar } from './styled/components/Avatar.styled'
import UserAvatar from './../assets/avatar.jpg'
import PropTypes from 'prop-types'

const Avatar = ({ size, url }) => {
  return (
    <StyledAvatar size={size} src={url || UserAvatar} alt="User's avatar"/>
  )
}

Avatar.propTypes = {
  size: PropTypes.oneOf([32, 40, 48]),
  url: PropTypes.string
}

export default Avatar;