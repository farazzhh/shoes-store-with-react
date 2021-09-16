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
  @media screen and (max-width: 400px) {
    height: 75%;
  }
`;

export const FormContent = styled.div`
  height: 800px;
  overflow: hidden;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px;
  border-radius: 20px;
  border-bottom: #870a30 3px solid;
  border-left: #870a30 1px solid;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const SignUpForm = styled.form`
  background-color: white;
  width: 100%;
  height: ${({ sw }) => (!sw ? "800px" : " 0px")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 1;
  padding: ${({ sw }) => (sw ? null : " 80px 50px")};
  transition: all 0.3s;
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;
export const SignInForm = styled.form`
  height: ${({ sw }) => (!sw ? "0px" : " 800px")};
  width: 100%;
  transition: all 0.3s;
  overflow: hidden;
  background-color: whitesmoke;
  padding: ${({ sw }) => (!sw ? null : " 80px 50px")};
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;
export const SwitchSide = styled.div`
  transition: all 0.3s;
  width: 100px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);

  span {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    width: 100%;
    font-weight: 500;
    color: #fff;
    text-shadow: rgba(0, 0, 0, 0.5) 0 1px 3px;
    font-weight: bold;
    padding: 10px;
    background-color: #870a30;
    box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px;
    cursor: pointer;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 00;
  text-align: center;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
`;

export const FormLabel = styled.label`
  margin-bottom: 9px;
  font-size: 14px;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
`;

export const FormInput = styled.input`
  padding: 16px;
  margin-bottom: 32px;
  border: none;
  outline: none;
  background: whitesmoke;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #ff59b4;
  padding: 14px 0;
  border: none;
  border-radius: 4px;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.2);
  font-size: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 3px rgba(0, 0, 0, 0.2);
    background: #ff49b4;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #870a30;
  }
`;
