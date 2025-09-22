import { Route, Routes, useLocation } from "react-router";
import FrontPage from "./components/FrontPage/FrontPage";
import DetailsPage from "./views/DetailsPage";
import Navbar from "./components/Navbar/NavBar";
import OverviewPage from "./views/OverviewPage";
import GamePage from "./views/GamePage";
import Footer from "./components/Footer/Footer";
import Pokeomat from "./views/Pokeomat";
import PokeomatResultPage from "./views/PokeomatResultPage";

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
          <Route path="/game" element={<GamePage />}></Route>
          <Route path="/overview" element={<OverviewPage />}></Route>
          <Route path="/pokeomat" element={<Pokeomat />}></Route>
          <Route path="/pokeomat/result" element={<PokeomatResultPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
