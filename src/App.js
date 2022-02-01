import { useState } from 'react';
import './App.css';
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
        cityName={cityName}
        citySlogans={citySlogans} />
      <CityForm setCityName={setCityName} 
        setSkylineId={setSkylineId}
        setWaterfrontId={setWaterfrontId}
        setCastleId={setCastleId}
        citySlogans={citySlogans}
        setCitySlogans={setCitySlogans} />
    </div>
  );
}

export default App;