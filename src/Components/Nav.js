import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <br></br>
            <header>

            <NavLink to="/">
                <li className="home"> Home </li>
            </NavLink>
            
            <NavLink to="/search">
                <li className="search"> Search Weather </li>
            </NavLink>
        
            <NavLink to="/about">
                <li className="about"> About </li>
            </NavLink>

            </header>

        </nav>
    )
}