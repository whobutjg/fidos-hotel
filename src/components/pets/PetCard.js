import BookingList from '../bookings/BookingList';
import dogLogo from '../../images/oscar.jpg';
const PetCard = (props) => {
  return (
    <>
      <div className='pet-card'>
        <div>
          <img
            src={dogLogo}
            alt='dogonbed'
            className='w-40 h-40 border rounded-full border-black'
          />
          <h3 className='text-2xl'>{props.pet.name}</h3>
          <p>{props.pet.breed}</p>
          <p>Size: {props.pet.size}</p>
          <button
            className='bg-blue-500 border border-white rounded-md p-2'
            onClick={() => props.bookingsModalShow(true)}
          >
            Add Booking
          </button>
        </div>
        <div
          id='bookings-list'
          className='border-black border bg-gray-300 w-2/3 p-3'
        >
          <BookingList
            bookings={props.pet.bookings}
            updatePets={props.updatePets}
          />
        </div>
      </div>
    </>
  );
};

export default PetCard;
