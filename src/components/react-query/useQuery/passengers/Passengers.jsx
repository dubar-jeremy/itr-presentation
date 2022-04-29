import { useGetPassengers } from '../../../../hooks/queries.hooks';
import FetchPassengers from './FetchPassengers';

const Passengers = () => {
  const {
    data: passengers,
    isSuccess,
    isError,
    isLoading,
  } = useGetPassengers();

  return (
    <>
      {isError && <div>Error</div>}
      {isLoading && <div>Loading</div>}
      {isSuccess && <FetchPassengers passengers={passengers} />}
    </>
  );
};

export default Passengers;
