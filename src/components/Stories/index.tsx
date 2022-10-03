import React from "react";
import Story from "./Story";

import { Container } from "./styles";

import Avatar from "../../assets/avatar.png";

const Stories: React.FC = () => {
  return (
    <Container>
      <Story src={Avatar} username="g.stetes" />
      <Story src={Avatar} username="g.stetes" />
      <Story src={Avatar} username="g.stetes" />
      <Story src={Avatar} username="g.stetes" />
      <Story src={Avatar} username="g.stetes" />
      <Story src={Avatar} username="g.stetes" />
      <Story src={Avatar} username="g.stetes" />
      <Story src={Avatar} username="g.stetes" />
    </Container>
  );
};

export default Stories;
