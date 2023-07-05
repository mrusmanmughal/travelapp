import { createContext, useContext, useEffect, useState } from "react";

const context = createContext();

const Provider = ({ children }) => {
  //states
  const [Cities, setCities] = useState([]);
  const [city, setcity] = useState({});

  //API URL
  const api = "http://localhost:9100/cities";

  //get Citites
  const getdata = async () => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      setCities(data);
    } catch (error) {
      console.log("Error");
    }
  };
  //get single City Details
  const CityDetail = (id) => {
    fetch(`${api}/${id}`)
      .then((res) => res.json())
      .then((data) => setcity(data));
  };
  //useEffect
  useEffect(() => {
    getdata();
    CityDetail();
  }, []);
  return (
    <context.Provider value={{ Cities, CityDetail, city }}>
      {children}
    </context.Provider>
  );
};

const ContextApi = () => {
  const c = useContext(context);
  return c;
};

export { Provider, ContextApi };
