import { useState, useEffect } from 'react';

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  birthDate: string;
  address: {
    address: string;
    city: string;
  };
  email: string;
  image: string;
  maidenName?: string;
  age?: number;
  gender?: string;
  username?: string;
  password?: string;
  bloodGroup?: string;
  height?: string;
  weight?: string;
  eyeColor?: string;
  hair?: {
    color: string;
    type: string;
  };
  ip?: string;
};

export const useAppContext = () => {
  const [fetchedEmployees, setFetchedEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEmployees = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/users");

      if (!res.ok) throw new Error("Cannot fetch employee");

      const { users } = await res.json();

      if (users) setFetchedEmployees(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateEmployees = async (id: number, updatedData: Employee) => {
    try {
      const res = await fetch(`https://dummyjson.com/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      });
      
      if (!res.ok) throw new Error("Cannot update employee");

      const updatedEmployee = await res.json();

      setFetchedEmployees((prev) => (
        prev.map((employee) => (
          employee.id === id ? { ...employee, ...updatedEmployee } : employee
        ))
      ));

    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);


  const deleteEmployee = async (id: number) => {
    try {
      const res = await fetch(`https://dummyjson.com/users/${id}`, {
        method: 'DELETE'
      });

      if (!res.ok) throw new Error("Cannot delete employee");

      setFetchedEmployees(prevEmployees =>
        prevEmployees.filter(employee => employee.id !== id)
      );

    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return {
    isLoading,
    fetchedEmployees,
    updateEmployees,
    deleteEmployee,
  };
};

export default useAppContext;
