import { useState } from "react";

export default function BookingForm({availableTimes, dispatch, submitForm}) {

  const currentDate = new Date().toISOString().split("T")[0];

    const [formData, setFormData] = useState({
        date: currentDate,
        time: "00:00",
        noOfGuests: 1,
        occasion: "Birthday"
    })

    const handleFormChange = (event) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
    }

    const handleDateChange = async (event) => {
      const { name, value } = event.target
      
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
     dispatch({ type: 'UPDATE_TIMES', payload: value })
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      submitForm(formData)
    }


    let options;

    if (availableTimes && availableTimes.length > 0) {
      options = availableTimes.map(time => <option key={time}>{time}</option>);
    } else {
      options = [];
    }

    return (
      <div className="bookingForm">

        <form style={{ display: 'grid', maxWidth: 200, gap: 20 }} onSubmit={handleSubmit}>

          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" name="date" value={formData.date} onChange={handleDateChange} required min={currentDate}/>
            
          <label htmlFor="time">Choose time</label>
          <select id="res-time " name="time" value={formData.time} required onChange={handleFormChange}>
            {options}
          </select>
            
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" required id="guests" name="noOfGuests" value={formData.noOfGuests} onChange={handleFormChange}/>
            
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" name="occasion" required value={formData.occasion} onChange={handleFormChange}>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
            
          <input className="submit" type="submit" value="Reserve" aria-label="On Click submit"/>
          
        </form>

      </div>
    )
  }
  

  
