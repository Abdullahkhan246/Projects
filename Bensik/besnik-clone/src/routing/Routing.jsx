import { BrowserRouter, Routes, Route } from "react-router";
import Home from '../pages/home/Home';
import Navbar from "../components/navbar/Navbar";

export default function Routing() {
  return (
    
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}
