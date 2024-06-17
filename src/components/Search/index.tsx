// import { t } from "i18next";
// import React, { useState } from "react";

// type Employee = {
//   id: number;
//   name: string;
// };

// type SearchProps = {
//   employees: Employee[];
//   setFilteredData: (value: React.SetStateAction<Employee[]>) => void;
// };

// const Search: React.FC<SearchProps> = ({ employees, setFilteredData }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     setSearchTerm(value);

//     const filtered = employees.filter((employee) =>
//       employee.name.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder={t("app.search")}
//         value={searchTerm}
//         onChange={handleChange}
//       />
//     </div>
//   );
// };

// export default Search;

import React, { useState,useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { Employee } from "../../Context/hooks/useAppContext";
import { Link } from "react-router-dom";


// type SearchProps = {
//   employees: Employee[];
//   setFilteredData: (value: React.SetStateAction<Employee[]>) => void;
// };

const Search: React.FC = () => {
  const {employees,setEmployees}=useContext(AppContext)
    const [searchTerm, setSearchTerm] = useState("");

    const [filteredEmployees,setFilteredEmployees]=useState<Employee[]>([]); //funkcja przechowuje filtrowana liste pracownikow na podstaiwee szukanej frazy
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = employees.filter((employee) =>
      employee.firstName.toLowerCase().includes(value.toLowerCase())
    )as Employee[];//tutaj okreslam ze wynik jest tablica
    setFilteredEmployees(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      {filteredEmployees.length>0 && (
        <ul>
          {filteredEmployees.map((employee) => (
            <li key={employee.id}>
              <Link to={`/user-list/${employee.id}`}>{employee.firstName}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
