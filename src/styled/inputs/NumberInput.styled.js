import styled from "styled-components";

export const StyledNumberInput = styled.input.attrs({
  type: "number"
})`
  background-color: ${({ theme }) => `${theme.colors.neutral.two}19`};
  border: none;
  outline: none;
  font-weight: 600;
  line-height: 24px;
  font-size: 15px;
  letter-spacing: 0.75px;
  color: ${({ theme }) => theme.colors.neutral.one};
  padding: 7px;
  width: 150px;
  border-radius: 4px;
  text-align: center;
  -moz-appearance: textfield;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.one};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`