import React from "react";
import { AuthorContainer, AuthorImage, AuthorName } from "./styles";

export const NftAuthor = ({ authorImagePath, authorName }) => {
  return (
    <AuthorContainer>
      <AuthorImage src={authorImagePath}></AuthorImage>
      <AuthorName>
        Creation of <a href="http://www.github.com/cesarcanoff">{authorName}</a>
      </AuthorName>
    </AuthorContainer>
  );
};
