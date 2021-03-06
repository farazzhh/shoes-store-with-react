import React, { useEffect, useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import { faSignInAlt as loginIcon } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle as userIcon } from "@fortawesome/free-solid-svg-icons";
import "react-slideshow-image/dist/styles.css";
import { BorderBottom } from "../PublicComponents/BorderBottom";
import {
  PublicLink,
  PublicButtonWrapper,
} from "../PublicComponents/PublicButton";
import {
  HeroWrapper,
  HeroTitle,
  HeroDescribe,
  SlideShowWrapper,
  Icon,
  LogButtons,
} from "./SlideShowElement";
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
// put image adress here for slidshow
const slideImages = [
  // "./assets/images/header Slideshow/header3web.jpg",
  // "./assets/images/header Slideshow/header1web.jpg",
  // "./assets/images/header Slideshow/header4web.jpg",
  // "./assets/images/header Slideshow/header31.jpg",
];

const Slideshow = () => {
  const inputRef = useRef(null);

  const [autoplay, setAutoplay] = useState(true);

  const { user, isLoading, loginWithRedirect, logout } = useAuth0();

  useEffect(() => {
    // >>> the width of slideshow will be 0 when scroll, it's for improve App performance <<<
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // window.addEventListener("scroll", function (e) {
    //   if (inputRef.current !== null) {
    //     if (window.scrollY > inputRef.current.offsetHeight + 80) {
    //       // class width-0 made in App.css
    //       inputRef.current.classList.add("width-0");
    //       setAutoplay(false);
    //     } else {
    //       inputRef.current.classList.remove("width-0");
    //       setAutoplay(true);
    //     }
    //   }
    // });
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
          {/*  profile or Signup/in button */}
          {user ? (
            <ProfilePage />
          ) : (
            <PublicLink
              to=""
              transparency="true"
              onClick={loginWithRedirect}
            >
              <span>
                Login<span>/Signup</span>
              </span>
              <Icon icon={loginIcon} />
            </PublicLink>
          )}
        </PublicButtonWrapper>
      </HeroWrapper>
    </SlideShowWrapper>
  );
};

export default Slideshow;
