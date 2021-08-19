import { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../ThemeContext";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 75%;
  height: 100%;
  color: ${({ textColor }) => textColor};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const ImageContainer = styled.div`
  padding: 8px;
  width: 100%;
  height: 80%;
`;

const StyledImage = styled.img`
  max-width: calc(100% - 16px);
  max-height: 100%;
`;

const AltText = styled.h4`
  margin: 0;
  padding-top: 4px;
`;
const Image = ({ image, image: { altText, url }, openModal }) => {
  const theme = useContext(ThemeContext);
  return (
    <Container
      onClick={() => openModal(image)}
      backgroundColor={theme.grey}
      textColor={theme.darkBlue}
    >
      <ImageContainer>
        <StyledImage src={url} alt={altText} />
      </ImageContainer>

      <AltText>{altText}</AltText>
    </Container>
  );
};

export default Image;
