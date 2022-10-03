import React, { ReactNode } from "react";
import { Container } from "./styled";

interface AvatarProps {
  src: string;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Container>
      <img src={src} height="100%" width="100%" />
    </Container>
  );
};

export default Avatar;
