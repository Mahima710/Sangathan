import { React, useState, useEffect } from "react";
import CardCenterOrg from "../components/CardCenterOrg";
import CardRightOrg from "../components/CardRightOrg";
import Nav from "../components/Nav";
import "../App.css";
import "../assets/css/homepageorg.css";
import axios from "axios";

export const Home = () => {
  const [data, setdata] = useState(null);
  useEffect(() => {
    const func = async () => {
      const getdata = await axios.get("http://localhost:5000/getallevents", {
        withCredentials: true,
      });
      setdata(getdata);
    };
    func();
    console.log(data);
  }, []);

  return (
    <div style={{ background: "#0b0c27" }}>
      <Nav />
      <div
        style={{
          display: "flex",
          margin: "auto",
          width: "100vw",
        }}
      >
        <div style={{ width: "15vw" }}></div>
        <div>
          <CardCenterOrg />
          <CardCenterOrg />
          <CardCenterOrg />
        </div>
        <CardRightOrg />
      </div>
    </div>
  );
};
