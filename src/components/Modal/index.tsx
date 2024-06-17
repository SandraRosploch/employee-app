import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import './Modal.scss';
import ReactDOM from "react-dom";
import { AppContext } from '../../Context/AppContext';
import Button from '../Button/Button';
import { Employee } from '../../Context/hooks/useAppContext';
import { t } from 'i18next';

type ModalProps = {
  onClose: () => void;
} & Employee;

const Modal = ({
  onClose,
  id,
  firstName: initialFirstName,
  lastName: initialLastName,
  birthDate: initialBirthDate,
  phone: initialPhone,
  email: initialEmail,
  image: initialImage,
  address: initialAddress,
  maidenName,
  age,
  gender,
  username,
  password,
  bloodGroup,
  height,
  weight,
  hair,
  eyeColor,
  ip
}: ModalProps) => {
  const modalRoot = document.getElementById("modal-root");
  const { updateEmployees } = useContext(AppContext);

  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [birthDate, setBirthDate] = useState(initialBirthDate);
  const [phone, setPhone] = useState(initialPhone);
  const [email, setEmail] = useState(initialEmail);
  const [image, setImage] = useState(initialImage);
  const [address, setAddress] = useState(initialAddress.address);
  const [city, setCity] = useState(initialAddress.city);

  const [tempFirstName, setTempFirstName] = useState(initialFirstName);
  const [tempLastName, setTempLastName] = useState(initialLastName);
  const [tempBirthDate, setTempBirthDate] = useState(initialBirthDate);
  const [tempPhone, setTempPhone] = useState(initialPhone);
  const [tempEmail, setTempEmail] = useState(initialEmail);
  const [tempImage, setTempImage] = useState(initialImage);
  const [tempAddress, setTempAddress] = useState(initialAddress.address);
  const [tempCity, setTempCity] = useState(initialAddress.city);

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempFirstName(e.target.value);
  };

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempLastName(e.target.value);
  };

  const handleBirthDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempBirthDate(e.target.value);
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempAddress(e.target.value);
  };

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempCity(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempEmail(e.target.value);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempPhone(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempImage(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const updatedData = {
      id,
      firstName: tempFirstName,
      lastName: tempLastName,
      birthDate: tempBirthDate,
      phone: tempPhone,
      email: tempEmail,
      image: tempImage,
      address: {
        address: tempAddress,
        city: tempCity,
      },
      maidenName,
      age,
      gender,
      username,
      password,
      bloodGroup,
      height,
      weight,
      hair,
      eyeColor,
      ip,
    };

    updateEmployees(id, updatedData);

    setFirstName(tempFirstName);
    setLastName(tempLastName);
    setBirthDate(tempBirthDate);
    setPhone(tempPhone);
    setEmail(tempEmail);
    setImage(tempImage);
    setAddress(tempAddress);
    setCity(tempCity);

    onClose();
  }
  return modalRoot ? ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className='modal__title'><b>{t("app.full-name")} </b>{firstName} {lastName}</h2>
        <section className='modal__section'>
          <div className='modal__section-box'>
            <img src={image} alt={firstName} />
          </div>

          <div className="modal__section-box">

            <p><b>{t("app.user-name")}:</b> {username}</p>
            <p><b>{t("app.email")}:</b> {email}</p>
            <p><b>{t("app.phone")}:</b> {phone}</p>
            <p><b>{t("app.ip")}:</b> {ip}</p>
            <p><b>{t("app.password")}:</b> {password}</p>
          </div>

          <div className="modal__section-box">

            <p><b>{t("app.birth-date")}:</b> {birthDate}</p>
            <p><b>{t("app.age")}:</b> {age}</p>
            <p><b>{t("app.maiden-name")}:</b> {maidenName}</p>
            <p><b>{t("app.gender")}:</b> {gender}</p>
          </div>

          <div className="modal__section-box">

            <p><b> {t("app.blood-group")}:</b> {bloodGroup}</p>
            <p><b> {t("app.height")}:</b> {height}cm</p>
            <p><b> {t("app.weight")}:</b> {weight}kg</p>
            <p><b> {t("app.eye-color")}:</b> {eyeColor}</p>
          </div>

    

          <div className="edit-worker">
            <h2 className="edit-worler__title">Edytuj Pracownika</h2>
            <form className="edit-worker__form" onSubmit={handleSubmit}>


              <input type="text" value={tempFirstName} onChange={handleFirstNameChange} name="firstName" placeholder="Imię" />
              <input type="text" value={tempLastName} onChange={handleLastNameChange} name="lastName" placeholder="Nazwisko" />
              <input type="date" value={tempBirthDate} onChange={handleBirthDateChange} name="birthDate" placeholder="Data urodzenia" />
              <input type="text" value={tempAddress} onChange={handleAddressChange} name="address" placeholder="Ulica" />
              <input type="text" value={tempCity} onChange={handleCityChange} name="city" placeholder="Miejscowość" />
              <input type="email" value={tempEmail} onChange={handleEmailChange} name="email" placeholder="Email" />
              <input type="tel" value={tempPhone} onChange={handlePhoneChange} name="phone" placeholder="Numer telefonu" />
              <input type="url" value={tempImage} onChange={handleImageChange} name="image" placeholder="URL do zdjęcia" />
              <Button label='Edit' type='submit' />
            </form>
          </div>

          <Button label='Close' onClick={onClose} />

          <Button label={t("app.close")} onClick={onClose} />
        </section>
      </div>


    </div >,
    modalRoot
  ) : null;
};

export default Modal;
