const BookingCard = (props) => {
  console.log('This is the booking card you cuck', props);
  return (
    <div>
      <h4>Booked for the following days of:</h4>
      <p>{props.booking.startDate} to {props.booking.endDate}</p>
    </div>
  );
}

export default BookingCard;