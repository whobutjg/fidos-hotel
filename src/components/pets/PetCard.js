import BookingList from '../bookings/BookingList';
const PetCard = (props) => {
  console.log('This is the pet card - ', props);
  return (
    <>
      <div className='border-gray-900'>
        <h1>{props.pet.name}</h1>
        <p>Breed: {props.pet.breed}</p>
        <p>Size: {props.pet.size}</p>
      </div>
      <div>
        <BookingList bookings={props.pet.bookings} />
      </div>
    </>
  );
};

export default PetCard;
