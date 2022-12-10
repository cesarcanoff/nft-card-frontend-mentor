import React from "react";
import { ContainerName } from "./styles";

export const NftName = ({ nftName, nftPath, nftCode }) => {
  return (
    <ContainerName>
      <a href={nftPath}>
        {nftName} #{nftCode}
      </a>
    </ContainerName>
  );
};
