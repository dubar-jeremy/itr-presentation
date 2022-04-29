const FetchAirlines = ({ airlines }) => {
  return (
    <ul>
      <li>name: {airlines.data.name}</li>
      <li>country: {airlines.data.country}</li>
    </ul>
  );
};

export default FetchAirlines;
