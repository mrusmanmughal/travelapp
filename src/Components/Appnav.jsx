import Applinks from "./Applinks";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";

const Appnav = () => {
  return (
    <div>
      <div>
        <div className="appnavborder">
          <Logo />
          <Applinks />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Appnav;
