import React from 'react';
import PetCard from './PetCard';

const PetsList = (props) => {
  console.log(props);
  const pets = props.pets.map((petObj) => {
    return  (
      <PetCard key={petObj._id} pet={petObj} />
    );
  });
  return pets;
}

export default PetsList;