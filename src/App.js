import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import { Routes, Route } from "react-router-dom";
import Tacha from "./Components/Profiles/T/T";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Navbar" element={<Navbar />} />
          <Route index element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Tacha" element={<Tacha />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
