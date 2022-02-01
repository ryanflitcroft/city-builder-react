import React from 'react';

export default function CityNameInput({ setCityName }) {
  return (
    <>
      <label htmlFor='cityName'>What is your city name?</label>
      <input name='cityName' onChange={(e) => setCityName(e.target.value)} />
    </>
  );
}
