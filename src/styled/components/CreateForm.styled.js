import styled from "styled-components";

export const StyledCreateForm = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
  
  & > input[type=text]{
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.neutral.one};
    width: 100%;
    padding: 6px 0;
    font-size: 20px;
    letter-spacing: 0.75px;
    font-weight: 600;
    line-height: 32px;
  }

  & > div {
    display: flex;
    gap: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`