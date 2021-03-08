import { Link } from 'react-router-dom';

const BookingCard = (props) => {
  const deleteBooking = () => {
    fetch(`http://localhost:4000/api/v1/bookings/${props.booking._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then(() => {
      props.updatePets()
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="post-card bg-blue-100 border-black border-2 p-2 m-1.5 flex flex-col">
      <h4>Booked for the following days of:</h4>
      <p>{props.booking.startDate} to {props.booking.endDate}</p>
      <div>
        <button onClick={() => deleteBooking()}className="btn-danger bg-red-600 hover:bg-red-900 text-white">Delete Booking</button>
      </div>
      <Link to={`/editbooking/${props.booking._id}`}><button className='bg-blue-700 text-white border rounded hover:bg-blue-900'>Edit Booking</button></Link>
    </div>
  );
}

export default BookingCard;