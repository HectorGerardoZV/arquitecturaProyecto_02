import useAuth from "../../hooks/useAuth";
import useSensors from "../../hooks/useSensors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseModal from "../../img/closeModal.svg";

import "./NewSensorPage.css";
const NewSensorPage = () => {
  let navigate = useNavigate();
  const { checkAuth } = useAuth();
  const { queryAddNewSensor } = useSensors();
  const [brand, setBrand] = useState("");

  const handleOnChangeBrand = (e) => {
    setBrand(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const newBrand = {
      brand,
    };
    const added = await queryAddNewSensor(newBrand);
    if (added) {
      navigate("/admin");
    }
  };
  const navigateTo = () => {
    navigate("/admin");
  };

  useEffect(() => {
    if (!checkAuth()) {
      navigate("/");
    }
  }, []);

  return (
    <div className="container newSensorPage">
      <div className="informationSection">
        <div></div>
        <h1 className="titleSection">Agregando Sensor</h1>
        <div></div>
      </div>

      <div className="newSensorFormArea">
        <form className="newSensorForm" onSubmit={handleOnSubmit}>
          <fieldset>
            <div className="closeModal">
              <img src={CloseModal} alt="close modal" onClick={navigateTo} />
            </div>
            <div className="inputForm">
              <label htmlFor="">Marca</label>
              <input
                type="text"
                name="brand"
                defaultValue={brand}
                onChange={handleOnChangeBrand}
              />
            </div>

            <div className="inputSubmitArea">
              <input
                className="inputSubmit"
                type="submit"
                value={"Agregar Sensor"}
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default NewSensorPage;
