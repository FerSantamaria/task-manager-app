import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { ReactComponent as DashboardIcon } from './../assets/icons/dashboard.svg';
import { ReactComponent as BarsIcon } from './../assets/icons/bars.svg';
import { ReactComponent as PlusIcon } from './../assets/icons/plus.svg';

const StyledActionBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`

const StyledActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const ActionBar = () => {
  return (
    <StyledActionBar>
      <StyledActionContainer>
        <Button unselected onClick={() => alert("HI")} >
          <BarsIcon />
        </Button>
        <Button selected onClick={() => alert("HI")} >
          <DashboardIcon />
        </Button>
      </StyledActionContainer>
      <Button onClick={() => alert("HI")} >
        <PlusIcon />
      </Button>
    </StyledActionBar>
  )
}
