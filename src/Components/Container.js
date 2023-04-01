import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import About from "./About";

export default function Container() {
    return (
        <Routes>

            <Route path="/" element={<Home />}/>
            <Route path="/search" element={<Search />}/>
            <Route path="/about" element={<About />}/>

        </Routes>
    )
}