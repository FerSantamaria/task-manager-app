import styled from "styled-components"

export const StyledModal = styled.aside`
  display: ${({ open }) => open ? 'flex' : 'none'}; 
  position: fixed; 
  z-index: 2; 
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
    width: 90%;
    max-width: 1000px;
    color: ${({ theme }) => theme.colors.neutral.one};
    height: fit-content;
    display: flex;
    gap: 16px;
    align-items: center;
  }
`