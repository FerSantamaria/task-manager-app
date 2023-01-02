import styled from "styled-components"

export const StyledDropDown = styled.div`
  position: relative;

  button{
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.neutral.one};
  }

  ul {
    position: absolute;
    list-style-type: none;
    padding: 8px;
    right: 0;
    border: 1px solid grey;
    border-radius: 8px;
    width: 150px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.neutral.three};

    button{
      width: 100%;
      justify-content: flex-start;
    }
  }
`