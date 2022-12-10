import React from "react";
import { DescriptionContainer, TextDescription } from "./styles";

export const NftDescription = ({ content }) => {
  return (
    <DescriptionContainer>
      <TextDescription>{content}</TextDescription>
    </DescriptionContainer>
  );
};
