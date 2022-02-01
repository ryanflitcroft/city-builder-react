import React from 'react';

export default function WaterfrontDropdown({ addSelectOption,
  setWaterfrontId }) {
  return (
    <>
      {addSelectOption('waterfront', 'Dock', 'Sunset', 'Boats', setWaterfrontId)}
    </>
  );
}
