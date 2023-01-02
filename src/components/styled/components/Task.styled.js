import styled from "styled-components"

export const StyledTask = styled.article`
  background-color: ${props => props.theme.colors.neutral.four};
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > div > svg{
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.neutral.one};
    cursor: pointer;

    &:hover{
      filter: brightness(80%);
    }
  }
`

export const StyledTitleWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`
