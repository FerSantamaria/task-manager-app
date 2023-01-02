import PropTypes from 'prop-types'
import { Task } from './Task'
import { StyledTaskColumn, StyledListTitle } from './styled/components/TaskColumn.styled'


const TaskColumn = ({ label }) => {
  return (
    <StyledTaskColumn>
      <StyledListTitle>{label}</StyledListTitle>
        <Task />
        <Task />
        <Task />
    </StyledTaskColumn>
  )
}

TaskColumn.propTypes = {
  label: PropTypes.string.isRequired
}

export default TaskColumn