import React from 'react';
import CastleDropdown from './CastleDropdown';
import SkylineDropdown from './SkylineDropdown';
import WaterfrontDropdown from './WaterfrontDropdown';

export default function Dropdowns({ setSkylineId,
  setWaterfrontId,
  setCastleId }) {

  function addSelectOption(opt1, opt2, opt3, setId) {
    return (
      <select onChange={(e) => setId(e.target.value)}>
        <option value="1">{opt1}</option>
        <option value="2">{opt2}</option>
        <option value="3">{opt3}</option>
      </select>
    );
  }

  return (
    <section className='dropdowns'>
      <SkylineDropdown addSelectOption={addSelectOption}
        setSkylineId={setSkylineId} />
      <WaterfrontDropdown addSelectOption={addSelectOption}
        setWaterfrontId={setWaterfrontId} />
      <CastleDropdown addSelectOption={addSelectOption}
        setCastleId={setCastleId} />
    </section>
  );
}
