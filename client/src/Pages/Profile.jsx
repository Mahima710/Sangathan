import {React, useState, useEffect} from 'react'
import CardCenterOrg from "../components/CardCenterOrg";
import CardRightOrg from "../components/CardRightOrg";
import Nav from "../components/Nav";
import CardLeftOrg from '../components/CardLeftOrg';
import "../App.css";
import "../assets/css/homepageorg.css";
import { DP } from "../components/DP";
import axios from "axios"


export const Profile = () => {
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
          <div>
      <Nav />
      <div
        style={{
          display: "flex",
          margin: "auto",
          width: "100vw",
        }}
      >
        <div style={{marginRight:"1rem"}}>
            <CardLeftOrg />
        </div>
        <div style={{marginRight:"1rem"}}>
          <p style={{margin:"auto", textAlign:"left", marginLeft:"2rem", fontSize:"2rem", fontStyle:"bold", color:"white"}}>Posts</p>
          {vals}
          <CardCenterOrg style={{width:"30vw"}} />
          <CardCenterOrg style={{width:"40vw"}}/>
          <CardCenterOrg style={{width:"40vw"}} />
        </div>
        <CardRightOrg style={{width:"7vw", marginRight:"2rem"}} />
      </div>
    </div>
        
    </div>
  )
}
