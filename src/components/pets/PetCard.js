const PetCard = (props) => {
  return (
    <>
      <div>
        <h1>{props.pet.name}</h1>
        <p>Breed: {props.pet.breed}</p>
        <p>Size: {props.pet.size}</p>
      </div>
    </>
  )
}

export default PetCard;