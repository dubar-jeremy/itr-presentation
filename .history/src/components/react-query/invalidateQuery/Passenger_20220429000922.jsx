import { useGetPassengerById } from '../../../hooks/queries.hooks';

const Passenger = () => {
  const { data: passenger, isSuccess, isFetching } = useGetPassengerById(
    '62697712534676e1c97b2e68',
  );

  return (
    <div>
      <h5>Get passenger by id</h5>
      {isFetching && <div>Loading</div>}
      {isSuccess && (
        <div>
          <p>Id: {passenger.data._id}</p>
          <p>Name: {passenger.data.name}</p>
          <p>Trips: {passenger.data.trips}</p>
        </div>
      )}
    </div>
  );
};

export default Passenger;
