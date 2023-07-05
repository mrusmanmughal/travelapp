import { useState } from "react";
import { Link } from "react-router-dom";

const Applinks = () => {
  const [active, setactive] = useState(0);
  return (
    <div className="Applinks">
      <Link to="cities" className="link">
        <div
          className={`  ${active === 0 ? "activeli" : "li"}`}
          onClick={() => setactive(0)}
        >
          Cities
        </div>
      </Link>
      <Link to="countries" className="link">
        <div
          className={`${active === 1 ? "activeli" : "li"}`}
          onClick={() => setactive(1)}
        >
          Countries
        </div>
      </Link>
    </div>
  );
};

export default Applinks;
