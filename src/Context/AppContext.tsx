import React, { createContext, useState, useEffect } from 'react';
import useFetchEmployees, { Employee } from "./hooks/useAppContext";
type EmployeeContextType = {
  employees: Employee[];
  isLoading: boolean;
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  updateEmployees: (id: number, updateData: Employee) => void;
  deleteEmployee: (id: number) => void;
};
export const AppContext = createContext<EmployeeContextType>(
  {} as EmployeeContextType
);
type Props = {
  children: JSX.Element | JSX.Element[];
};
export const AppContextProvider = ({ children }: Props) => {
  const { fetchedEmployees, isLoading, updateEmployees, deleteEmployee } = useFetchEmployees();
  const [employees, setEmployees] = useState<Employee[]>([]);
  useEffect(() => {
    if (fetchedEmployees.length > 0) {
      setEmployees(fetchedEmployees);
    }
  }, [fetchedEmployees]);
  return (
    <AppContext.Provider value={{ employees, isLoading, setEmployees, updateEmployees, deleteEmployee }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;