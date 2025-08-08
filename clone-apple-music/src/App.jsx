import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainHome from "./components/MainHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSongAction } from "./redux/actions";
import Favourites from "./components/Favourites";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongAction());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/favourites/" element={<Favourites />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
