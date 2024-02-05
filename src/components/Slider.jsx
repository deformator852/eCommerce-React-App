import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/slider.css";
import inspiration1 from "../assets/images/inspiration1.png";
import inspiration2 from "../assets/images/2.png";
import inspiration3 from "../assets/images/3.png";

const inspirationDescription = () => {
  return (
    <div className="inspiration-description">
      <div className=""></div>
      <div className=""></div>
    </div>
  );
};
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const slides = [
    inspiration1,
    inspiration2,
    inspiration3,
  ];
  const handlerFirstButton = () => {
    setCurrentIndex(1);
    firstRef.current.src = slides[0];
    secondRef.current.src = slides[1];
    thirdRef.current.src = slides[2];
  };
  const handlerSecondButton = () => {
    setCurrentIndex(2);
    firstRef.current.src = slides[1];
    secondRef.current.src = slides[2];
    thirdRef.current.src = slides[0];
  };
  const handlerThirdButton = () => {
    setCurrentIndex(3);
    firstRef.current.src = slides[2];
    secondRef.current.src = slides[0];
    thirdRef.current.src = slides[1];
  };

  return (
    <div className="slider">
      {inspirationDescription()}
      <img
        ref={firstRef}
        src={inspiration1}
        className="current-slider-image"
      />
      <img ref={secondRef} src={inspiration2} className="second" />
      <img ref={thirdRef} src={inspiration3} className="third" />
      <div className="radio-buttons">
        <label
          className={currentIndex === 1 ? "custom-radio-active" : null}
          htmlFor="radio1"
        >
          <div
            id="radio1"
            onClick={handlerFirstButton}
            className="custom-radio"
          >
          </div>
        </label>

        <label
          className={currentIndex === 2 ? "custom-radio-active" : null}
          htmlFor="radio2"
        >
          <div
            id="radio2"
            onClick={handlerSecondButton}
            className="custom-radio"
          >
          </div>
        </label>

        <label
          className={currentIndex === 3 ? "custom-radio-active" : null}
          htmlFor="radio3"
        >
          <div
            id="radio3"
            onClick={handlerThirdButton}
            className="custom-radio"
          >
          </div>
        </label>
      </div>
    </div>
  );
};

export default Slider;
