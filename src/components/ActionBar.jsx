import { useState } from 'react'
import { StyledActionBar } from './styled/ActionBar.styled'
import { Button } from './Button'
import Modal from './Modal'
import { ReactComponent as DashboardIcon } from './../assets/icons/dashboard.svg'
import { ReactComponent as BarsIcon } from './../assets/icons/bars.svg'
import { ReactComponent as PlusIcon } from './../assets/icons/plus.svg'

export const ActionBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledActionBar>
      <div>
        <Button unselected onClick={() => alert("HI")} >
          <BarsIcon />
        </Button>
        <Button selected onClick={() => alert("HI")} >
          <DashboardIcon />
        </Button>
      </div>
      <Button onClick={() => setOpen(true)}>
        <PlusIcon />
      </Button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        Hi
      </Modal>
    </StyledActionBar>
  )
}
