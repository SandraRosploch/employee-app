import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const EmployeeList = () => {
  const { employees } = useContext(AppContext);

  return (
    <div>
      <ul>
        {employees.map(({ id, firstName, lastName }) => (
          <li key={id}>
            {firstName} {lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
