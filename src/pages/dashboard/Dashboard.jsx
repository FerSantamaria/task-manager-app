import styled from 'styled-components'
import { ActionBar } from '../../components/ActionBar'
import TaskColumn from '../../components/TaskColumn'
import { StyledContentWrapper } from "./../../components/styled/pages/ContentWrapper.styled";
import { StyledColumnsContainer } from "./../../components/styled/pages/Dashboard.styled";

export const Dashboard = () => {  
  return (
    <StyledContentWrapper>
      <ActionBar />
      <StyledColumnsContainer>
        <TaskColumn label='Working (1)' />
        <TaskColumn label='In progress (2)' />
        <TaskColumn label='Cancelled (4)' />
        <TaskColumn label='Pending (3)' />
      </StyledColumnsContainer>
    </StyledContentWrapper>
  )
}
