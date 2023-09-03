import "../App.css";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Logo from "../images/littleLemonLogo.png";

function Header()
{
    return(
        <header className="header">
            <Link to="/"><img className="logo" src={Logo} alt="Little Lemon Logo" /></Link>
            <Nav />
        </header>
    );
}

export default Header; 