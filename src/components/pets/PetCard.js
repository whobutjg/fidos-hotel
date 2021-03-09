import BookingList from '../bookings/BookingList';
const PetCard = (props) => {
  return (
    <>
      <div className="post-card bg-gray-300 border-black border-2 p-2 m-1.5 flex flex-col">
        <h1>{props.pet.name}</h1>
        <p>Breed: {props.pet.breed}</p>
        <p>Size: {props.pet.size}</p>
        <button onClick={() => props.bookingsModalShow(true)}>Add Booking</button>
      </div>
      <div>
        <BookingList bookings={props.pet.bookings} updatePets={props.updatePets}/>
      </div>
    </>
  );
};

export default PetCard;
