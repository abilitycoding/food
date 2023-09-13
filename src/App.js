import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Biryani from "./Components/Biryani"
import Pasta from "./Components/Pasta"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Biryani/>}/>
          <Route path="/pasta" element={<Pasta/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
