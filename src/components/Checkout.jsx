import React from "react";
import checkout from '../assets/checkout.png'
export default function Checkout(){
    return(
        <div style={{height:"88vh", display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <img style={{height:"20rem", width:"20rem"}} src={checkout} alt="" />
            <h3 style={{marginTop:"1rem"}}>Order placed Successfully</h3>
        </div>
    )
}