import React, { useEffect, useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import { faSignInAlt as awsomeIcon } from "@fortawesome/free-solid-svg-icons";
import "./SlideShow.css";
import "react-slideshow-image/dist/styles.css";
import { BorderBottom } from "../../../components/PublicComponents/BorderBottom";
import {
  PublicButton,
  PublicButtonWrapper,
} from "../../../components/PublicComponents/PublicButton";
import {
  HeroWrapper,
  HeroTitle,
  HeroDescribe,
  SlideShowWrapper,
  Icon,
} from "./SlideShowElement";
const slideImages = [
  "./assets/images/header Slideshow/header3web.jpg",
  "./assets/images/header Slideshow/header1web.jpg",
  "./assets/images/header Slideshow/header4web.jpg",
  "./assets/images/header Slideshow/header5web.jpg",
];

const Slideshow = () => {
  const inputRef = useRef(null);
  const [autoplay, setAutoplay] = useState(true);

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
      <Slide
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
                className={`slideImage`}
              />
            </div>
          </div>
        ))}
      </Slide>
      <HeroWrapper>
        <HeroTitle>Respect</HeroTitle>
        <BorderBottom />
        <HeroDescribe>Your Feet</HeroDescribe>
        <PublicButtonWrapper>
          <PublicButton to="/signin" transparency="true">
            <strong>Sign Up</strong>/<small>Sign in</small>
            <Icon icon={awsomeIcon} />
          </PublicButton>
        </PublicButtonWrapper>
      </HeroWrapper>
    </SlideShowWrapper>
  );
};

export default Slideshow;
