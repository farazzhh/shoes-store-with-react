

const SignOut = () => {
  localStorage.setItem("userData", JSON.stringify({}));
  window.location.reload(false);
  window.location.reload(true);
};

export default SignOut;
