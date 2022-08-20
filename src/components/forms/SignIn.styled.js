import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  z-index: 20;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 20px;
  background-color: deepskyblue;
  box-shadow: 0 0 2px rgba(255, 255, 255, 0.9);

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .user-input {
    width: 300px;
    height: 40px;
    padding: 5px 10px;
    border-radius: 10px;
    border-style: none;
    border: 2px solid rgba(0, 0, 0, 0.4);
  }

  .submit {
    font-size: 20px;
    height: 40px;
    border-style: none;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }
`;
