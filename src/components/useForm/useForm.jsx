import { useState, useEffect } from "react";

const useForm = (signUp_validation, setUserDataHandler) => {
  const [errors, setErrors] = useState({});
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
    const err = signUp_validation(signUpValue);
    e.preventDefault();
    if (err.username || err.password || err.password2 || err.email) {
      setErrors(err);
    } else {
      setUserDataHandler(signUpValue);
      setErrors({});
      window.history.back();
    }
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
