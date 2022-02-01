import React from 'react';
import City from './City';
import SloganList from './SloganList';

export default function CityDisplay({ skylineId,
  waterfrontId,
  castleId,
  cityName,
  citySlogans }) {
  return (
    <section>
      <h1>
        Welcome to beautiful {cityName}!
      </h1>
      <City skylineId={skylineId}
        waterfrontId={waterfrontId}
        castleId={castleId} />
      <SloganList citySlogans={citySlogans} />       
    </section>
  );
}
