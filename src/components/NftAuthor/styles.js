import styled from "styled-components";

export const AuthorContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 2% 0;
  align-items: center;
`;

export const AuthorImage = styled.img`
  width: 40px;
  border: 1px solid #fff;
  border-radius: 100%;
  margin-right: 10px;
`;

export const AuthorName = styled.p`
  color: #8bacda;

  a {
    color: #fff;
  }
  
  a:hover {
    color: #00fff7;
  }
`;
