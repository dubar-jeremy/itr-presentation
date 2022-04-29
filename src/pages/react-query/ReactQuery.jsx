import { useState } from 'react';
import Employees from '../../components/react-query/refetchOnWindowFocus/Employees';
import Passenger from '../../components/react-query/invalidateQuery/Passenger';
import UpdatePassenger from '../../components/react-query/invalidateQuery/UpdatePassenger';
import CreatePassenger from '../../components/react-query/useMutation/CreatePassenger';
import Airlines from '../../components/react-query/useQuery/airlines/Airlines';
import Passengers from '../../components/react-query/useQuery/passengers/Passengers';

const ReactQuery = () => {
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
    <div style={{ width: '50%', margin: '0 auto' }}>
      <h1>Use query</h1>
      <button onClick={togglePassengers}>passengers</button>
      <button onClick={toggleAirlines}>airlines</button>
      {displayPassenger && <Passengers />}
      {displayAirlines && <Airlines />}
      <h1>Use Mutation</h1>
      <CreatePassenger />
      <h1>Invalidate query</h1>
      <Passenger />
      <UpdatePassenger />
      <Employees />
    </div>
  );
};

export default ReactQuery;
