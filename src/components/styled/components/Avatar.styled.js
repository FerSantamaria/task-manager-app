import styled from "styled-components"

export const StyledAvatar = styled.img`
  width: ${props => `${props.size || 32}px`};
  height: ${props => `${props.size || 32}px`};
  border-radius: 50%;
`