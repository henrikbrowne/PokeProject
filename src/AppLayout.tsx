import { Route, Routes, useLocation } from "react-router";
import FrontPage from "./components/FrontPage/FrontPage";
import DetailsPage from "./views/DetailsPage";
import Navbar from "./components/NavBar";
import Game from "./components/Game/Game";

function AppLayout() {
  const location = useLocation();

  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/game" element={<Game />}></Route>
      </Routes>
    </>
  );
}

export default AppLayout;