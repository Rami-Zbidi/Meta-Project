import "../App.css";
import { Link } from "react-router-dom";

function Nav()
{
    return(
        <nav>
            <ul className="navBar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/construction">About</Link></li>
                <li><Link to="/construction">Menu</Link></li>
                <li><Link to="/reservation">Reservations</Link></li>
                <li><Link to="/construction">Order online</Link></li>
                <li><Link to="/construction">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;