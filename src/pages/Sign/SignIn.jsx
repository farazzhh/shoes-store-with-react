import React, { useEffect, useState } from "react";
import { BGSection } from "../../components/PublicComponents/BGSection";
import { PublicButton } from "../../components/PublicComponents/PublicButton";
import {
  Container,
  FormsWrapper,
  SignUpForm,
  SwitchSide,
  SignInForm,
  FormContent,
  FormH1,
  FormLabel,
  FormInput,
  Text,
} from "./SignElement";

const Sign = () => {
  const [sw, setSw] = useState(false);

  const clickHandler = () => {
    setSw(!sw)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BGSection>
        <Container>
          <FormsWrapper>
            <SwitchSide>
              <span onClick={clickHandler}>
                Switch to{!sw ? " Sign In" : " Sign UP"}
              </span>
            </SwitchSide>
            <FormContent>
              <SignUpForm action="#" sw={sw}>
                <FormH1>Sign Up</FormH1>
                <FormLabel htmlFor="for">Username :</FormLabel>
                <FormInput
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  required
                />
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <FormLabel htmlFor="for">Password</FormLabel>
                <FormInput
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
                <FormLabel htmlFor="for">Repeat Password</FormLabel>
                <FormInput
                  type="password"
                  name="password2"
                  placeholder="Repeat your password"
                  required
                />
                {/* <FormButton type="submit">Continue</FormButton> */}
                <PublicButton type="submit">Submit</PublicButton>
              </SignUpForm>
              <SignInForm action="#" sw={sw}>
                <FormH1>Sign In</FormH1>
                <FormLabel htmlFor="for">Username :</FormLabel>
                <FormInput
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  required
                />
                <FormLabel htmlFor="for">Password:</FormLabel>
                <FormInput
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
            
                {/* <FormButton type="submit">Continue</FormButton> */}
                <PublicButton type="submit">Submit</PublicButton>
                <Text>Forgot password</Text>
              </SignInForm>
            </FormContent>
          </FormsWrapper>
        </Container>
      </BGSection>
    </>
  );
};

export default Sign;
