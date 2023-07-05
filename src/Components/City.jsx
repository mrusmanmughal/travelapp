import { ContextApi } from "../Context/CitiesProider";
import Cityitems from "./Cityitems";

const City = () => {
  const { Cities } = ContextApi();

  return (
    <div>
      {Cities?.map((val, i) => {
        return <Cityitems val={val} key={i} />;
      })}
    </div>
  );
};

export default City;
