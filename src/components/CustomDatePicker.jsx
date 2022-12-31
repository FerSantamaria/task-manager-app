import { useState } from 'react'
import PropTypes from 'prop-types'
import { StyledDatePicker } from './styled/CustomDatePicker.styled'
import "react-datepicker/dist/react-datepicker.css"
import "./styled/DatePicker.scss"

const CustomDatePicker = props => {
  const [startDate, setStartDate] = useState();

  return (
     <StyledDatePicker
      selected={startDate}
      showPopperArrow={false}
      onChange={(date) => setStartDate(date)}
      dateFormat="MMM. dd yyyy"
      todayButton="Today"
      placeholderText="Due Date"
      onKeyDown={(e) => {
       e.preventDefault();
    }}
    />
  )
}

CustomDatePicker.propTypes = {}

export default CustomDatePicker