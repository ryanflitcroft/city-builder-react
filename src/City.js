import React from 'react';

export default function City({ skylineId,
  waterfrontId,
  castleId }) {

  return (
    <div className="city">
      {/* this component should take 3 props: waterfrontId, skylineId, and castleId */}
      {/* use these 3 ids in img tags load appropriate images that live in the public directory */}
      <img src={`skyline-${skylineId}.jpeg`} alt="" />
      <img src={`waterfront-${waterfrontId}.jpeg`} alt="" />
      <img src={`castle-${castleId}.jpeg`} alt="" />
    </div>
  );
}
