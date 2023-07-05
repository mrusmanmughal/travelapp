import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import LayoutApp from "./Pages/LayoutApp";
import Countries from "./Components/Countries";
import City from "./Components/City";
import Form from "./Components/Form";
import CityDetails from "./Components/CityDetails";
import { Provider } from "./Context/CitiesProider";
const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          {/* Nested Routing  */}
          <Route path="app" element={<LayoutApp />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<City />} />
            <Route path="cities/:id" element={<CityDetails />} />

            <Route path="countries" element={<Countries />} />
            <Route path="form" element={<Form />} />
          </Route>
          {/* Nested Routing  Ends */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
