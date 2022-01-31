import React from 'react';

export default function CastleDropdown({ addSelectOption,
  setCastleId }) {
  return (
    <div>
    Select a Castle
      {addSelectOption('Serious', 'Mysterious', 'Regal', setCastleId)}
    </div>
  );
}
