import classes from "./Home.module.scss";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  return (
    <main className={classes.container}>
      <h1 className={classes.heading}>bookme</h1>
      <SearchBar />
    </main>
  );
};

export default Home;
