import { useState } from 'react';
import './App.css';
import SloganList from './CityDisplay/SloganList';
import CityDisplay from './CityDisplay/CityDisplay';
import CityForm from './CityForm/CityForm';

function App() {

  const [skylineId, setSkylineId] = useState(1);
  const [waterfrontId, setWaterfrontId] = useState(1);
  const [castleId, setCastleId] = useState(1);
  const [cityName, setCityName] = useState('Portland');
  const [citySlogans, setCitySlogans] = useState([]);

  return (
    <div className="App">
      <CityDisplay skylineId={skylineId}
        waterfrontId={waterfrontId}
        castleId={castleId} 
        cityName={cityName} />
      <div className='bottom'>
        <CityForm setCityName={setCityName} 
          setSkylineId={setSkylineId}
          setWaterfrontId={setWaterfrontId}
          setCastleId={setCastleId}
          citySlogans={citySlogans}
          setCitySlogans={setCitySlogans} />
        <SloganList citySlogans={citySlogans} />
      </div>
    </div>
  );
}

export default App;