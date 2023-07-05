import { useParams } from "react-router-dom";
import { ContextApi } from "../Context/CitiesProider";
import { useEffect } from "react";
import BackBtn from "./BackBtn";

const CityDetails = () => {
  const { CityDetail, city } = ContextApi();
  const { id } = useParams();

  useEffect(() => {
    CityDetail(id);
  }, [id]);
  return (
    <div>
      <div className="city_Detail">
        <p>City Name : {city.cityName}</p>
        <p>Country : {city.country}</p>
        <p>Date : {city.date}</p>
        <BackBtn />
      </div>
    </div>
  );
};

export default CityDetails;
