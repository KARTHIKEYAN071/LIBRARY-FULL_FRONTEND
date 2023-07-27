import axios from "axios";
import "./table.css"
import React, { Component } from "react";
class Addbooks extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://localhost:8080/showBooks')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      
      <div className="showans">
        <div></div>
        {this.state.data.map(user => (
          <div className="div" key={user.rollno}>
            <div className="lab1"><h1 className="tabcon">RollNo:{user.sno}</h1></div>
            <div className="lab1"><h1 className="tabcon">FirstName:{user.firstName}</h1></div>
            <div className="lab1"><h1 className="tabcon">LastName:{user.lastName}</h1></div>
            <div className="lab1"><h1 className="tabcon">Email:{user.email}</h1></div>
            <div className="lab1"><h1 className="tabcon">Password:{user.password}</h1></div>
            {/* <div className="lab1"><h1 className="tabcon">ConfirmPassword:{user.conformPassword}</h1></div> */}
            <div className="lab1"><h1 className="tabcon">Gender:{user.gender}</h1></div>
            <div className="lab1"><h1 className="tabcon">Phone No:{user.phoneNo}</h1></div>
          </div>
        ))}
      </div>
    
    // <>
    // <div className="stdbox">
    //   <label for="rollno">RollNo</label>
      
    // </div>
    // </>
    );
  }}
  
export default Addbooks;
