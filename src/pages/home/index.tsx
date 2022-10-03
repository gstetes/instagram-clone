import React from "react";
import Header from "../../components/Header";
import Posts from "../../components/Posts";
import Stories from "../../components/Stories";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Stories />
      <Posts />
    </Container>
  );
};

export default Home;
