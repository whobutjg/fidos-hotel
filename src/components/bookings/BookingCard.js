import { Link } from 'react-router-dom';
import { EmailShareButton, EmailIcon } from 'react-share';

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
          className='btn-danger bg-red-600 hover:bg-red-900 text-white p-2 border rounded-md bg-opacity-60'
        >
          Delete Booking
        </button>
        <Link to={`/editbooking/${props.booking._id}`}>
          <button className='bg-gray-500 border border-white rounded-md p-2 hover:bg-gray-800 bg-opacity-60'>
            Edit Booking
          </button>
        </Link>
        <EmailShareButton
          subject={'Booking Appointment!'}
          body={`Oscar is booked for the following days of ${props.booking.startDate} to ${props.booking.endDate}`}
        >
          <EmailIcon />
        </EmailShareButton>
      </div>
    </div>
  );
};

export default BookingCard;
