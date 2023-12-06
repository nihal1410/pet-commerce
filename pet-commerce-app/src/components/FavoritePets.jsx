// src/components/FavoritePets.jsx

import React from 'react';

const FavoritePets = () => {
  const favoritePets = [
    { id: 1, name: 'Whiskers', breed: 'Siamese Cat', price: '$300' },
    // Add more favorite pet objects here
  ];

  return (
    <div>
      <h2>Favorite Pets</h2>
      {favoritePets.map((pet) => (
        <div key={pet.id}>
          <h3>{pet.name}</h3>
          <p>Breed: {pet.breed}</p>
          <p>Price: {pet.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritePets;
