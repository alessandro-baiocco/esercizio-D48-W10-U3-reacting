import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyTopBar from "./components/MyTopBar";
import MyFooter from "./components/MyFooter";
import MyHome from "./components/MyHome";
import ProfileBody from "./components/profile Page/ProfileBody";
import SettingsBody from "./components/settings page/SettingsBody";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MyTopBar />
        <Routes>
          <Route path="/" element={<MyHome />} />
          {/* <Route path="/" element={<Header />} /> */}

          <Route path="/TvShows" element={<TvShows />} />

          <Route path="/profile" element={<ProfileBody />} />

          <Route path="/settings" element={<SettingsBody />} />

          <Route path="/MovieDetails/:id" element={<MovieDetails />} />

          <Route path="/MovieDetails/*" element={<ErrorPage />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
};

export default App;
