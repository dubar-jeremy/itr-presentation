import { useEffect, useState } from 'react';
import { getAirlineById } from '../../../services/api';
import FetchAirlines from './FetchAirlines';

const NativeAirlines = () => {
  const [airlines, setAirlines] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPassengers = async () => {
      try {
        setLoader(true);
        const response = await getAirlineById(1987654321);
        setAirlines(response.data);
        setLoader(false);
      } catch (err) {
        setError(true);
      }
    };
    fetchPassengers();
  }, []);

  return (
    <div>
      {loader && <div>Loading</div>}
      {error && <div>Error</div>}
      {airlines && <FetchAirlines airlines={airlines} />}
    </div>
  );
};

export default NativeAirlines;
