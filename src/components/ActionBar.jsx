import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Modal from './Modal'
import { ReactComponent as DashboardIcon } from './../assets/icons/dashboard.svg'
import { ReactComponent as BarsIcon } from './../assets/icons/bars.svg'
import { ReactComponent as PlusIcon } from './../assets/icons/plus.svg'

const StyledActionBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 8px 32px 8px 8px;
`

const StyledActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const ActionBar = () => {
  const [open, setOpen] = useState(false);

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
      <Button onClick={() => setOpen(true)}>
        <PlusIcon />
      </Button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        Hi
      </Modal>
    </StyledActionBar>
  )
}
