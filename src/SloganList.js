import React from 'react';
import Slogan from './Slogan';

export default function SloganList({ citySlogans }) {
  return (
    <section>
      <h2>Your slogans:</h2>
      {citySlogans.map((slogan, i) =>
        <Slogan key={`${slogan}-${i}`} slogan={slogan} />
      )}
    </section>
  );
}
