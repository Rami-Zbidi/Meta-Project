import React from 'react';
import { render } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

describe('BookingForm', () => {
  it('should render a date input field with the required attribute', () => {
    const { getByLabelText } = render(<BookingForm />);
    const dateInput = getByLabelText('Choose date');

    expect(dateInput).toHaveAttribute('required');
  });

  // Add similar tests for other input fields and their respective attributes
});
