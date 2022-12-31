import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PeopleSelect from './PeopleSelect'
import TagSelect from './TagSelect'
import EstimateSelect from './EstimateSelect'

const StyledModal = styled.div`
  display: ${({open}) => open ? 'flex' : 'none'}; 
  position: fixed; 
  z-index: 2; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto; 
  background-color: rgba(0,0,0,0.6);
  align-items: center;
  justify-content: center;
  
  & > div {
    background-color: ${({theme}) =>theme.colors.neutral.three};
    border-radius: 8px;
    padding: 16px;
    width: 90%;
    max-width: 700px;
    color: ${({theme}) =>theme.colors.neutral.one};
    height: fit-content;
    display: flex;
    gap: 16px;
    align-items: center;
  }
`

const Modal = ({isOpen, onClose, children}) => {
  
  return (
    <StyledModal open={isOpen} onClick={onClose}>
      <div onClick={(e)=> e.stopPropagation()}>
        {/* { children } */}
        <EstimateSelect />
        <PeopleSelect/>
        <TagSelect />
        <button onClick={onClose}>Cerrar</button>
      </div>
    </StyledModal>
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired
}

export default Modal