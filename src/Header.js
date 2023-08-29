import Nav from "./Nav";
import Logo from "./images/Logo.png";

function Header()
{
    return(
        <>
            <img src={Logo} alt="Little Lemon Logo"/>
            <Nav />
        </>
    );
}

export default Header;