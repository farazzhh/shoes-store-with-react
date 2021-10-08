import React, { useEffect, useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import { faSignInAlt as loginIcon } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle as userIcon } from "@fortawesome/free-solid-svg-icons";
import "react-slideshow-image/dist/styles.css";
import { BorderBottom } from "../../../components/PublicComponents/BorderBottom";
import {
  PublicLink,
  PublicButtonWrapper,
} from "../../../components/PublicComponents/PublicButton";
import {
  HeroWrapper,
  HeroTitle,
  HeroDescribe,
  SlideShowWrapper,
  Icon,
  LogButtons,
} from "./SlideShowElement";
import { UserDataContext } from "../../../providers/UserDataContext";
import { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const slideImages = [
  "./assets/images/header Slideshow/header3web.jpg",
  // "./assets/images/header Slideshow/header1web.jpg",
  // "./assets/images/header Slideshow/header4web.jpg",
  // "./assets/images/header Slideshow/header31.jpg",
];

const Slideshow = () => {
  const inputRef = useRef(null);
  const [autoplay, setAutoplay] = useState(true);
<<<<<<< HEAD
// const [userData, setUserDataHandler, errors, setErrorsHandler] =
//   useContext(UserDataContext);
  
const { user, login, logout } = useContext(UserDataContext);
=======
const [userData, setUserDataHandler, errors, setErrorsHandler] =
  useContext(UserDataContext);
  
  const { user, isLoading, loginWithRedirect, logout } = useAuth0();
>>>>>>> reverse-befor-netlify

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      if (inputRef.current !== null) {
        if (window.scrollY > inputRef.current.offsetHeight + 80) {
          // class width-0 made in App.css
          inputRef.current.classList.add("width-0");
          setAutoplay(false);
        } else {
          inputRef.current.classList.remove("width-0");
          setAutoplay(true);
        }
      }
    });
  }, []);

  return (
    <SlideShowWrapper ref={inputRef}>
      {/* <Slide
        easing="ease"
        arrows={false}
        duration={3000}
        autoplay={autoplay}
        infinite={true}
      >
        {slideImages.map((slide, index) => (
          <div className={`each-slide `} key={index}>
            <div className="slideWrapper">
              <img
                src={`${process.env.PUBLIC_URL}/${slide}`}
                alt="slide images"
                className="slideImage"
              />
            </div>
          </div>
        ))}
      </Slide> */}
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/header Slideshow/header3web.jpg`}
          alt="Header"
        />
      </div>

      <HeroWrapper>
        <HeroTitle>Respect</HeroTitle>
        <BorderBottom />
        <HeroDescribe>Your Feet</HeroDescribe>
        <PublicButtonWrapper>
<<<<<<< HEAD
          {!user ? (
            <PublicLink to="" transparency="true" onClick={login}>
=======
          {/* {!userData.username ? (
            <PublicLink to="/signin" transparency="true">
>>>>>>> reverse-befor-netlify
              <strong>Sign Up</strong>/<small>Sign in</small>
              <Icon icon={loginIcon} />
            </PublicLink>
          ) : (
            <PublicLink to="/profile" transparency="true">
<<<<<<< HEAD
              <strong>Hi {user}</strong>
              <Icon icon={userIcon} />
            </PublicLink>
=======
              <strong>Hi {userData.username}</strong>
              <Icon icon={userIcon} />
            </PublicLink>
          )} */}
          
          {!isLoading && !user && (
            <LogButtons onClick={() => loginWithRedirect()}>Login</LogButtons>
>>>>>>> reverse-befor-netlify
          )}
          {/* {!isLoading && user && ( */}
            <LogButtons
              onClick={() =>
                logout({
                  returnTo: window.location.origin,
                })
              }
            >
              Logout
            </LogButtons>
          {/* )} */}
        </PublicButtonWrapper>
      </HeroWrapper>
    </SlideShowWrapper>
  );
};

export default Slideshow;
