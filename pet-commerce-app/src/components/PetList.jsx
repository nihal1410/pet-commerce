// src/components/PetList.jsx

import React from 'react';

const PetList = () => {
  const pets = [
    { id: 1, name: 'Fido', breed: 'Labrador', price: '$500' },
    { id: 2, name: 'Whiskers', breed: 'Siamese Cat', price: '$300' },
    // Add more pet objects here
  ];

  return (
    <div>
      <h2>All Pets</h2>
      {pets.map((pet) => (
        <div key={pet.id}>
          <h3>{pet.name}</h3>
          <p>Breed: {pet.breed}</p>
          <p>Price: {pet.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PetList;
