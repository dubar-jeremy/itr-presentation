const Passenger = ({ passenger }) => {
  return (
    <>
      <p>ID: {passenger.data._id}</p>
      <p>Name: {passenger.data.name}</p>
      <p>Trips: {passenger.data.trips}</p>
      {passenger.data.airline.map((airline, index) => {
        return (
          <div key={index}>
            <p>Airline: {airline.name}</p>
            <p>website: {airline.website}</p>
          </div>
        );
      })}
    </>
  );
};

export default Passenger;
