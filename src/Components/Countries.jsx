import { ContextApi } from "../Context/CitiesProider";

const Countries = () => {
  const { Cities } = ContextApi();

  return (
    <div style={{ padding: "2rem" }}>
      {Cities.map((val, i) => {
        return (
          <p
            key={i}
            style={{ padding: "5px", background: "black", margin: "5px" }}
          >
            {i + 1}. {val.country}
          </p>
        );
      })}
    </div>
  );
};

export default Countries;
