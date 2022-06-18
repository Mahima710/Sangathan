import React from 'react'
import "../assets/css/homepageorg.css";
import { DP } from "../components/DP";
import image from "../assets/Images/dp.jpg"

function CardLeftOrg() {
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
          marginBottom: "0.7rem",
          fontWeight: "bold",
        }}
      >
        <img src ={image} style={{ left: "0", width:"7rem", height:"7rem", borderRadius:"50%", marginTop:"-5rem"}} />
      </div>
        <div style={{margin:"auto",  marginBottom:"2rem" , textAlign:"center", fontSize:"30px"}}>
            <p>Mahima</p>
        </div>
      <div style={{ display: "flex" , marginBottom:"0.6rem", fontSize:"17px"}}>
        <DP style={{ left: "0" }} />
        <div>
          <p style={{ marginLeft: "1rem" }}>MahimaKul@gmail.com</p>
        </div>
      </div>
      <div style={{ display: "flex" , marginBottom:"0.6rem", fontSize:"17px"}}>
        <DP style={{ left: "0" }} />
        <div>
          <p style={{ marginLeft: "1rem" }}>Selling wood</p>
        </div>
      </div>
      <div style={{ display: "flex" , marginBottom:"0.6rem",  fontSize:"17px"}}>
        <DP style={{ left: "0" }} />
        <div>
          <p style={{ marginLeft: "1rem" }}>123455</p>
        </div>
      </div>
      <button  type='submit' onClick={(e)=>onclick(e)} className='button'>
    <p className='content'>Donate</p>
    </button>
    <p style={{color:"gray"}}>UPI doesn't exist, sorry, direct donation is not allowed by organization</p>


      

    </div>
    )
}

export default CardLeftOrg
