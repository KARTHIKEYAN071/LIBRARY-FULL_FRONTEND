import axios from "axios";
// import "./table.css"
import React, { Component } from "react";
class Security extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.request('http://localhost:8080/iamadmin')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        <div>
            <h1>Spring Security</h1>
        </div>
      
      
       
    );
  }}
  
export default Security;