import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./contents/landing";
import MenuRepositoryList from "./contents/menu/menu_repository_list";
import MainLayout from "./contents/layout/main_layout";
import Routing from "./utils/constanta/page_route";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={Routing.DEFAULT} element={<LandingPage />} />
          <Route path={Routing.REPOSITORY} element={<MenuRepositoryList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
