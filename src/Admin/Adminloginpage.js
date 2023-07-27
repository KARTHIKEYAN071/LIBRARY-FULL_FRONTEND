import React, { useState,Component } from 'react';
import axios from 'axios';
import { Link, useNavigate,withRouter } from 'react-router-dom';
import "./adminloginpagelogin.css"
import { MessageArgsProps, message } from 'antd';
// import { Link, useNavigate } from 'react-router-dom';
import { render } from '@testing-library/react';
const Adminloginpage = () => {
  const navigate = useNavigate();
  return <Login navigate={navigate} />;
};
class Login extends Component  {
   
  state = {
    data: [],
  };
  
  componentDidMount() {
    axios.get('http://localhost:8080/showAdmin')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
  }
  checkInputsInData(idInput, nameInput) {
    const foundItem = this.state.data.find(item => item.email === idInput);
    return foundItem && foundItem.password === nameInput;
  }
  checkInputs = () => {
    const idInput = document.getElementById("idInput").value;
    const nameInput = document.getElementById("nameInput").value;
    //  Setval=document.getElementById("idInput").value;
    
    const inputsMatch = this.checkInputsInData(idInput, nameInput);
    
    if (inputsMatch) {
      message.success("Login Successfull");
      if(idInput==="hughjackman007@gmail.com")
      {
        this.props.navigate('/afteradminLogin', { replace: true });
      }
      else if(idInput==="rdjmark17@gmail.com")
      {
        this.props.navigate('/afteradminLogin3', { replace: true });

      }
      else if(idInput==="crish02@gmail.com")
      {
        this.props.navigate('/afteradminLogin2', { replace: true });

      }
      
    } else {
      message.error("Invalid Email/Password");
    }
  }
  render() {
    
  return (
    <div>
    <div className='bodyy'>
      <div className='containers' >

        <div className='piccc'>
          <br/>
         <div className='h1' id='result' class="temp"> <h1 className='loginhere'>ADMIN </h1></div>
          
          <div className='lab'>
            <input type="email"  placeholder='Enter Email' id="idInput" required/>
          </div>
          
          <div className='lab'>
            <input type="password" placeholder='Enter Password' id="nameInput" required/>
          </div>
         <br/>
          <div className='adminbtn'>
             <button onClick={this.checkInputs}><b>LOGIN</b></button>
          </div>
       </div>

        
    </div>
      </div>
    </div>
  );
}
}
// export const VAL=val;
export default Adminloginpage;
