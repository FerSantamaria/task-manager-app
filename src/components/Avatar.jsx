import styled from 'styled-components'
import UserAvatar from './../assets/avatar.jpg'
import PropTypes from 'prop-types'
 
const StyledAvatar = styled.img`
  width: ${props =>  `${props.size || 32}px`};
  height: ${props =>  `${props.size || 32}px`};
  border-radius: 50%;
`

const Avatar = ({ size }) => {
  return (
    <StyledAvatar size={size} src={UserAvatar} alt="User's avatar"/>
  )
}

Avatar.propTypes = {
  size: PropTypes.oneOf([32, 40, 48])
}

export default Avatar;