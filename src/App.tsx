import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./contents/landing";
import RepositoryPage from "./contents/repository_list";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/repository" element={<RepositoryPage />} />
      </Routes>
    </>
  );
}

export default App;
