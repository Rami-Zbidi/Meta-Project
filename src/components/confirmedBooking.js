import "../App.css";
import { Link } from "react-router-dom";

export default function ConfirmedBooking()
{
    const randomNumber = Math.floor(Math.random() * (10000 - 1 + 1)) + 1000;

    return(
        <div className="confirm-card">
            <h2>Booking Confirmed</h2>
            <p>Your booking has been confirmed</p>
            <p>Your reservation code: {randomNumber}</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
}