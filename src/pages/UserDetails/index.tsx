import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import './index.scss';
import { t } from "i18next";

const UserDetails = () => {

  const handleClick = () => {
    console.log("clicked");
  }
  return (
    <section>
      <Card className=''>
        <h2>{t("app.user-details")}</h2>
        <p>{t("app.first-name")} {t("app.last-name")}</p>
        <p>{t( "app.profession")}</p>
        <Button label={t("app.see-more")} onClick={handleClick} className="button-view" />
      </Card>
    </section>
  );
};

export default UserDetails;
