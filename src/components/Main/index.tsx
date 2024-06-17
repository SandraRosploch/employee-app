import React from "react";
import "./index.scss";
import { t } from "i18next";
const Main = () => {
  return( 
    <div className="main-container">
    <div className="main-description">
      <h2>{t("app.main.title")}</h2>
      <p>{t("app.main.description")}</p>
    </div>
    <div className="main-img">
      {/* <img src="../../static/pictures/meeting.webp" alt="meeting" /> */}
      <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="meeting" />
    </div>
   
     
    
  </div>
  );
};

export default Main;
