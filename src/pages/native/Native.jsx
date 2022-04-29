import { useState } from 'react';
import NativeAirlines from '../../components/native/airlines/Airlines';
import NativePassengers from '../../components/native/passengers/Passengers';

const Native = () => {
  const [displayPassenger, setDisplayPassenger] = useState(false);
  const [displayAirlines, setDisplayAirlines] = useState(false);

  const togglePassengers = () => {
    if (displayAirlines) {
      setDisplayAirlines(false);
    }
    setDisplayPassenger(true);
  };

  const toggleAirlines = () => {
    if (displayPassenger) {
      setDisplayPassenger(false);
    }
    setDisplayAirlines(true);
  };

  return (
    <div style={{ width: '50%', margin: '15 auto' }}>
      <button
        style={{ height: '2em', marginRight: '2em' }}
        onClick={togglePassengers}
      >
        passengers
      </button>
      <button
        style={{ height: '2em', marginRight: '2em' }}
        onClick={toggleAirlines}
      >
        airlines
      </button>
      {displayPassenger && <NativePassengers />}
      {displayAirlines && <NativeAirlines />}
    </div>
  );
};

export default Native;
