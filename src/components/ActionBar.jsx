import { useState } from 'react'
import { Button } from './inputs/Button'
import Modal from './Modal'
import CreateForm from './CreateForm'
import { StyledActionBar } from './../styled/components/ActionBar.styled'
import { ReactComponent as DashboardIcon } from './../assets/icons/dashboard.svg'
import { ReactComponent as BarsIcon } from './../assets/icons/bars.svg'
import { ReactComponent as PlusIcon } from './../assets/icons/plus.svg'

export const ActionBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledActionBar>
      <div>
        <Button unselected>
          <BarsIcon />
        </Button>
        <Button selected>
          <DashboardIcon />
        </Button>
      </div>
      <Button onClick={() => setOpen(true)}>
        <PlusIcon />
      </Button>
      
      { open &&
        <Modal isOpen={open} onCancel={() => setOpen(false)}>
          <CreateForm />
        </Modal>
      }
      
    </StyledActionBar>
  )
}
