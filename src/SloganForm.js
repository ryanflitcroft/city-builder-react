import { useState } from 'react';

export default function SloganForm({ citySlogans, setCitySlogans }) {
  const [sloganInput, setSloganInput] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    setCitySlogans([...citySlogans, sloganInput]);
    setSloganInput('');
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        Add a slogan to the list!
        <input onChange={(e) => setSloganInput(e.target.value)} value={sloganInput} />
        <button>Submit</button>
      </form>
    </section>
  );
}
