import React from 'react';
import BookingCard from './BookingCard';

const BookingList = (props) => {
  const bookings = props.bookings.map((bookingObj) => {
    return (
      <BookingCard
        key={bookingObj._id}
        booking={bookingObj}
        updatePets={props.updatePets}
        pets={props.pet}
      />
    );
  });
  return bookings;
};

export default BookingList;
