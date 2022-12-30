import React from 'react'
import styled from 'styled-components'
import { ActionBar } from '../../components/ActionBar'
import TaskColumn from '../../components/TaskColumn'

const StyledColumnsContainer = styled.div`
  display: flex;
  padding-top: 16px;
  gap: 32px;
  width: 100%;
  height: 100%;
  overflow: scroll;
  align-items: flex-start;
  justify-content: flex-start;
  flex-grow: 0;
`
export const Dashboard = () => {
  return (
    <>
      <ActionBar />
      <StyledColumnsContainer>
        <TaskColumn label='Working (1)' />
        <TaskColumn label='In progress (2)' />
        <TaskColumn label='Cancelled (4)' />
        <TaskColumn label='Pending (3)' />
      </StyledColumnsContainer>
    </>
  )
}
