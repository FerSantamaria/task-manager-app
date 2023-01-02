import PropTypes from 'prop-types'
import { StyledModal } from './styled/components/Modal.styled'

const Modal = ({isOpen, onClose, children}) => {
  
  const handlePropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <StyledModal open={isOpen} onClick={onClose}>
      <div onClick={handlePropagation}>
        { children }
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