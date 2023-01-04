import styled from "styled-components"
import DatePicker from "react-datepicker"

export const StyledDatePicker = styled(DatePicker)`
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

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.one};
  }
`