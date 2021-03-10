import { Link } from 'react-router-dom';

const BookingCard = (props) => {
  const deleteBooking = () => {
    fetch(`http://localhost:4000/api/v1/bookings/${props.booking._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => {
        props.updatePets();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='booking-card'>
      <h4 className='text-blue-100'>Booked for the following days of:</h4>
      <p className='text-blue-100'>
        {props.booking.startDate} to {props.booking.endDate}
      </p>
      <div className='flex flex-row justify-evenly w-1/2'>
        <button
          onClick={() => deleteBooking()}
          className='btn-danger bg-red-600 hover:bg-red-900 text-white p-2 border rounded-md'
        >
          Delete Booking
        </button>
        <Link to={`/editbooking/${props.booking._id}`}>
          <button className='bg-blue-700 text-white  hover:bg-blue-900 p-2 border rounded-md'>
            Edit Booking
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingCard;
