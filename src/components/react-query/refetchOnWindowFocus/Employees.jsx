import { useGetEmployees } from '../../../hooks/queries.hooks';
import FetchEmployees from './FetchEmployees';

const Employees = () => {
  const { data: employees, isSuccess } = useGetEmployees();

  return (
    <div>
      <h1>Window Focus Refetching</h1>
      {isSuccess && <FetchEmployees employees={employees} />}
    </div>
  );
};

export default Employees;
