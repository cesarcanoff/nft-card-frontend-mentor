import styled from "styled-components";

export const ImageContainer = styled.figure`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;

  .item-view {
    width: 320px;
    height: 300px;
    display: flex;
    position: absolute;
    z-index: 3;
    opacity: 0;
    border-radius: 7px;
    justify-content: center;
    align-items: center;

    img {
      width: 50px;
      z-index: 1;
      opacity: 1;
      height: 50px;
    }
  }

  .overview {
    width: 320px;
    height: 300px;
    top: 0;
    position: absolute;
    border-radius: 7px;
    opacity: 0;
    display: flex;
    z-index: 2;
    transition: 500ms;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    background-color: aqua;
  }

  img {
    position: relative;
    width: 100%;
    height: 300px;
    cursor: pointer;
    border-radius: 7px;
  }

  .item-view:hover {
    opacity: 1;
    .overview {
      opacity: 0.7;
    }

    img {
      width: 50px;
      z-index: 3;
    }
  }
`;
