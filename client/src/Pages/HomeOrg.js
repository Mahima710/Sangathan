import { React, useState, useEffect } from "react";
import CardCenterOrg from "../components/CardCenterOrg";
import CardRightOrg from "../components/CardRightOrg";
import Nav from "../components/Nav";
import "../App.css";
import "../assets/css/homepageorg.css";
import CreatePost from "../components/CreatePost";
import axios from "axios";
import { DP } from "../components/DP";

function HomeOrg() {
  const [data, setdata] = useState(null);
  useEffect(() => {
    const func = async () => {
      const getdata = await axios.get("http://localhost:5000/getallposts", {
        withCredentials: true,
      });
      setdata(getdata);
    };
    func();
  }, []);
  if (data) {
    console.log(data.data.data);
    if (!data.data.data) {
      var vals = data.data.message;
    } else {
      vals = data.data.data.map((one) => {
        return (
          <div
            style={{
              width: "50vw",
              height: "max-content",
              background: "#191a35",
              margin: "auto",
              textAlign: "left",
              padding: "2rem",
              marginTop: "1rem",
              borderRadius: "5px",
              color: "white",
            }}
          >
            <div style={{ display: "flex" }}>
              <DP style={{ left: "0" }} />
              <div>
                <p style={{ marginLeft: "1rem" }}>Mahima</p>
                <p style={{ marginLeft: "1rem", fontSize: "10px" }}>
                  {one.post_date.substr(0, 9)}
                </p>
              </div>
            </div>
            <div style={{ marginTop: "1rem" }}>{one.content}</div>
          </div>
        );
      });
    }
  }
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
          <CreatePost />
          {vals}
          <CardCenterOrg />
          <CardCenterOrg />
          <CardCenterOrg />
          <CardCenterOrg />
        </div>
        <CardRightOrg />
      </div>
    </div>
  );
}

export default HomeOrg;
