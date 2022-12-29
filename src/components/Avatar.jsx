import styled from 'styled-components'
import UserAvatar from './../assets/avatar.jpg'

const StyledAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`
export const Avatar = () => {
  return (
    <StyledAvatar src={UserAvatar} alt="User's avatar"/>
  )
}
