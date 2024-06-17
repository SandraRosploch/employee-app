import { t } from "i18next";
import React from "react";
import "./index.scss";
const NotFound = () => {
  return (
    <div className="not-found">
      <h3>404</h3>
      <p>{t("app.not-found")}</p>
    </div>
  );
};

export default NotFound;
