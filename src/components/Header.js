import "../App.css";
import Nav from "./Nav";
import Logo from "../images/littleLemonLogo.png";

function Header()
{
    return(
        <header className="header">
            <img className="logo" src={Logo} alt="Little Lemon Logo" />
            <Nav />
        </header>
    );
}

export default Header; 