import "./App.css";
import Logo from "./images/littleLemonLogo.png";

function Footer()
{
    return(
        <footer className="footer">
            <img src={Logo} alt="Little Lemon Logo" style={{width: "70%", height: "auto"}} />
            <div>
                <h2>Doormat Navigation</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>

            <div>
                <h2>Contact</h2>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>

            <div>
                <h2>Social Media Links</h2>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;