import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./components/shared/Header";
import Home from './components/page/Home/Home';
import NoPage from './components/page/error/NoPage';
import PokemonInfo from "./components/page/Info/PokemonInfo";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/detail/:id" element={ <PokemonInfo />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
