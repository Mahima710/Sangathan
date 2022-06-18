import {React, useEffect, useState} from 'react'
import '../assets/css/homepageorg.css'
import { DP } from "../components/DP";
import Nav from "../components/Nav"
import axios from "axios"
import CreateEvent from "../components/CreateEvent"



function CardCenterOrg() {
    return (
       <div style={{width :"50vw", height:"max-content", background : "#191a35", margin:"auto", textAlign:"left", padding:"2rem", marginTop :"1rem", borderRadius:"5px", color:"white"}}>
          <div style ={{display:"flex"}}>
          <DP style={{left:"0"}} />
          <div>
          <p style={{marginLeft:"1rem"}}>Mahima</p>
          <p style={{marginLeft:"1rem", fontSize:"10px"}}>time</p>
          </div>
          </div>
          <div style={{marginTop:"1rem"}}>
              Description<br/><br/>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, aliquid. Perferendis quibusdam, veniam in pariatur, assumenda quis excepturi exercitationem voluptas, facere suscipit illo eligendi! Inventore, eaque dolores. Est, hic itaque?
          </div>
          <br/>
          <div>
              <p>From : DATE</p>
              <p>To : DATE</p>
          </div>
       </div>
    )
}


export const Events = () => {
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
      <div style={{background:"#0b0c27"}}>
      <Nav />
    <div>
      <CreateEvent />
        <div style={{margin:"auto", textAlign:"center", fontSize:"2rem", fontStyle:"bold", color:"white"}}>Events</div>
        <CardCenterOrg />
        <CardCenterOrg />
        <CardCenterOrg />
    </div>
    </div>
  )
}
