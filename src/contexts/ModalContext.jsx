import { createContext, useRef, useState } from "react";
import Modal from "./../components/Modal";
import { Button } from "./../components/Button";
import { StyledFlexContainer } from "../components/styled/FlexContainer.styled";

const ModalContext = createContext();
const { Provider } = ModalContext;

const ModalProvider = ({ children }) => {
  const [confirmText, setConfirmText] = useState("confirm")
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const resolver = useRef();

  const handleShow = () => {
    setShowConfirmationModal(true);

    return new Promise(function (resolve) {
      resolver.current = resolve;
    });
  };

  const handleOk = () => {
    resolver.current && resolver.current(true);
    setShowConfirmationModal(false)
  };

  const handleCancel = () => {
    resolver.current && resolver.current(false);
    setShowConfirmationModal(false)
  };

  return(
    <Provider value={{
      showConfirmation: handleShow,
      setConfirmText
    }}>
      {children}

      { showConfirmationModal &&
        <Modal>
          <p>Are you sure you want to delete this task?</p>
          <StyledFlexContainer justifyContent="flex-end" gap="16px" style={{ width: "100%" }}>
            <Button onClick={handleCancel} unselected>Cancel</Button>
            <Button onClick={handleOk} >{confirmText}</Button>
          </StyledFlexContainer>
        </Modal>
      }

    </Provider>
  )
}

export { ModalContext, ModalProvider}