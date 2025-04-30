import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./container/Home/Home";
import Results from "./container/Results/Results";
// import NoResults from "./container/NoResults/NoResults";
import classes from "./App.module.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/" element={<Results />} />
          <Route path="/search/:searchTerm" element={<Results />} />
          {/* <Route path="/*" element={<NoResults />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
