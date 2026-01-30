import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/About">About me</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
            </ul>
        </nav>
    );
}

export default Nav;