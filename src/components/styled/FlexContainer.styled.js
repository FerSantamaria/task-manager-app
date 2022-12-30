import styled from "styled-components";

export const StyledFlexContainer = styled.div`
  display: flex;
  direction: ${({ direction }) => direction || 'initial'};
  align-items: ${({ alignItems }) => alignItems || 'initial'};
  justify-content: ${({ justifyContent }) => justifyContent || 'initial'};
  align-content: ${({ alignContent }) => alignContent || 'initial'};
  gap: ${({ gap }) => gap || 'initial'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'initial'};
`