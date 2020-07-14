import React,{useState,useEffect} from 'react';
import { Layout, Menu,Popover, Button  } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import personlogo from'./images/Asset 33xxxhdpi.png';
import {Link,useNavigate} from '@reach/router';
import {MyProfile} from './MyProfile';
import {ChangePassword} from './ChangePassword';
import {SavedAddress} from './SavedAddress';
import './Home.css';




const { Header, Sider, Content } = Layout;


export function Home(){


  
    
 const [MyAddress,setMyAddress] =useState([{address:"home",addressType:"home"}]);
 const [address,setAddress]=useState('');
 const [addressType,setAddressType]=useState('');
 const [selectedMenuItem, setSelectedMenuItem]= useState('item1');
 const navigate = useNavigate();
 

const render = ()=>{
const status = localStorage.getItem("status");
if(!status){
  return  navigate("/", { replace: true });
}
};

useEffect(()=>{
render();

},[]);


 const saveAddress = async(e)=>{
    e.preventDefault();
  await MyAddress.push({
        address,
        addressType
    });
    setAddress("");
    setAddressType("");
    
    };


   

    const componentsSwitch = (key) => {
      switch (key) {
        case 'item1':
          return (<MyProfile/>);
        case 'item2':
          return (<SavedAddress addresses={MyAddress}/>);
        case 'item3':
          return (<ChangePassword/>);
        default:
          break;
       }
      };

 
return(
 
    <Layout style={{margin:"4em 1em 1em 1em",boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" ,minHeight:"600px"}}>
    <Sider style={{backgroundColor:"white"}}>
      <div className="logo" />
      <Menu theme="light" mode="inline"  selectedKeys={selectedMenuItem} onClick={(e) => 
        setSelectedMenuItem(e.key)} >
        <h4  style={{margin:"2em 3em 1em 1em",marginBottom:"3em"}}><img src={personlogo} style={{width:"20px",height:"20px"}}></img>  Hi Mekvahan!</h4>
       <Menu.Item key="item1" >
        <span >My Profile</span>
        </Menu.Item >
        <Menu.Item key="item2" >
          Manage Address
        </Menu.Item>
        <Menu.Item key="item3" >
          Change Password
        </Menu.Item>
      </Menu>
    </Sider>
    
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0,backgroundColor:"white" }}>
        <h4 style={{marginLeft:"20px"}}>My Address

        <Popover
        content={<form><input type="text" placeholder="Address type" value={addressType} onChange={(e)=>setAddressType(e.target.value)}></input><br/>
        <input type="text" placeholder="Enter Address" value={address} onChange={(e)=>setAddress(e.target.value)}></input><br/>
        <input type="submit" placeholder="Enter Address" value="Save" onClick={saveAddress}></input>
        </form>}
        title="Title"
        trigger="click"
        
        
      > 
           <a  style={{float:"right",marginRight:"20px"}}>+Add Address</a>
       </Popover></h4>
      </Header>
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          backgroundColor:"white"
        }}
      >
       <div>
        {componentsSwitch(selectedMenuItem)}
       </div>
      </Content>
    </Layout>
  </Layout>
  
  
)

}