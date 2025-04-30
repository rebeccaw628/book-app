import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./container/Home/Home";
import Results from "./container/Results/Results";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/" element={<Results />} />
          <Route path="/search/:searchTerm" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
