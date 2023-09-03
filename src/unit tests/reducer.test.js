import { render, screen } from "@testing-library/react";
import { initializeTimes } from "../pages/BookingPage";
import { updateTimes } from "../pages/BookingPage";
import BookingForm from "../componants/BookingForm";
import { fetchAPI } from "../api";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);

    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes returns the expected array of times', () => {
  const today = new Date();
    const expectedTimes = fetchAPI(today);

    const result = initializeTimes(today);
    expect(result).toEqual(expectedTimes);
  });

  test('updateTimes returns the same value provided in the state', () => {
    const initialState = fetchAPI(new Date(2023, 9, 3));

    const result = updateTimes(new Date(2023, 9, 3));
    expect(result).toEqual(initialState);
  });