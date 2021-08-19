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
  height: 70%;
  width: 100%;
  z-index: 2;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
`;

const ImageContainer = styled.div`
  padding-top: 8px;
  display: inline-block;
  width: 100%;
  height: 80%;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const AltText = styled.h5`
  margin: 0;
  padding-top: 4px;
`;

const Image = ({ image: { altText, url } }) => {
  const theme = useContext(ThemeContext);
  return (
    <Container backgroundColor={theme.grey} textColor={theme.darkBlue}>
      <ImageContainer>
        <StyledImage src={url} alt={altText} />
      </ImageContainer>
      <AltText>{altText}</AltText>
    </Container>
  );
};

export default Image;
