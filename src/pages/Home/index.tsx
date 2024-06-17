import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import "./index.scss";
import EmployeeList from "../../components/EmployeeList/EmployeeList";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Main from "../../components/Main";
import Nav from "../../components/Nav";

const Home = () => {
  const { employees } = useContext(AppContext);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Main />
      <div className="carousel-container">
        <Carousel responsive={responsive}>
          {employees.map((employee) => (
            <Card className="carousel" key={employee.id}>
              <h3>
                {employee.firstName} {employee.lastName}
              </h3>
              <img src={employee.image} alt={employee.firstName} />
            </Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
