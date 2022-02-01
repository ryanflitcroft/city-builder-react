import React from 'react';
import City from './City';

export default function CityDisplay({ skylineId, waterfrontId, castleId, cityName }) {
  return (
    <>
      <City skylineId={skylineId}
        waterfrontId={waterfrontId}
        castleId={castleId} />
      <h1>
        Welcome to beautiful {cityName}!
      </h1>
    </>
  );
}
