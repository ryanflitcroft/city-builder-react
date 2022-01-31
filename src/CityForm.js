import React from 'react';
import CityNameInput from './CityNameInput';
import SkylineDropdown from './SkylineDropdown';
import WaterfrontDropdown from './WaterfrontDropdown';
import CastleDropdown from './CastleDropdown';
import SloganForm from './SloganForm';

export default function CityForm({ setCityName,
  setSkylineId,
  setWaterfrontId,
  setCastleId,
  citySlogans,
  setCitySlogans
}) {
  return (
    <>
      <CityNameInput setCityName={setCityName} />
      <section className='dropdowns'>
        <SkylineDropdown setSkylineId={setSkylineId} />
        <WaterfrontDropdown setWaterfrontId={setWaterfrontId} />
        <CastleDropdown setCastleId={setCastleId} />
      </section>
      <SloganForm citySlogans={citySlogans}
        setCitySlogans={setCitySlogans} />
    </>
  );
}
