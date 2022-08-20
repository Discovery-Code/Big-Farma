import styled from "styled-components";

export const Home = styled.section`
  .heading {
    font-size: 35px;
    padding: 10px;
    background-color: green;
  }

  .label-title {
    font-size: 22px;
    font-family: "Poppins";
    font-weight: 400;
  }

  .items-section {
    display: flex;
    gap: 40px;
    height: 100%;
    margin: 30px auto 0 auto;
    width: 80%;
    padding: 10px;
    display: flex;
  }

  .items-side__menu {
    display: flex;
    justify-content: center;
    width: 300px;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .item-filter {
    display: flex;
    flex-direction: column;
  }

  .item-filter__wrapper {
    display: flex;
    gap: 10px;
  }

  .grid-container {
    width: 100%;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);

    .outline-here {
      outline: 1px solid red;
    }
  }
`;
