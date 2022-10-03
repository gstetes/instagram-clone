import React from "react";
import Post from "./Post";
import { Container } from "./styles";

import AvatarImage from "../../assets/avatar.png";
import PostImage from "../../assets/imagem.jpg";

const Posts: React.FC = () => {
  return (
    <Container>
      <Post
        avatar={AvatarImage}
        username="g.stetes"
        description="Você já pensou em trabalhar como desenvolvedor na área da saúde?"
        image={PostImage}
        likes={532}
      />
    </Container>
  );
};

export default Posts;
