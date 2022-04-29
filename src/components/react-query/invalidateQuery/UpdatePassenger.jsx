import { useState } from 'react';
import { useUpdatePassenger } from '../../../hooks/queries.hooks';

const UpdatePassenger = () => {
  const [name, setName] = useState('');
  const { mutate } = useUpdatePassenger('62697712534676e1c97b2e68');

  const onClick = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      trips: 500,
      airline: 8,
    };

    mutate(data);
  };

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='name'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button type='submit' onClick={onClick}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdatePassenger;
