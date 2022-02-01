import React from 'react';
import CityNameInput from '../CityForm/CityNameInput';
import SloganForm from '../CityForm/SloganForm';
import Dropdowns from '../CityForm/Dropdowns/Dropdowns';

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
