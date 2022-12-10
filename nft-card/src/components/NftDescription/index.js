import React from "react";
import { ContainerDescription, TextDescription } from "./styles";

export const NftDescription = ({ content }) => {
  return (
    <ContainerDescription>
      <TextDescription>{content}</TextDescription>
    </ContainerDescription>
  );
};
