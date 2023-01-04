import styled from "styled-components"
import { StyledCard } from "./Card.styled"

export const StyledTask = styled(StyledCard)`
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
