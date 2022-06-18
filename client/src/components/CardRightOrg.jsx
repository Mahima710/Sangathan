import React from "react";
import "../assets/css/homepageorg.css";
import { DP } from "../components/DP";

function CardRightOrg() {
  return (
    <div
      style={{
        width: "25vw",
        height: "max-content",
        background: "#191a35",
        marginLeft: "1rem",
        textAlign: "left",
        padding: "2rem",
        marginTop: "1rem",
        borderRadius: "5px",
        float: "right",
        color: "white",
      }}
    >
      <div
        style={{
          margin: "auto",
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight: "bold",
        }}
      >
        <p>Organizations</p>
      </div>

      <div style={{ display: "flex" , marginBottom:"0.6rem"}}>
        <DP style={{ left: "0" }} />
        <div>
          <p style={{ marginLeft: "1rem" }}>Mahima</p>
          <p style={{ marginLeft: "1rem", fontSize: "10px" }}>India</p>
        </div>
      </div>

      <div style={{ display: "flex" , marginBottom:"0.6rem"}}>
        <DP style={{ left: "0" }} />
        <div>
          <p style={{ marginLeft: "1rem" }}>Mahima</p>
          <p style={{ marginLeft: "1rem", fontSize: "10px" }}>India</p>
        </div>
      </div>
      <div style={{ display: "flex" , marginBottom:"0.6rem"}}>
        <DP style={{ left: "0" }} />
        <div>
          <p style={{ marginLeft: "1rem" }}>Mahima</p>
          <p style={{ marginLeft: "1rem", fontSize: "10px" }}>India</p>
        </div>
      </div>


    </div>
  );
}

export default CardRightOrg;
