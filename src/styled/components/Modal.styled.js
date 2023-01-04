import styled from "styled-components"

export const StyledModal = styled.aside`
  display: flex;
  position: fixed; 
  z-index: 99; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto; 
  background-color: rgba(0,0,0,0.6);
  align-items: center;
  justify-content: center;
  
  & > div {
    background-color: ${({ theme }) => theme.colors.neutral.three};
    border-radius: 8px;
    padding: 16px;
    width: fit-content;
    max-width: 75%;
    color: ${({ theme }) => theme.colors.neutral.one};
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`