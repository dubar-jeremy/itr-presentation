import { useCreatePassenger } from '../../../hooks/queries.hooks';
import Passenger from './Passenger';

const CreatePassenger = () => {
  const { data: passenger, mutate, isSuccess, isError } = useCreatePassenger();

  const onCreatePassenger = () => {
    let fakeData = {
      name: 'John',
      trips: 250,
      airline: 5,
    };
    mutate(fakeData);
  };

  return (
    <>
      <button onClick={onCreatePassenger}>Create passenger</button>
      {isSuccess && <Passenger passenger={passenger} />}
      {isError && <p>Erreur</p>}
    </>
  );
};

export default CreatePassenger;
