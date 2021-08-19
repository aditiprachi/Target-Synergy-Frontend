import React from "react";
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";
import { Close } from "@styled-icons/ionicons-solid";

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  min-width: 25%;
  max-width: 75%;
  max-height: 90%;
  border-radius: 12px;

  &:focus {
    outline: none;
  }
`;

const ContentBody = styled.div`
  padding: 0 2rem 2rem;
  margin-top: -1rem;
`;

const CloseRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const CloseButton = styled.div`
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const CustomModal = ({ open, onClose, width, children }) => {
  return (
    <StyledModal {...{ open, onClose }} width={width}>
      <ModalBody>
        <CloseRow>
          <CloseButton onClick={onClose}>
            <Close size="2rem" />
          </CloseButton>
        </CloseRow>
        <ContentBody>{children}</ContentBody>
      </ModalBody>
    </StyledModal>
  );
};

export default CustomModal;
