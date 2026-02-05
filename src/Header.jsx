import Nav from "./Nav";
import { NavLink } from "react-router-dom";

function Header() {
    return <>
        <div className="header">
            <NavLink to="/" className="logo">.˳·˖✶𓆩𓁺𓆪✶˖·˳.</NavLink>
            <Nav />
        </div>
    </>
}

export default Header;