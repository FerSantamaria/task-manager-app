import { createContext, useRef, useState } from "react";
import Modal from "./../components/Modal";
import { Button } from "./../components/inputs/Button";
import { StyledFlexContainer } from "../styled/layouts/FlexContainer.styled";

// Creating a custom context to handle confirmation dialogs
const ModalContext = createContext();
const { Provider } = ModalContext;

const ModalProvider = ({ children }) => {
  const [confirmButtonText, setConfirmButtonText] = useState("confirm")
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const resolver = useRef();

  // On show a new promise is generated
  const handleShow = () => {
    setShowConfirmationModal(true);

    return new Promise(function (resolve) {
      resolver.current = resolve;
    });
  };

  // If the ok button is pressed, the promise resolves
  const handleOk = () => {
    resolver.current && resolver.current(true);
    setShowConfirmationModal(false)
  };

  // If the ok button is pressed, the promise rejects
  const handleCancel = () => {
    resolver.current && resolver.current(false);
    setShowConfirmationModal(false)
  };

  return(
    // Exposing methods
    <Provider value={{
      showConfirmation: handleShow,
      setConfirmButtonText
    }}>
      {children}

      { showConfirmationModal &&
        <Modal>
          <>
            <p>Are you sure you want to delete this task?</p>
            <StyledFlexContainer justifyContent="flex-end" gap="16px" style={{ width: "100%" }}>
              <Button onClick={handleCancel} unselected>Cancel</Button>
              <Button onClick={handleOk} >{confirmButtonText}</Button>
            </StyledFlexContainer>
          </>
        </Modal>
      }

    </Provider>
  )
}

export { ModalContext, ModalProvider}