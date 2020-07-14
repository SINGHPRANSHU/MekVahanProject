import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "@reach/router";
import car from "./images/car.png";
import logo from "./images/Asset 3ldpi.png";
import googlelogo from "./images/Asset 5ldpi.png";
import fblogo from "./images/Asset 6ldpi.png";
import {message} from 'antd';


export function Login() {
 

  const [mob, setMob] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const wrongInfo = ()=>{
    message.error("wrong credentials", 2)
  };

  const PostData = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://mekvahan.com/api/android_intern_task",
      data: {
        mobile: mob,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data);

        if (res.data.status == true) {
          localStorage.setItem("status",res.data.status)
          navigate("./home", { replace: true });
          
        }else{
          wrongInfo();
          return
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="login">
        <div> <img src={car} /></div>
        <div>
     
      <form onSubmit={PostData} className="form">
        <div style={{ display: "flex", margin: "1em", marginLeft: "6em" }}>
          <img src={logo}></img>
          <h2
            style={{
              marginLeft: "0.5em",
              fontFamily: "Impact, Charcoal, monospace",
              color: " #c0392b ",
              borderBottom: "1px solid grey",
            }}
          >
            MEKVAHAN
          </h2>
          <br />
        </div>

        <input
          style={{ margin: "1em 1em", width: "100%" }}
          type="text"
          value={mob}
          placeholder="10 digit mobile number"
          onChange={(e) => {
            setMob(e.target.value);
          }}
        ></input>
        <br />
        <input
          style={{
            margin: "1em 1em",
            width: "100%",
            borderBottom: "1px solid grey",
          }}
          type="text"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <a href="/" style={{}}>
          forgot password?
        </a>
        <br />
        <input
          style={{
            width: "100%",
            height: "2.5em",
            backgroundColor: "#c0392b",
            color: "white",
            fontFamily: "Impact, Charcoal, serif",
            margin: "1em",
            marginTop: "3em",
            cursor: "pointer",
            
          }}
          type="submit"
          value="Login"
        />
        <div style={{ display: "flex" }}>
          <hr style={{ width: "50%", border: "1px solid  #ebedef" }} />
          <h4 style={{ color: "  #d5d8dc " }}>or</h4>
          <hr style={{ width: "50%", border: "1px solid  #ebedef" }} />
        </div>
        <h4 style={{ color: "  #d5d8dc ", marginLeft: "8em" }}>
          continue with
        </h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="#">
            <img src={googlelogo} />
          </a>
          <a href="#">
            <img src={fblogo} />
          </a>
        </div>
      </form>
      </div>
    </div>
  );
}
