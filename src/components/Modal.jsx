import { Children, cloneElement, isValidElement } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { StyledModal } from './styled/components/Modal.styled'

const Modal = ({isOpen, onCancel, onConfirm, confirmText, cancelText, children}) => {
  
  const handlePropagation = (e) => {
    e.stopPropagation()
  }

  const childrenWithProps = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child, { key: index, isOpen, onCancel, onConfirm, confirmText, cancelText });
    }
  })

  return ReactDOM.createPortal(
    <StyledModal open={isOpen} onClick={onCancel}>
      <div onClick={handlePropagation}>
        { childrenWithProps }
      </div>
    </StyledModal>,
    document.getElementById("modal-root")
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
}

Modal.defaultProps = {
  confirmText: "Confirm",
  cancelText: "Cancel"
}

export default Modal