import { useState } from 'react';
import './App.css';
import SkylineDropdown from './SkylineDropdown';
import WaterfrontDropdown from './WaterfrontDropdown';
import CastleDropdown from './CastleDropdown';
import SloganList from './SloganList';
import SloganForm from './SloganForm';
import CityNameInput from './CityNameInput';
import City from './City';

function App() {

  const [skylineId, setSkylineId] = useState(1);
  const [waterfrontId, setWaterfrontId] = useState(1);
  const [castleId, setCastleId] = useState(1);
  const [cityName, setCityName] = useState('Portland');
  const [citySlogans, setCitySlogans] = useState([]);

  return (
    <div className="App">

      <City skylineId={skylineId}
        waterfrontId={waterfrontId}
        castleId={castleId} />
      <h1>
        Welcome to beautiful {cityName}!
      </h1>
      <div className='bottom'>
        <CityNameInput setCityName={setCityName} />
        <section className='dropdowns'>
          <SkylineDropdown setSkylineId={setSkylineId} />
          <WaterfrontDropdown setWaterfrontId={setWaterfrontId} />
          <CastleDropdown setCastleId={setCastleId} />
        </section>
        <SloganForm citySlogans={citySlogans}
          setCitySlogans={setCitySlogans} />
        <SloganList citySlogans={citySlogans} />
      </div>
    </div>
  );
}

export default App;