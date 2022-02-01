import React from 'react';

export default function City({ skylineId,
  waterfrontId,
  castleId }) {

  return (
    <div>
      <img src={`skyline-${skylineId}.jpeg`} alt="skyline" />
      <img src={`waterfront-${waterfrontId}.jpeg`} alt="waterfront" />
      <img src={`castle-${castleId}.jpeg`} alt="castle" />
    </div>
  );
}
