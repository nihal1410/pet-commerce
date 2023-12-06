// src/components/PetProfile.jsx

import React from 'react';

const PetProfile = () => {
  const pet = {
    name: 'Fido',
    breed: 'Labrador',
    price: '$500',
    description: 'Friendly and playful Labrador looking for a loving home.',
    // Add more pet details here
  };

  return (
    <div>
      <h2>{pet.name}</h2>
      <p>Breed: {pet.breed}</p>
      <p>Price: {pet.price}</p>
      <p>Description: {pet.description}</p>
    </div>
  );
};

export default PetProfile;
