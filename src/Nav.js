import "./App.css";
import { Link } from "react-router-dom";

function Nav()
{
    return(
        <nav>
            <ul className="navBar">
                <li><Link to="/">Home</Link></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><Link to="/reservation">Reservations</Link></li>
                <li><a href="#">Order online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;