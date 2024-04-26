import './App.css';
import Home from "./pages/Home";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ToDo from "./pages/ToDo";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ToDo" element={<ToDo />} />
        <Route path="/About" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
