import React from "react";
import ImageGallery from "react-image-gallery";
import "./image-gallery.css";

const AboutImageGallery = () => {
  const images = [
    {
      original: `${process.env.PUBLIC_URL}/assets/images/AboutUs Image Gallery/slide2.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/AboutUs Image Gallery/slide2-thumbnail.jpg`,
    },
    {
      original: `${process.env.PUBLIC_URL}/assets/images/AboutUs Image Gallery/slide1.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/AboutUs Image Gallery/slide1-thumbnail.jpg`,
    },
    {
      original: `${process.env.PUBLIC_URL}/assets/images/AboutUs Image Gallery/slide3.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/AboutUs Image Gallery/slide3-thumbnail.jpg`,
    },
    {
      original: `${process.env.PUBLIC_URL}/assets/images/AboutUs Image Gallery/slide4.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/AboutUs Image Gallery/slide4-thumbnail.jpg`,
    },
    {
      original: `${process.env.PUBLIC_URL}/assets/images/AboutUs Image Gallery/slide5.jpg`,
      thumbnail: `${process.env.PUBLIC_URL}/assets/images/AboutUs Image Gallery/slide5-thumbnail.jpg`,
    }

  ];

  return (
    <>
      <ImageGallery items={images} />
    </>
  );
};

export default AboutImageGallery;
