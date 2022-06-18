import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import { Individualsignup } from "../components/Individualsignup";
import { OrganizationSignup } from "../components/OrganizationSignup";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import axios from "axios";
import {Link} from "react-router-dom"
// Name, Email, Password, City, State, Country, About, DOB

export const Signup = () => {
  const history = useNavigate();
  const [Category, setCategory] = useState("Individual");
  const [Username, setUsername] = useState(null);
  const [Contact1, setContact1] = useState(null)
  const [Contact2, setContact2] = useState(null)
  const [Password, setPassword] = useState(null);
  const [Confirm_Password, setConfirm_Password] = useState(null);
  const [Email, setEmail] = useState(null);
  const [City, setCity] = useState(null);
  const [State, setState] = useState(null);
  const [Country, setCountry] = useState(null);
  const [About, setAbout] = useState(null);
  const [Purpose, setPurpose] = useState(null);
  const [PAN, setPAN] = useState(null);
  const [UPI, setUPI] = useState(null);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    console.log(Category)
    if (Category === "Individual") {
      if (Password !== Confirm_Password) {
        return alert("Passwords don't match");
      }
      axios
        .post(
          "http://localhost:5000/register",
          {
            Category: Category,
            Name: Username,
            Password: Password,
            Email: Email,
            City: City,
            State: State,
            Country: Country,
            About: About,
          },
          { withCredentials: true }
        )
        .then((res) => {
          alert(res.message? res.message : "Successfully signed up");
          history("/individual");
        })
        .catch((err) => {
          return alert(err);
        });
    } else if(Category === "Organization") {
      if (Password !== Confirm_Password) {
        return console.log("Passwords don't match");
      }
      axios
        .post(
          "http://localhost:5000/register",
          {
            Category: Category,
            Name: Username,
            Password: Password,
            Email: Email,
            City: City,
            State: State,
            Contact1 : Contact1,
            Contact2 : Contact2,
            Country: Country,
            Purpose: Purpose,
            PAN: PAN,
            UPI_ID: UPI,
          },
          { withCredentials: true }
        )
        .then((res) =>{
          alert(res.message? res.message : "Successfully signed up")
          history("/organization")
        })
        .catch((err) => {
          return alert(err);
        });
    }
  };

  return (
    <>
      <Heading />
      <div className="subheading">
        <p className="login" >Sign Up</p>
      </div>
      <form style={{ textAlign: "center" }}>
        <div className="main">
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
          {Category === "Individual" ? (
            <Individualsignup
              setUsername={setUsername}
              setCity={setCity}
              setState={setState}
              setCountry={setCountry}
              setConfirm_Password={setConfirm_Password}
              setEmail={setEmail}
              setAbout={setAbout}
              setPassword={setPassword}
            />
          ) : (
            <OrganizationSignup
              setUsername={setUsername}
              setCity={setCity}
              setState={setState}
              setContact1 = {setContact1}
              setContact2 = {setContact2}
              setCountry={setCountry}
              setConfirm_Password={setConfirm_Password}
              setEmail={setEmail}
              setPAN={setPAN}
              setPassword={setPassword}
              setPurpose={setPurpose}
              setUPI={setUPI}
            />
          )}
        </div>
        <button type='submit' onClick={(e)=>onClick(e)} className='button'>
    <p className='content'>Signup</p>
    </button>
      </form>
      <div>
        <p>Already a user ? <Link to="/">Sign In</Link></p>
      </div>
    </>
  );
};
