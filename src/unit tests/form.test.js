import React from 'react';
import { render } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

describe('BookingForm', () => {
  it('should render a date input field with the required attribute', () => {
    const { getByLabelText } = render(<BookingForm />);
    const dateInput = getByLabelText('Choose date');

    expect(dateInput).toHaveAttribute('required');
  });

  it('should render a time selection field with the required attribute', () => {
    const { getByLabelText } = render(<BookingForm />);
    const timeInput = getByLabelText('Choose time');

    expect(timeInput).toHaveAttribute('required');
  });

  it('should render a number input field with the min attribute', () => {
    const { getByLabelText } = render(<BookingForm />);
    const numberInput = getByLabelText('Number of guests');

    expect(numberInput).toHaveAttribute('min');
  });

  it('should render an occasion selection input field with the required attribute', () => {
    const { getByLabelText } = render(<BookingForm />);
    const occasionInput = getByLabelText('Occasion');

    expect(occasionInput).toHaveAttribute('required');
  });
});
