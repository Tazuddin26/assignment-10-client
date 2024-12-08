import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Banner = () => {
  const fadeImages = [
    {
      url: "https://i.ibb.co.com/wCh0Krk/img1.jpg",
      caption: "",
    },
    {
      url: "https://i.ibb.co.com/B3bkL48/img2.jpg",
      caption: "",
    },
    {
      url: "https://i.ibb.co.com/7g3jxkP/img3.jpg",
      caption: "",
    },
    {
      url: "https://i.ibb.co.com/58Rd7ws/img4.jpg",
      caption: "",
    },
  ];

  return (
    <div className="slide-container w-11/12 mx-auto">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img
              src={fadeImage.url}
              className="h-[500px] w-full duration-1000 hover:scale-105 rounded-xl flex"
            />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Banner;
