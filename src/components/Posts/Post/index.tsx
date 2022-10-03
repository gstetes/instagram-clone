import React from "react";

import Avatar from "../../Avatar";
import {
  Comments,
  CommnetContainer,
  Container,
  DaysAgo,
  ImageFooter,
  LikeDescription,
  PostDescription,
  PostHeader,
} from "./styles";
import { BsThreeDots, BsFlag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { RiChat3Line, RiShareForwardLine } from "react-icons/ri";
import { GrEmoji } from "react-icons/gr";

interface PostProps {
  avatar: string;
  username: string;
  image: string;
  description: string;
  likes: number;
}

const Post: React.FC<PostProps> = ({
  avatar,
  username,
  image,
  description,
  likes,
}) => {
  return (
    <Container>
      <PostHeader>
        <div>
          <Avatar src={avatar} />
          <span>{username}</span>
        </div>
        <BsThreeDots />
      </PostHeader>
      <img src={image} />
      <ImageFooter>
        <div>
          <AiOutlineHeart size={25} />
          <RiChat3Line size={25} />
          <RiShareForwardLine size={25} />
        </div>
        <BsFlag size={25} />
      </ImageFooter>
      <LikeDescription>{likes} curtidas</LikeDescription>
      <PostDescription>
        <p>
          <strong>{username}</strong> {description}
        </p>
        <Comments>Ver todos os 6 comentários</Comments>
        <DaysAgo>HÁ 2 DIAS</DaysAgo>
      </PostDescription>
      <CommnetContainer>
        <div>
          <GrEmoji size={25} />
          <input type="text" placeholder="Adicione um comentário..." />
        </div>
        <span>Publicar</span>
      </CommnetContainer>
    </Container>
  );
};

export default Post;
