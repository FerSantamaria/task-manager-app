import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Task } from './Task'

const StyledTaskColumn = styled.section`
  min-width: 350px;
  max-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 800px;
  gap: 16px;
`

export const StyledTitle = styled.p`
  font-size: 18px;
  line-height: 32px;
  font-weight: 500;
  width: 100%;
  letter-spacing: 0.75px;
`

const TaskColumn = ({ label }) => {
  return (
    <StyledTaskColumn>
      <StyledTitle>{label}</StyledTitle>
      <Task />
      <Task />
    </StyledTaskColumn>
  )
}

TaskColumn.propTypes = {
  label: PropTypes.string.isRequired
}

export default TaskColumn