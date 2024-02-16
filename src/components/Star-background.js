import React from "react";
import { css } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Star = ({ onClick, style }) => (
  <FontAwesomeIcon
    icon={faStar}
    className={css`
      font-size: 1rem;
      color: yellow;
      border-radius: 50%;
      position: absolute;
      cursor: pointer;
      transition: transform 0.2s ease-in-out;
      &:hover {
        transform: scale(1.5);
      }
    `}
    onClick={onClick}
    style={style}
  />
);

const StarBackground = ({ children }) => {
  const [stars, setStars] = React.useState([
    { id: 1, top: "20%", left: "30%" },
    { id: 2, top: "40%", left: "20%" },
    { id: 3, top: "60%", left: "80%" },
    { id: 4, top: "80%", left: "20%" },
    { id: 5, top: "20%", left: "60%" },
    { id: 6, top: "30%", left: "5%" },
    { id: 7, top: "50%", left: "90%" },
    { id: 8, top: "70%", left: "90%" },
    { id: 9, top: "90%", left: "40%" },
    { id: 10, top: "90%", left: "70%" },
    { id: 11, top: "40%", left: "25%" },
    { id: 12, top: "10%", left: "20%" },
    { id: 13, top: "5%", left: "15%" },
  ]);

  const handleStarClick = (id) => {
    setStars((prevStars) => prevStars.map((star) => (star.id === id ? { ...star } : star)));
  };

  return (
    <div
      className={css`
        width: 100%;
        height: 100vh;
        background: linear-gradient(to bottom, #0a0c22, #0f1043, #0c0f3d, #05050d);
        position: relative;
        overflow: hidden;
      `}
    >
      {stars.map((star) => (
        <Star key={star.id} onClick={() => handleStarClick(star.id)} style={{ top: star.top, left: star.left }} />
      ))}
      {children}
    </div>
  );
};

export default StarBackground;
