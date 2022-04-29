const FetchAirlines = ({ airlines }) => {
  return (
    <ul>
      <li>name: {airlines.name}</li>
      <li>country: {airlines.country}</li>
    </ul>
  );
};

export default FetchAirlines;
