// import React, { useEffect, useState, useContext } from "react";
// import { BGSection } from "../../components/PublicComponents/BGSection";
// import useForm from "../../components/custom hooks/useForm/useForm";
// import { signUp_validation } from "../../components/custom hooks/useForm/validation";
// import {
//   Container,
//   FormsWrapper,
//   SignUpForm,
//   SwitchSide,
//   SignInForm,
//   FormContent,
//   FormH2,
//   FormLabel,
//   FormInput,
//   ErrorsSpan,
//   Text,
//   FormButton,
// } from "./SignElement";

// const Sign = () => {
//   const [sw, setSw] = useState(false);

//   const {
//     signInChangeHandler,
//     signInValue,
//     signUpChangeHandler,
//     signUpValue,
//     signIn_Submit_handler,
//     signUp_Submit_handler,
//     errors,
//   } = useForm(signUp_validation, setUserDataHandler);

//   const clickSwitchHandler = () => {
//     setSw(!sw);
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       <BGSection>
//         <Container>
//           <FormsWrapper>
//             <FormContent sw={sw}>
//               <SignUpForm action="#" sw={sw} onSubmit={signUp_Submit_handler}>
//                 <FormH2 sw={sw}>Create an Account</FormH2>
//                 <div>
//                   <FormLabel sw={sw} htmlFor="username">
//                     Username :
//                   </FormLabel>
//                   <FormInput
//                     id="username"
//                     type="text"
//                     name="username"
//                     placeholder="Enter your username"
//                     onChange={signUpChangeHandler}
//                     value={signUpValue.username}
//                   />
//                   {errors.username && (
//                     <ErrorsSpan error={errors.username}>
//                       {errors.username}
//                     </ErrorsSpan>
//                   )}
//                 </div>
//                 <div>
//                   <FormLabel sw={sw} htmlFor="email">
//                     Email :{" "}
//                   </FormLabel>
//                   <FormInput
//                     id="email"
//                     type="text"
//                     name="email"
//                     placeholder="Enter your email"
//                     onChange={signUpChangeHandler}
//                     value={signUpValue.email}
//                   />
//                   {errors.email && (
//                     <ErrorsSpan error={errors.email}>{errors.email}</ErrorsSpan>
//                   )}
//                 </div>
//                 <div>
//                   <FormLabel sw={sw} htmlFor="password">
//                     Password :
//                   </FormLabel>
//                   <FormInput
//                     id="password"
//                     type="password"
//                     name="password"
//                     placeholder="Enter your password"
//                     onChange={signUpChangeHandler}
//                     value={signUpValue.password}
//                   />
//                   {errors.password && (
//                     <ErrorsSpan error={errors.password}>
//                       {errors.password}
//                     </ErrorsSpan>
//                   )}
//                 </div>
//                 <div>
//                   <FormLabel sw={sw} htmlFor="password2">
//                     Repeat Password :
//                   </FormLabel>
//                   <FormInput
//                     id="password2"
//                     type="password"
//                     name="password2"
//                     placeholder="Repeat your password"
//                     onChange={signUpChangeHandler}
//                     value={signUpValue.password2}
//                   />
//                   {errors.password2 && (
//                     <ErrorsSpan error={errors.password2}>
//                       {errors.password2}
//                     </ErrorsSpan>
//                   )}
//                 </div>
//                 {/* <FormButton type="submit">Continue</FormButton> */}
//                 <FormButton type="submit" sw={sw}>
//                   Submit
//                 </FormButton>
//               </SignUpForm>

//               <SwitchSide onClick={clickSwitchHandler}>
//                 <div>
//                   <span>
//                     {!sw
//                       ? " Already have an account?"
//                       : "Don't have an account?"}
//                   </span>
//                 </div>
//               </SwitchSide>

//               <SignInForm action="#" sw={sw} onSubmit={signIn_Submit_handler}>
//                 <FormH2 sw={sw}>Sign In</FormH2>
//                 <div>
//                   <FormLabel sw={sw} htmlFor="username">
//                     Username :
//                   </FormLabel>
//                   <FormInput

//                     type="text"
//                     name="username"
//                     placeholder="Enter your username"
//                     onChange={signInChangeHandler}
//                     value={signInValue.username}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <FormLabel sw={sw} htmlFor="password">
//                     Password :{" "}
//                   </FormLabel>
//                   <FormInput

//                     type="password"
//                     name="password"
//                     placeholder="Enter your password"
//                     onChange={signInChangeHandler}
//                     value={signInValue.password}
//                   />
//                 </div>
//                 <FormButton type="submit" sw={sw}>
//                   Submit
//                 </FormButton>
//                 <Text>Forgot password</Text>
//               </SignInForm>
//             </FormContent>
//           </FormsWrapper>
//         </Container>
//       </BGSection>
//     </>
//   );
// };

// export default Sign;
