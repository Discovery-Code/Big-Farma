import styled from "styled-components";

const tgreen = `#0a0`;
const twhite = `#fff`;

export const Header = styled.header`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  width: 100vw;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.4);
  background-color: white;

  * {
    font-size: 16px;
    font-weight: 400;
    font-family: "Poppins";
    /* outline: 1px solid red; */
  }

  .logo {
    position: relative;
    height: 3.5rem;
    width: 3.5rem;
  }

  /* SEARCH FILTERING */

  form {
    display: flex;
    gap: 20px;
    width: 600px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    & .categories {
      height: 40px;
      padding: 5px;
      border-radius: 5px;
      border-style: none;
      background-color: transparent;
    }

    & .options {
      border-radius: 5px;
      line-height: 2px;
      padding: 10px;
      font-size: 18px;
      font-weight: 400;
    }

    & .search-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      width: 600px;
    }

    & .search-bar {
      width: 100%;
      height: 40px;
      padding: 2px 10px;
      border-radius: 5px;
      border-style: none;
      border: 2px solid rgba(0, 0, 0, 0.4);
    }

    & .search-icon {
      position: absolute;
      right: 10px;
      height: 30px;
      pointer-events: none;
    }
  }

  .menu {
    display: flex;
    margin: 0 auto;
    gap: 10px;
    align-items: center;

    .menu-item {
      display: flex;
      width: 60px;
    }

    & .sign-in {
      display: flex;
      padding: 10px;
      border-radius: 5px;
      border-style: none;
      color: ${twhite};
      background-color: ${tgreen};
    }

    .cart-wrapper {
      position: relative;

      .shopping-cart {
        height: 40px;
        width: 40px;
      }

      .item-counter {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        right: 0;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: ${tgreen};
      }
    }
  }
`;
