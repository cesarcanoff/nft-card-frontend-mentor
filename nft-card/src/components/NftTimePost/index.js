import React from "react";
import { NftTimeContainer, NftTimeText } from "./styles";
import clockIcon from "../../images/icon-clock.svg";

export const NftTimePost = ({ postTime }) => {
  return (
    <NftTimeContainer>
      <img src={clockIcon} alt="" />
      <NftTimeText>{postTime}</NftTimeText>
    </NftTimeContainer>
  );
};
