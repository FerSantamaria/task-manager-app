import styled from "styled-components";

export const StyledCard = styled.article`
  background-color: ${props => props.theme.colors.neutral.four};
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: center;
  height: fit-content;
`