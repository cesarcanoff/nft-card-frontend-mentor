import React from "react";
import { ImageContainer } from "./style";

export const NftImage = ({ imagePath }) => {
  return (
    <ImageContainer>
      <img src={imagePath} alt="" />
    </ImageContainer>
  );
};
