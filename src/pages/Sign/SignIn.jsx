import React,{useEffect} from "react";
import { BGSection } from "../../components/PublicComponents/BGSection";
import { PublicButton } from "../../components/PublicComponents/PublicButton";
import {
  Container,
  FormWrap,
  Form,
  FormContent,
  FormH1,
  FormLabel,
  FormInput,
  Text,
} from "./SignElement";

const SignIn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BGSection>
        <Container>
          <FormWrap>
            <FormContent>
              <Form action="#">
                <FormH1>Sign in to your account</FormH1>
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput type="email" required />
                <FormLabel htmlFor="for">Password</FormLabel>
                <FormInput type="password" required />
                {/* <FormButton type="submit">Continue</FormButton> */}
                <PublicButton type="submit">Continue</PublicButton>
                <Text>Forgot password</Text>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </BGSection>
    </>
  );
};

export default SignIn;
