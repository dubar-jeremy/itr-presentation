const FetchPassengers = ({ passengers }) => {
  return passengers.map((passenger, index) => {
    return (
      <div key={index}>
        <p>{passenger.name}</p>
      </div>
    );
  });
};

export default FetchPassengers;
