import React from "react";
import { ImageContainer } from "./style";

import viewIcon from "../../images/icon-view.svg";

export const NftImage = ({ imagePath }) => {
  return (
    <ImageContainer>
      <div className="item-view">
        <img src={viewIcon} alt="" />
      <div className="overview">
      </div>
      </div>
      <img src={imagePath} alt="" />
    </ImageContainer>
  );
};
