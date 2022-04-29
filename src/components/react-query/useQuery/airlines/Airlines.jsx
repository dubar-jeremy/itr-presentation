import FetchAirlines from './FetchAirlines';
import { useGetAirlineById } from '../../../../hooks/queries.hooks';

const Airlines = () => {
  const {
    data: airlines,
    isSuccess,
    isError,
    isLoading,
  } = useGetAirlineById("1");

  return (
    <>
      {isError && <div>Error</div>}
      {isLoading && <div>Loading</div>}
      {isSuccess && <FetchAirlines airlines={airlines} />}
    </>
  );
};

export default Airlines;
