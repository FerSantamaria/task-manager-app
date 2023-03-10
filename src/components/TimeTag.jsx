import PropTypes from 'prop-types'
import Tag from './Tag'
import { isLate, isAlmostLate, timeToText } from "./../utils/Dates"
import { ReactComponent as ClockIcon } from './../assets/icons/clock.svg'

const TimeTag = ({date}) => {
  let variant = undefined

  if (isLate(date)) {
    variant = "danger"
  } else if (isAlmostLate(date)) {
    variant = "warning"
  }

  return (
    <Tag variant={variant}>
      <ClockIcon />
      <span>{ timeToText(date, true) }</span>
    </Tag>
  )
}

TimeTag.propTypes = {
  date: PropTypes.string.isRequired
}

export default TimeTag