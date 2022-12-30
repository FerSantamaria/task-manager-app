import styled from 'styled-components'
import UserAvatar from './../assets/avatar.jpg'
import PropTypes from 'prop-types'
 
const StyledAvatar = styled.img`
  width: ${props =>  `${props.size}px`};
  height: ${props =>  `${props.size}px`};;
  border-radius: 50%;
`

StyledAvatar.defaultProps = {
  size: 32
}

const Avatar = ({ size }) => {
  return (
    <StyledAvatar size={size} src={UserAvatar} alt="User's avatar"/>
  )
}

Avatar.propTypes = {
  size: PropTypes.oneOf([32, 40, 48])
}

export default Avatar;