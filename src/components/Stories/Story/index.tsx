import React from "react";
import { Container } from "./styles";

interface StoryProps {
  src: string;
  username: string;
}

const Story: React.FC<StoryProps> = ({ src, username }) => {
  return (
    <Container>
      <img src={src} height="100%" width="100%" />
      <span>{username}</span>
    </Container>
  );
};

export default Story;
