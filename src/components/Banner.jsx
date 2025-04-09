import React from "react";

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="Banner" />
      <h2>{text}</h2>
    </div>
  );
}

export default Banner;
