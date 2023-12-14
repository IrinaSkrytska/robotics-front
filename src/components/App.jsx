import { Routes, Route } from "react-router-dom";
import AppBar from "./AppBar";
import Home from "./Home";
import About from "./About";
import Container from "./Container";
// import NotFoundPage from "./NotFoundPage";

export const App = () => {
  return (
    <>
      <Routes>
        <>
          <Route path="/" element={<AppBar />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="about" element={<About />} />
        </>
      </Routes>
    </>
  );
};
