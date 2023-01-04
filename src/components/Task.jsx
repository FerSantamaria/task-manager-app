import { useEffect, useState } from 'react'
import Tag from './Tag'
import Avatar from './Avatar'
import Reaction from './Reaction'
import Dropdown from './inputs/Dropdown'
import { Button } from './inputs/Button'
import TimeTag from './TimeTag'
import { StyledFlexContainer } from './../styled/FlexContainer.styled'
import { StyledTitle } from './../styled/components/TaskColumn.styled'
import { StyledTask, StyledTitleWrapper } from './../styled/components/Task.styled'
import { ReactComponent as ClipIcon } from './../assets/icons/paperclip.svg'
import { ReactComponent as TreeIcon } from './../assets/icons/file-tree.svg'
import { ReactComponent as CommentIcon } from './../assets/icons/text-bubble.svg'
import { ReactComponent as PencilIcon } from './../assets/icons/pencil.svg'
import Modal from './Modal'
import EditForm from './EditForm'
import DeleteButton from './inputs/DeleteButton'

export const Task = ({ task }) => {
  const [openModal, setOpenModal] = useState(false)
  
  return (
    <StyledTask>
      <StyledTitleWrapper>
        <StyledTitle>{task.name}</StyledTitle>
        <Dropdown>
          <Button unselected onClick={()=>setOpenModal(true)}><PencilIcon /> Edit</Button>
          <DeleteButton task={task} />
        </Dropdown>

        { openModal &&
          <Modal isOpen={openModal} onCancel={() => setOpenModal(false)}>
            <EditForm task={task} />
          </Modal>
        }
        
      </StyledTitleWrapper>
      <StyledFlexContainer alignItems="center" justifyContent="space-between">
        <span>{task.pointEstimate} POINTS</span>
        <TimeTag date={task.dueDate} />
      </StyledFlexContainer>
      <StyledFlexContainer gap="8px" flexWrap="wrap">
        
        {
          task.tags.map((tag, index) => 
            <Tag key={index} variant="success">{tag.replaceAll("_", " ")}</Tag>
          )
        }

      </StyledFlexContainer>
      <StyledFlexContainer alignItems="center" justifyContent="space-between">
        <Avatar url={task.assignee.avatar} />
        <StyledFlexContainer alignItems="center" gap="16px">
          <Reaction icon={<ClipIcon />} />
          <Reaction count={5} icon={<TreeIcon />} />
          <Reaction count={3} icon={<CommentIcon />} />
        </StyledFlexContainer>
      </StyledFlexContainer>
    </StyledTask>
  )
}
