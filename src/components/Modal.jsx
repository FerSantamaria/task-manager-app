import { Children, cloneElement, isValidElement } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { StyledModal } from './../styled/components/Modal.styled'

const Modal = ({onCancel, confirmText, cancelText, children}) => {
  
  // Cloning children and passing all parent props to them
  const childrenWithProps = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child, { key: index, onCancel, confirmText, cancelText });
    }
  })

  // Return a portal for having our modal on a separate container than the rest of the app
  return ReactDOM.createPortal(
    <StyledModal>
      <div onClick={handlePropagation}>
        { childrenWithProps }
      </div>
    </StyledModal>,
    document.getElementById("modal-root")
  )
}

Modal.propTypes = {
  onCancel: PropTypes.func,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
}

Modal.defaultProps = {
  confirmText: "Confirm",
  cancelText: "Cancel"
}

export default Modal