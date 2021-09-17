import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 80px);
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    to right bottom,
    rgba(242, 197, 224, 1),
    rgba(242, 197, 224, 0.6),
    rgba(242, 197, 224, 1)
  );
`;

export const FormsWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FormContent = styled.div`
  height: ${({ sw }) => (!sw ? "650px" : " 600px")};
  background-color: whitesmoke;
  overflow: hidden;
  transition: all 0.3s;
  max-width: 400px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.5) 1px 2px 14px,
    inset rgba(0, 0, 0, 0.3) 0px 7px 13px -3px;
  border-radius: 5px;
  border-bottom: #870a30 3px solid;
  border-left: #870a30 1px solid;
  @media screen and (max-width: 480px) {
    height: ${({ sw }) => (!sw ? "600px" : "550px")};
  }
`;

export const SignUpForm = styled.form`
  background-color: ${({ sw }) => (!sw ? "#a8667a" : "#870a30")};
  opacity: ${({ sw }) => (!sw ? "1" : "0")};
  height: ${({ sw }) => (!sw ? "650px" : " 0px")};
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 1;
  padding: ${({ sw }) => (sw ? null : " 30px  50px 50px")};
  transition: all 0.7s ease-in-out;
  @media screen and (max-width: 480px) {
    height: ${({ sw }) => (!sw ? "600px" : " 0px")};
    padding: ${({ sw }) => (sw ? null : " 30px")};
  }
`;

export const SignInForm = styled.form`
  background-color: #faf5f5;
  opacity: ${({ sw }) => (sw ? "1" : "0")};
  height: ${({ sw }) => (!sw ? "0px" : " 600px")};
  width: 100%;
  transition: all 0.7s ease-in-out;
  overflow: hidden;
  padding: ${({ sw }) => (!sw ? null : " 50px")};
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  @media screen and (max-width: 480px) {
    height: ${({ sw }) => (!sw ? "0px" : " 550px")};
    padding: ${({ sw }) => (!sw ? null : " 30px")};
  }
`;
export const SwitchSide = styled.div`
  width: 100%;
  background-color: #faf5f5;
  padding-bottom: 15px;
  div {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    background-color: rgb(135, 10, 48);
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px;
  }
  span {
    text-shadow: rgba(0, 0, 0, 0.8) 0 1px 4px;
    width: 100%;
    font-weight: 500;
    color: #fff;
    font-weight: bold;
    letter-spacing: 0.5px;
  }
`;

export const FormH2 = styled.h2`
  color: ${({ sw }) => (!sw ? "white" : "black")};
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.7s;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  color: ${({ sw }) => (!sw ? "white" : "rgb(135, 10, 48)")};
`;

export const FormInput = styled.input`
  padding: 10px;
  width: 100%;
  font-size: 15px;
  border: none;
  outline: none;
  background: white;
  border-radius: 5px;
  box-shadow: inset rgba(0, 0, 0, 0.4) 1px 1px 4px;
  @media screen and (max-width: 480px) {
    font-size: 13px;
    padding: 10px 7px;
  }
`;

export const ErrorsSpan = styled.span`
opacity: ${({ error }) => (error ? "1" : "0")};
overflow: hidden;
transition: all 0.2s;
padding: 1px 3px;
color: white;
background-color: red;
font-weight: 500;
border-radius: 4px;
box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px;
`

export const FormButton = styled.button`
  background-color: #dddada;
  background: ${({ sw }) => (!sw ? "#dddada" : "rgb(135, 10, 48)")};
  color: ${({ sw }) => (sw ? "whitesmoke" : "rgb(135, 10, 48)")};
  padding: 10px 0;
  border: 2px solid rgb(135, 10, 48);
  border-radius: 4px;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.3);
  font-size: 18px;
  cursor: pointer;
  text-shadow: rgba(0, 0, 0, 0.2) 0 2px 3px;
  transition: all 0.1s;
  margin: 10px 0 0;
  &:hover {
    background: ${({ sw }) => (!sw ? "white" : "rgb(117, 8, 41)")};
    color: ${({ sw }) => (sw ? "white" : "rgb(135, 10, 48)")};
  }
`;

export const Text = styled.span`
transition: all 0.2s;
  text-align: center;
  margin-top: 24px;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  cursor: pointer;
  color: gray;
  &:hover {
    color: black;
  }
`;
