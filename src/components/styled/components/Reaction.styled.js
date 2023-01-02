import styled from "styled-components"
import { StyledFlexContainer } from './../FlexContainer.styled'

export const StyledReaction = styled(StyledFlexContainer)`
  color: ${({ theme }) => theme.colors.neutral.one};

  svg {
    fill: ${({ theme }) => theme.colors.neutral.one};
    height: 15px;
  }
`

export const StyledReactionCount = styled.span`
  font-weight: 400;
  line-height: 24px;
  font-size: 15px;
  letter-spacing: 0.75px;
  user-select: none;
`
