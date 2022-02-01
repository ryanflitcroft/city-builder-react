import { useState } from 'react';

export default function SloganForm({ citySlogans, setCitySlogans }) {
  const [sloganInput, setSloganInput] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    setCitySlogans([...citySlogans, sloganInput]);
    setSloganInput('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='slogans'>Add a slogan to the list!</label>
        <input name='slogans' onChange={(e) => setSloganInput(e.target.value)} value={sloganInput} />
        <button>Submit</button>
      </form>
    </>
  );
}
