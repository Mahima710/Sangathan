import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import { Heading } from "../components/Heading";
import axios from "axios";
import { Loginform } from "../components/Loginform";
import {Link} from "react-router-dom"
// Name, Email, Password, City, State, Country, About, DOB

export const Login = () => {
  const history = useNavigate();
  const [Category, setCategory] = useState("Individual");
  const [Password, setPassword] = useState(null);
  const [Email, setEmail] = useState(null);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    console.log(Category);
    axios
      .post(
        "http://localhost:5000/login",
        {
          Category: Category,
          Password: Password,
          Email: Email,
        },
        { withCredentials: true }
      )
      .then((res) => {
        Category === "Individual" ?
        history("/individual"):
        history("/organization")
        alert(res.message? res.message : "Successfully signed up");

      })
      .catch((err) => {
        return alert(err);
      });
  };

  return (
    <>
      <Heading />
      <div className="subheading">
        <p className="login" style ={{marginTop:"4rem"}}>Sign In</p>
      </div>
      <form style={{ textAlign: "center" }}>
        <div className="main" style={{marginTop : "3rem"}}>
          <div className="category">
            <InputLabel
              className="label"
              variant="standard"
              htmlFor="uncontrolled-native"
            >
              Category
            </InputLabel>
            <NativeSelect
              className="input"
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
              onChange={(e) => handleChange(e)}
            >
              <option value="Individual">Individual</option>
              <option value="Organization">Organization</option>
            </NativeSelect>
          </div>
          <Loginform setEmail={setEmail} setPassword={setPassword} />
        </div>
        <button type="submit" onClick={(e) => onClick(e)} className="button">
          <p className="content">Login</p>
        </button>
      </form>
      <div>
        <p>Don't have an account ? <Link to="/signup">Register Now</Link></p>
      </div>
    </>
  );
};
