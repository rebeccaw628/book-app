import classes from "./Logo.module.scss";
import { Link } from "react-router";

const Logo = () => {
  return (
    <>
      <Link to="/" className={classes.logo}>
        bookme
      </Link>
    </>
  );
};

export default Logo;
