import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as TrashIcon } from './../../assets/icons/trash-can.svg';
import { Button } from './Button';
import { ModalContext } from '../../contexts/ModalContext';
import { useMutation } from '@apollo/client'
import { DELETE_TASK_MUTATION } from '../../graphQL/mutations'
import { GET_TASKS_BY_STATUS } from '../../graphQL/queries'; 

const DeleteButton = ({ task }) => {
  const modalContext = useContext(ModalContext)
  const [deleteTaskMutation] = useMutation(DELETE_TASK_MUTATION,{
    update: (cache, { data }) => {
      const oldStatus = task.status

      // Removing from all list
      const { tasks: oldTasks } = cache.readQuery({
        query: GET_TASKS_BY_STATUS,
        variables: { status: oldStatus }
      })
      
      cache.writeQuery({
        query: GET_TASKS_BY_STATUS,
        variables: { status: oldStatus },
        data: {
          tasks: oldTasks.filter(task => task.id !== data.deleteTask.id)
        }
      })
    }
  });
  
  const handleClick = async () => {
    const result = await modalContext.showConfirmation();
    if (result) {
      deleteTaskMutation({ variables: {
        id: task.id
      }})
    }
  };

  return (
    <Button unselected 
      onClick={handleClick}
    >
      <TrashIcon /> Delete
    </Button>
  )
}

DeleteButton.propTypes = {
  task: PropTypes.object.isRequired
}

export default DeleteButton