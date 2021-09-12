import React from "react";
import { useState } from "react";
import data from "./SliderData";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

import "../style.scss";
function Slider() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImgIndex(currentImgIndex === data.length - 1 ? 0 : currentImgIndex + 1);
  };
  const prevSlide = () => {
    setCurrentImgIndex(currentImgIndex === 0 ? data.length - 1 : currentImgIndex - 1);
  };

  return (
    <div className="slider">
       
      <IoMdArrowDropleftCircle className="left-arrow" onClick={prevSlide} />
      <IoMdArrowDroprightCircle className="right-arrow" onClick={nextSlide} />
      {data.map((dt, index) => {
        return currentImgIndex === index ? (
          <section className="first-section">
            <div key={dt.index} className="slide">
              <img src={dt.image} alt={dt.alt} />
            </div>
            <div className="pagination">
              {Array.from({ length: 5 }).map((item, i) => {
                return (
                  <div
                    onClick={() => setCurrentImgIndex(i)}
                    className={currentImgIndex === i ? "dot active" : "dot"}
                  ></div>
                );
              })}
            </div>
          </section>
        ) : null;
      })}
    </div>
  );
}

export default Slider;
