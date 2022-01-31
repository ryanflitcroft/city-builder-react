import React from 'react';

export default function City({ skylineId,
  waterfrontId,
  castleId }) {

  return (
    <div className="city">
      <img src={`skyline-${skylineId}.jpeg`} alt="" />
      <img src={`waterfront-${waterfrontId}.jpeg`} alt="" />
      <img src={`castle-${castleId}.jpeg`} alt="" />
    </div>
  );
}
