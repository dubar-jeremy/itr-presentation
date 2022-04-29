import { useEffect, useState } from 'react';
import { getPassengers } from '../../../services/api';
import FetchPassengers from './FetchPassengers';

const NativePassengers = () => {
  const [passengers, setPassengers] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPassengers = async () => {
      try {
        setLoader(true);
        const response = await getPassengers();
        setPassengers(response.data.data);
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
      {passengers && <FetchPassengers passengers={passengers} />}
    </div>
  );
};

export default NativePassengers;
