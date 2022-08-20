import styled from "styled-components";

export const StyledItemCard = styled.div`
  position: relative;
  border-radius: 10px;
  height: 300px;
  width: 100%;
  overflow: hidden;

  .image-wrapper {
    position: relative;
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }

  .overlay {
    position: absolute;
    padding: 10px 10px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10;
    opacity: 0;
    transition: opacity 450ms ease-in-out;
  }

  .overlay:hover {
    opacity: 100;
  }

  .item-title {
    font-size: 32px;
    font-family: "Poppins";
    font-weight: 900;
    text-align: center;
  }

  .item-rating {
    position: absolute;
    display: flex;
    align-items: center;
    /* background-color: yellow; */
  }

  .item-price {
    align-items: center;
  }

  .dollar-sign {
    font-size: 14px;
  }

  .dollar {
    font-size: 24px;
    font-weight: 400;
    font-family: "Poppins";
  }
  .cent {
    font-size: 16px;
  }

  .rating-star {
    height: 20px;
    width: 20px;
    background-clip: text;
    /* color: transparent; */
  }

  .price-per {
    color: rgba(255, 255, 255, 0.7);
  }
`;
