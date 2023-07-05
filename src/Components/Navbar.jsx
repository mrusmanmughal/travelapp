import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <Logo />
      </div>
      <div>
        <ul className="flex">
          <li>
            <Link to="/product" className="link">
              Product
            </Link>
          </li>

          <li>
            <Link to="/pricing" className="link">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
