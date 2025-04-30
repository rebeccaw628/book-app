import classes from "./Home.module.scss";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import Header from "../../components/Header/Header";
import { getBooks } from "../../components/services/fetch-services";

const Home = () => {
  return (
    <div className={classes.home}>
      <Logo />
      <Header />
      <SearchBar />
    </div>
  );
};

export default Home;
