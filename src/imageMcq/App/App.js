import { useState } from "react";
import styled from "styled-components";
import FavoriteImages from "../TopImagesComponent";
import VotingPanel from "../VotingComponent";
import ThemeContext from "../ThemeContext";
import testImages from "../../../src/images";
import Button from "../Button";
import ImageModal from "../ImageModal";

const theme = {
  grey: "#f7f9fb",
  grey2: "#ECEFF1",
  lightBlue: "#8fc1e3",
  midBlue: "#5085a5",
  darkBlue: "#317083",
  accentGreen: "#687864"
};

const Page = styled.div`
  text-align: center;
`;

const App = () => {
  const images = [...testImages];
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 6));
  const [currentImage, setCurrentImage] = useState();
  const [modalOpened, setModalOpened] = useState(false);

  const hasMore = visibleImages.length < images.length;

  const showMore = (event) => {
    event.preventDefault();
    if (visibleImages.length < images.length) {
      let updatedImages = [...visibleImages];
      const length = visibleImages.length;
      let endIndex = length + 6;
      endIndex = endIndex > images.length ? images.length : endIndex;
      updatedImages = updatedImages.concat(images.slice(length, endIndex));
      setVisibleImages(updatedImages);
    }
  };

  const showModal = (image) => {
    setModalOpened(true);
    setCurrentImage(image);
  };

  const closeModal = () => {
    setModalOpened(false);
    setCurrentImage(undefined);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Page color={theme.grey2}>
        <FavoriteImages images={visibleImages} />
        <VotingPanel
          images={visibleImages}
          setImages={setVisibleImages}
          openModal={showModal}
        />
        {hasMore && <Button onClick={showMore}>Show More</Button>}
        {currentImage && (
          <ImageModal image={currentImage} {...{ modalOpened, closeModal }} />
        )}
      </Page>
    </ThemeContext.Provider>
  );
};

export default App;
