import styled from "styled-components"

export const StyledClearableTextInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;

  svg {
    fill: ${props => props.theme.colors.neutral.two};
    width: 24px;
    height: 24px;
    transition: 0.3s;

    &:hover{
      fill: ${props => props.theme.colors.primary.four};
      cursor: pointer;
    }
  }

  input{
    background-color: transparent;
    border: none;
    outline: none;
    color: ${props => props.theme.colors.neutral.two};
    font-size: 15px;
    line-height: 24px;
    min-height: 64px;
    width: 100%;

    &::placeholder {
      color: ${props => props.theme.colors.neutral.two};
    }

    &:focus::placeholder {
      color: transparent;
    }
  }
`