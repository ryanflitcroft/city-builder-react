import React from 'react';

export default function SkylineDropdown({ addSelectOption,
  setSkylineId }) {
  return (
    <div>
    Select a Skyline
      {addSelectOption('Pink', 'Busy', 'Foggy', setSkylineId)}
    </div>
  );
}
