import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import AddNewWorker from "./pages/AddNewWorker";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import Main from "./components/Main";

export enum Locale {
  EN = "en",
  PL = "pl",
}

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === Locale.PL ? Locale.EN : Locale.PL);
  };
  return (

    <div className="App">
    <div className="app">
      <div className="sidebar">
      <Nav />
      <button className="language-btn button  button--content button--large btn"onClick={changeLanguage}>
        <span>{i18n.language}</span>
      </button>
      </div>
      <div className="content">
      
        
      <Routes>  
        <Route path="/" element={<Home />} />
        {/* <Route path="/user-form" element={<UserForm />} /> */}
        <Route path="/user-list" element={<UserList />} />
        <Route path="/user-list/:userID" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/add-new-worker" element={<AddNewWorker />} />
      </Routes>
      <Footer />
      </div>
    </div>
    </div>
  );
}

export default App;
