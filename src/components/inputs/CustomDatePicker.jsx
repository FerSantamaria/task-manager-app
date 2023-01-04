import PropTypes from 'prop-types'
import { useField } from 'formik'
import { StyledDatePicker } from '../../styled/inputs/CustomDatePicker.styled'
import "react-datepicker/dist/react-datepicker.css"
import "./../../styled/inputs/DatePicker.scss"

const CustomDatePicker = ({ ...props }) => {
  const [ field, meta, helpers] = useField(props);
  const hasError = meta.touched && (meta.error !== undefined)
  
  return (
     <StyledDatePicker
      selected={field.value}
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
        helpers.setValue(date)
      }}

      className={hasError ? "input-error" : undefined}
    />
  )
}

CustomDatePicker.propTypes = {
  name: PropTypes.string.isRequired
}

export default CustomDatePicker