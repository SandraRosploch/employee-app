import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import { Employee } from '../../Context/hooks/useAppContext';
import './AddNewWorker.scss';
import { t } from 'i18next';
const AddNewWorker: React.FC = () => {
  const { employees, setEmployees } = useContext(AppContext);
  const [employee, setEmployee] = useState<Employee>({
    id: employees.length + 1,
    firstName: '',
    lastName: '',
    phone: '',
    birthDate: '',
    address: {
      address: '',
      city: '',
    },
    email: '',
    image: '',
    maidenName: '',
    age: 0,
    gender: '',
    username: '',
    password: '',
    bloodGroup: '',
    height: '',
    weight: '',
    eyeColor: '',
    hair: {
      color: '',
      type: '',
    },
    ip: '',
  });
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'address' || name === 'city') {
      setEmployee(prevState => ({
        ...prevState,
        address: {
          ...prevState.address,
          [name]: value,
        },
      }));
    } else {
      setEmployee(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmployees([...employees, employee]);
    navigate('/user-list');
  };
  return (
    <div className="add-worker">
      <h2 className="add-worker__title">{t("app.new-employee")}</h2>
      <form className="add-worker__form" onSubmit={handleSubmit}>
        <input type="text" name="firstName" value={employee.firstName} onChange={handleChange} placeholder={t("app.first-name")} required />
        <input type="text" name="lastName" value={employee.lastName} onChange={handleChange} placeholder={t("app.last-name")} required />
        <input type="date" name="birthDate" value={employee.birthDate} onChange={handleChange} placeholder={t("app.birth-date")} required />
        <input type="text" name="address" value={employee.address.address} onChange={handleChange} placeholder={t("app.street")} required />
        <input type="text" name="city" value={employee.address.city} onChange={handleChange} placeholder={t("app.city")} required />
        <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder={t("app.email")} required />
        <input type="tel" name="phone" value={employee.phone} onChange={handleChange} placeholder={t("app.phone")} required />
        <input type="url" name="image" value={employee.image} onChange={handleChange} placeholder={t("app.url-address")} required />
        <button type="submit">{t("app.add")}</button>
      </form>
    </div>
  );
};
export default AddNewWorker;