import { useContext } from "react";
import styled from "styled-components";
import { Downvote, Upvote } from "@styled-icons/boxicons-solid";
import ThemeContext from "../../ThemeContext";

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 1rem;
`;

const IconStyling = (props) => {
  return `
    color: ${props.color};
    transition: color 0.5s ease;
    &: hover {
      color: ${props.hoverColor};
      cursor: pointer;
    }
  `;
};

const UpvoteIcon = styled(Upvote)`
  ${(props) => IconStyling(props)};
`;

const DownvoteIcon = styled(Downvote)`
  ${(props) => IconStyling(props)};
`;

const iconSize = 44;

const VotingButtons = ({ image, updateCount }) => {
  const theme = useContext(ThemeContext);
  const upVote = (event) => {
    event.preventDefault();
    updateCount(image, true);
  };

  const downVote = (event) => {
    event.preventDefault();
    updateCount(image, false);
  };

  return (
    <div>
      <ButtonsWrapper>
        <UpvoteIcon
          onClick={upVote}
          size={iconSize}
          color={theme.lightBlue}
          hoverColor={theme.midBlue}
        />
        <p>Vote</p>
        <DownvoteIcon
          onClick={downVote}
          size={iconSize}
          color={theme.lightBlue}
          hoverColor={theme.midBlue}
        />
      </ButtonsWrapper>
    </div>
  );
};

export default VotingButtons;
