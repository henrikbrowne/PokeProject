import { Route, Routes, useLocation } from "react-router";
import FrontPage from "./components/FrontPage/FrontPage";
import DetailsPage from "./views/DetailsPage";
import Navbar from "./components/Navbar/NavBar";
import Game from "./components/Game/Game";
import OverviewPage from "./views/OverviewPage";

function AppLayout() {
  const location = useLocation();

  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <div style={{ paddingTop: hideNavbar ? 0 : "6rem" }}>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/details/:name" element={<DetailsPage />} />
        <Route path="/game" element={<Game />}></Route>
        <Route path="/overview" element={<OverviewPage />}></Route>
      </Routes>
      </div>
    </>
  );
}

export default AppLayout;