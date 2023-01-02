import { useState } from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { StyledDatePicker } from './styled/components/CustomDatePicker.styled'
import "react-datepicker/dist/react-datepicker.css"
import "./styled/components/DatePicker.scss"

const CustomDatePicker = ({ ...props }) => {
  const [startDate, setStartDate] = useState();
  const [ field, _, helpers] = useField(props);

  return (
     <StyledDatePicker
      selected={startDate}
      showPopperArrow={false}
      dateFormat="MMM. dd yyyy"
      todayButton="Today"
      placeholderText="Due Date"
      onKeyDown={(e) => {
        e.preventDefault();
      }}
      minDate={new Date()}

      {...field}
      {...props}

      onChange={(date) => {
        setStartDate(date)
        helpers.setValue(date)
      }}
    />
  )
}

CustomDatePicker.propTypes = {
  name: PropTypes.string.isRequired
}

export default CustomDatePicker