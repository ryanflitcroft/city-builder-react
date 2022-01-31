import React from 'react';
import CityNameInput from './CityNameInput';
import SloganForm from './SloganForm';
import Dropdowns from './Dropdowns';

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
      <Dropdowns setSkylineId={setSkylineId}
        setWaterfrontId={setWaterfrontId}
        setCastleId={setCastleId} />
      <SloganForm citySlogans={citySlogans}
        setCitySlogans={setCitySlogans} />
    </>
  );
}
