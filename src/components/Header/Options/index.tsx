import React from "react";
import { Container } from "./styles";

import { MdHomeFilled } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FiPlusSquare } from "react-icons/fi";
import { AiOutlineCompass, AiOutlineHeart } from "react-icons/ai";

import AvatarImage from "../../../assets/avatar.png";

import Avatar from "../../Avatar";

const Options: React.FC = () => {
  return (
    <Container>
      <MdHomeFilled size={25} />
      <RiMessengerLine size={25} />
      <FiPlusSquare size={25} />
      <AiOutlineCompass size={25} />
      <AiOutlineHeart size={25} />
      <Avatar src={AvatarImage} />
    </Container>
  );
};

export default Options;
