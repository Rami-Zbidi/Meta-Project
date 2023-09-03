import "../App.css";
import { Link } from "react-router-dom";

export default function ConfirmedBooking()
{
    return(
        <div className="confirm-card">
            <h2>Booking Confirmed</h2>
            <p>Your booking has been confirmed</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
}