import { useState } from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./Components/Navbar";
import JustRelease from "./Components/JustRelease";
import PopularOfWeek from "./Components/PopularOfWeek";
import Austria from "./Components/Austria";
import Movies from "./Components/Movies";
import Series from "./Components/Series.jsx";
import KoreanSeries from "./Components/KoreanSeries";
import AvardMovies from "./Components/AvardMovies";
import Fast from "./Components/Fast.jsx";
import Footer from "./Components/Footer";

const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<JustRelease />}></Route>
    </Routes>
  );
};

function App() {
  return (
    <Box bg="#080808">
      <Navbar />
      <JustRelease />
      <PopularOfWeek />
      <Austria />
      <Movies />
      <Series />
      <KoreanSeries />
      <Box display="flex" justifyContent="space-between" gap="60px" mb="50px">
        <AvardMovies />
        <Fast />
      </Box>
      <Footer />
      <Routing />
    </Box>
  );
}

export default App;
