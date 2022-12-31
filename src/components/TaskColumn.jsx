import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Task } from './Task'

const StyledTaskColumn = styled.section`
  min-width: 350px;
  max-width: 350px;
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: scroll;
  padding-bottom: 32px;

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    padding-bottom: 128px;
  }
`
export const StyledListTitle = styled.p`
  font-size: 18px;
  line-height: 32px;
  font-weight: 500;
  width: 100%;
  letter-spacing: 0.75px;
  background-color: ${props => props.theme.colors.neutral.five};
  position: sticky;
  top: 0;
  z-index: 1;
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