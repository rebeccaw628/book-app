import classes from "./Header.module.scss";
import { useState } from "react";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <p
        className={classes.text}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered
          ? "powered by the Google Books API"
          : "a search engine for books"}
      </p>
    </>
  );
};

export default Header;
