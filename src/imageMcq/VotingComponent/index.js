import { useContext } from "react";
import styled from "styled-components";
import Image from "./Image";
import VotingButtons from "./VotingButtons";
import ThemeContext from "../ThemeContext";

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Entry = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  width: 25vw;
  height: 30vh;
  justify-content: center;
  color: ${({ color }) => color};
`;

const VotingPanel = ({ images, setImages, openModal }) => {
  const theme = useContext(ThemeContext);

  const updateCount = (image, increaseCount) => {
    let updatedImages = [...images];
    let imageIndex = updatedImages.findIndex((img) => img.id === image.id);
    if (increaseCount) {
      updatedImages[imageIndex].count += 1;
    } else {
      updatedImages[imageIndex].count =
        updatedImages[imageIndex].count > 1
          ? updatedImages[imageIndex].count - 1
          : 0;
    }
    setImages(updatedImages);
  };

  return (
    <Grid>
      {images.map((image, index) => {
        return (
          <Entry key={index} color={theme.darkBlue}>
            <VotingButtons {...{ image, updateCount }} />
            <Image {...{ image, openModal }} />
          </Entry>
        );
      })}
    </Grid>
  );
};

export default VotingPanel;
