import React from 'react';

export default function CastleDropdown({ addSelectOption,
  setCastleId }) {
  return (
    <>
      {addSelectOption('castle', 'Serious', 'Mysterious', 'Regal', setCastleId)}
    </>
  );
}
