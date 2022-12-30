import styled, { css } from 'styled-components'

const UnselectedStyle = css`
  background-color: transparent;
  border: solid 1px transparent;
  transition: 0.2s;

  svg{
    fill: ${props => props.theme.colors.neutral.one};
  }
`

const SelectedStyle = css`
  background-color: transparent;
  color: ${props => props.theme.colors.primary.four};
  border: solid 1px ${props => props.theme.colors.primary.four};

  svg{
    fill: ${props => props.theme.colors.primary.four};
  }
`

const StyledButton = styled.button`
  border: none;
  outline: none;
  background-color: ${props => props.theme.colors.primary.four};
  color: ${props => props.theme.colors.neutral.one};
  padding: 8px;
  font-size: 15px;
  line-height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;

  &:hover{
    filter: brightness(80%);
  }

  svg{
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.neutral.one};
  }

  ${props => props.unselected && UnselectedStyle }
  ${props => props.selected && SelectedStyle }
`

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props} >
      { children }
    </ StyledButton>
  )
}
 