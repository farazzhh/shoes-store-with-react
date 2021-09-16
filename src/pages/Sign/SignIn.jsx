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
  FormH2,
  FormLabel,
  FormInput,
  Text,
  FormButton,
} from "./SignElement";

const Sign = () => {
  const [sw, setSw] = useState(true);

  const clickHandler = () => {
    setSw(!sw);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BGSection>
        <Container>
          <FormsWrapper>
            <FormContent sw={sw}>
              <SignUpForm action="#" sw={sw}>
                <FormH2 sw={sw}>Create an Account</FormH2>
                <div>
                  <FormLabel sw={sw} htmlFor="for">
                    Username :
                  </FormLabel>
                  <FormInput
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div>
                  <FormLabel sw={sw} htmlFor="for">Email : </FormLabel>
                  <FormInput
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <FormLabel sw={sw} htmlFor="for">Password :</FormLabel>
                  <FormInput
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div>
                  <FormLabel sw={sw} htmlFor="for">Repeat Password :</FormLabel>
                  <FormInput
                    type="password"
                    name="password2"
                    placeholder="Repeat your password"
                    required
                  />
                </div>
                {/* <FormButton type="submit">Continue</FormButton> */}
                <FormButton type="submit" sw={sw}>
                  Submit
                </FormButton>
              </SignUpForm>

              <SwitchSide onClick={clickHandler}>
                <div>
                  <span>
                    {!sw
                      ? " Already have an account?"
                      : "Let's create an account!"}
                  </span>
                </div>
              </SwitchSide>

              <SignInForm action="#" sw={sw}>
                <FormH2 sw={sw}>Sign In</FormH2>
                <div>
                  <FormLabel sw={sw} htmlFor="for">Username :</FormLabel>
                  <FormInput
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div>
                  <FormLabel sw={sw} htmlFor="for">Password : </FormLabel>
                  <FormInput
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                {/* <FormButton type="submit">Continue</FormButton> */}
                <FormButton type="submit" sw={sw}>
                  Submit
                </FormButton>
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
