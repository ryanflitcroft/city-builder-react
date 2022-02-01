import React from 'react';

export default function WaterfrontDropdown({ addSelectOption,
  setWaterfrontId }) {
  return (
    <div>
    Select a Waterfront
      {addSelectOption('Dock', 'Sunset', 'Boats', setWaterfrontId)}
    </div>
  );
}
