import BookingList from '../bookings/BookingList';
import dogLogo from '../../images/oscar.jpg';

const PetCard = (props) => {
  const deletePet = () => {
    fetch(`http://localhost:4000/api/v1/pets/${props.pet._id}`, {
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
          <p>Notes: {props.pet.notes}</p>
          <button
            className='bg-gray-500 border border-white rounded-md p-2 hover:bg-gray-800 bg-opacity-60'
            onClick={() => props.bookingsModalShow(true)}
          >
            Add Booking
          </button>
          <button
            className='btn-danger bg-red-600 hover:bg-red-900 text-white p-2 border rounded-md bg-opacity-60'
            onClick={() => deletePet()}
          >
            Delete Pet
          </button>
        </div>
        <div
          id='bookings-list'
          className='border-black border bg-gray-300 w-2/3 p-3'
        >
          <BookingList
            bookings={props.pet.bookings}
            updatePets={props.updatePets}
            pets={props.pet}
          />
        </div>
      </div>
    </>
  );
};

export default PetCard;
