import { useState, useEffect } from "react";

const useForm = (signUp_validation) => {
  
    const [signUpValue, setSignUpValue] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [signInValue, setSignInValue] = useState({
    username: "",
    password: "",
  });
    
    const [errors , setErrors] = useState({})

  const signUpChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignUpValue({
      ...signUpValue,
      [name]: value,
    });
  };

  const signInChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignInValue({
      ...signInValue,
      [name]: value,
    });
  };

  const signIn_Submit_handler = (e) => {
    e.preventDefault();
    console.log(signInValue);
  };
  const signUp_Submit_handler = (e) => {
    e.preventDefault();
    console.log(signUpValue);
      setErrors(signUp_validation(signUpValue));

  };

  return {
    signInChangeHandler,
    signInValue,
    signUpChangeHandler,
    signUpValue,
    signIn_Submit_handler,
    signUp_Submit_handler,
    errors,
  };
};

export default useForm;
