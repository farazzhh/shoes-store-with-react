/* eslint-disable no-mixed-operators */
import React, { useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { LoadingContext } from "../../providers/LoadingContext";

const AuthenticationButton = () => {
  const { user, loginWithRedirect, logout } =
    useAuth0();
  const { loading, setLoading } = useContext(LoadingContext)
  
  return (
    <>
      {!user && (<LogButtons onClick={() => loginWithRedirect()}>Login</LogButtons>)}
        { user && (
        <LogButtons
          onClick={() =>
            logout({
              returnTo: window.location.origin,
            })
          }
        >
          Logout
        </LogButtons>
      )}
      
    </>
  );

};

export default AuthenticationButton;

export const LogButtons = styled.div`
  height: 30px;
  width: 100px;
  text-align: center;
  list-style: none;
  margin-left: 0.5rem;
  color: #000;
  padding: 6px 15px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 2px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  transition: all 0.1s ease-in-out;
  -webkit-transition: all 0.1s ease-in-out;
  transform: scaleY(10px);
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.3);
    border-bottom: #870a30 1px solid;
    transform: translateY(1px);
  }
`;
