import { StyledButton } from './styled/components/Button.styled'

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      { children }
    </ StyledButton>
  )
}
 