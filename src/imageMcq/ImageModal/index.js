import styled from "styled-components";
import Modal from "./Modal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 75vh;
`;

const StyledImage = styled.img`
  max-width: calc(100% - 16px);
  max-height: 100%;
`;

const H2 = styled.h2`
  margin: 0 0 1rem 0;
`;

const ImageModal = ({
  image: { altText, credit, url },
  modalOpened,
  closeModal
}) => {
  return (
    <Modal onClose={closeModal} open={modalOpened}>
      <Container>
        <H2>{altText}</H2>
        <ImageContainer>
          <StyledImage src={url} alt={altText} />
        </ImageContainer>

        <h5 dangerouslySetInnerHTML={{ __html: credit }} />
      </Container>
    </Modal>
  );
};

export default ImageModal;
