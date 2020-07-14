import React, { useState,useEffect } from 'react';
import { Card } from 'antd';
import { Alert } from 'antd';
import './savedAdd.css';
import { Row, Col } from 'antd';
import { useNavigate } from "@reach/router";
import home from './images/Asset 9ldpi.png';
import office from './images/Asset 10ldpi.png';
import { IconMap } from 'antd/lib/result';


export function SavedAddress(props){
const navigate = useNavigate();


const removeElement = async(index)=>{
   props.addresses.splice(index,index+1);
   navigate("./home", { replace: true });

    
}



const refresh = ()=>(props.addresses).map((value, index) => {
    return(<Col span={12}  key={index}>
    <div className="card">
    <div className="container">
        <div style={{display:"flex"}}>
          <img src={ value.addressType=="home"?home:office}  style={{height:"1em",width:"1em",marginTop:"0.5em",marginRight:"0.5em"}}></img>
          <h3 style={{fontFamily: "Impact, Charcoal, serif"}}>{value.addressType}</h3>
        </div>
      <p>{value.address}</p>
      <div style={{display:"flex",marginTop:"3em"}}>
          <button style={{marginRight:"4em",backgroundColor:" #f44336"}}>Edit</button>
          <button onClick={()=>removeElement(index) }>Delete</button>
      </div>
    </div>
   </div>
  </Col> )
})


return(
    
<div style={{display:"inline-grid",gridColumnGap: "50px",gridRowGap:"50px",margin:"1em 3em"}} >
<Row>

{refresh()}


</Row>
</div>
)
}