import React from 'react';
import BookingCard from './BookingCard';

const BookingList = (props) => {
  console.log("This is for the booking list - ", props);
  const bookings = props.bookings.map((bookingObj) => {
    return (
      <BookingCard key={bookingObj._id} booking={bookingObj} />
    );
  });
  return bookings;
}

export default BookingList;