import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Login = () => {
  const natigate = useNavigate();
  const [email, setemail] = useState("mrusmanmughal1@gmail.com");
  const [password, setpassword] = useState("hello123");

  return (
    <>
      <Navbar />
      <div className="log">
        <div className="login">
          <div>
            <label htmlFor="id"> Email Address</label>
            <input type="text" value={email} />
            <label htmlFor="id"> Password </label>

            <input type="password" value={password} />

            <button className="btn" onClick={() => natigate("/app")}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
