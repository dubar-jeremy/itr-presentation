const FetchEmployees = (employees) => {
  return (
    <div>
      <table className='blueTable'>
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.employees.data.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FetchEmployees;
