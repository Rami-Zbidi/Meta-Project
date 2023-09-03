import { useState, useReducer } from "react"
import BookingForm from "../components/BookingForm"
import { fetchAPI, submitAPI } from "../api"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import bookingImg from "../images/restaurant.jpg";

export function initializeTimes(date) {
  return fetchAPI(date)
  }

export function updateTimes(date) {
  const dateObj = new Date(date)
  return fetchAPI(dateObj)
}

export default function BookingPage() {
  const [date, setDate] = useState(new Date())
 


  const navigate = useNavigate();

  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed");
    }
  }
  
  function reducer(state, action) {
    let newState
    switch (action.type) {
      case 'UPDATE_TIMES':
      const newDate = new Date(action.payload);
      newState = updateTimes(newDate)
      break;

      default:
        throw new Error()
    }
    return newState
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date))
    return (
        <div className="bookingPage">
            <article className="hero">
                <div className="callToAction">
                    <div className="description">
                        <h1 className="h1Yellow">Book a table</h1>
                        <h3 className="h3white">Little Lemon Chicago</h3>
                        <p>Come visit Little Lemon Chicago for a unique experience, once through the eye and once through the mouth.</p>
                    </div>
                    <Link className="button" to="/">Go Back to Home</Link>

                </div>
                <img className="heroImg" src={bookingImg} alt="Showing the seats at the Little Lemon restaurant."/>
            </article>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        </div>
    )
  }
  

  
