import React, { useState,Component } from 'react';
import axios from 'axios';
import { Link, useNavigate,withRouter } from 'react-router-dom';
import "./App.css"
import { MessageArgsProps, message } from 'antd';
// import { Link, useNavigate } from 'react-router-dom';
import { render } from '@testing-library/react';
// import { useSelector } from 'react-redux';
const NavigationWrapper = () => {
  // const karthi = useSelector((state) => state.username);
  const navigate = useNavigate();
  return <MyApp navigate={navigate} />;
};
class MyApp extends Component  {
  state = {
    data: [],
  };

  componentDidMount() {
    axios.get('http://localhost:8080/showDetails')
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
    
    const inputsMatch = this.checkInputsInData(idInput, nameInput);
    
    if (inputsMatch) {
      message.success("Login Successfull");
      this.props.navigate('/afterLogin', { replace: true });
    } else {
      message.error("Invalid Email/Password");
    }
  }
  handleInputChange = event => {
    var ele = document.getElementsByName('box');
    for(var i=0;i<ele.length;i++)
    {
      if(ele[i].checked)
      {
    document.getElementById("result").innerHTML = "Login As "+ ele[i].value;
      }
    
    }
    
  };
  
  render() {
  return (
    <div>
    <div className='body'>
    <div className='bdy'>
                    <div className='text'><p>Welcome To Library</p>
                    <div className='picimg'>
      <Link to="/adminLogin"><button className='adminlogin'>ADMIN LOGIN</button></Link>
                    </div></div> 
                    </div>
      <div className='containers' >

        <div className='pic'>
          <br/>
         <div className='h1' id='result' class="temp"> <h1 className='loginhere'>LOGIN HERE</h1></div>
          
          <div className='lab'>
            <input type="email"  placeholder='Enter Email' id="idInput" required/>
          </div>
          
          <div className='lab'>
            <input type="password" placeholder='Enter Password' id="nameInput" required/>
          </div>
         <br/>
         <div className='h2'> <h2 className='h2'>LOGIN AS</h2></div><br/>
          <div className='check'>
          <div className='stf'>
          <input type='radio'value='Staff' className='null' id='staff'name='box' onChange={this.handleInputChange} /><label for='staff'>Staff</label>
          </div>
          <div className='std'>
          <input type='radio'value='Student' className='null' id='std' name='box' onChange={this.handleInputChange} /><label for='std'>Student</label>
          </div>
          
          </div>
          
          <div className='btn'>
            {/* <Link to="/Login"> */}
             {/* <Link to='/afterlogin'style={{textDecoration:"none"}}> */}
             <button onClick={this.checkInputs}><b>LOGIN</b></button>
               {/* </Link> */}
              {/* </Link> */}
          </div>
        <p className='link'>New user? /<Link to="/SignUp"><button>Sign Up</button></Link><br/></p>
        {/* <div className='icon'>
      <GoogleIcon fontSize="large"color="primary" /></div>
        <div className='icon'>
     <FacebookIcon fontSize="large" color="primary"/></div>
        <div className='icon'>
     <InstagramIcon sx={{ color: pink[500] }}fontSize="large"/></div>
        <div className='icon'>
        <TwitterIcon fontSize="large" color="primary"/></div>
        <div className='icon'>
  <LinkedInIcon fontSize="large" color="primary"/></div> */}</div>

        
    </div>
      </div>
    </div>
  );
}
}
export default NavigationWrapper;
