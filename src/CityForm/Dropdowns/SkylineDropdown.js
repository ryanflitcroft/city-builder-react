import React from 'react';

export default function SkylineDropdown({ addSelectOption,
  setSkylineId }) {
  return (
    <>
      {addSelectOption('skyline', 'Pink', 'Busy', 'Foggy', setSkylineId)}
    </>
  );
}
