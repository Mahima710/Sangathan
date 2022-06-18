import React from 'react'
import '../assets/css/homepageorg.css'
import { DP } from "../components/DP";

function CardCenterOrg() {
    return (
       <div style={{width :"50vw", height:"max-content", background : "#191a35", margin:"auto", textAlign:"left", padding:"2rem", marginTop :"2rem", borderRadius:"5px", color:"white"}}>
          <div style ={{display:"flex"}}>
          <DP style={{left:"0"}} />
          <div>
          <p style={{marginLeft:"1rem"}}>Mahima</p>
          <p style={{marginLeft:"1rem", fontSize:"10px"}}>time</p>
          </div>
          </div>
          <div style={{marginTop:"1rem"}}>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, aliquid. Perferendis quibusdam, veniam in pariatur, assumenda quis excepturi exercitationem voluptas, facere suscipit illo eligendi! Inventore, eaque dolores. Est, hic itaque?
          </div>
       </div>
    )
}

export default CardCenterOrg