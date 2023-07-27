import axios from "axios";
// import "./table.css"
import "./report.css"
import React, { Component } from "react";
class Report extends Component {
  close() {
    document.getElementById("maindiv").style.display = "none";
  }
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://localhost:8080/showfeedback')
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
          <div className="div2" key={user.rollno}>
            <div className="lab1"><h1 className="tabcon">Report By:{user.name}</h1></div>
            <div className="lab1"><h1 className="tabcon">Date/Time:{user.date}</h1></div>
            <div className="lab1"><h1 className="tabcon">Rules And Regulations:{user.rules}</h1></div>
            <div className="lab1"><h1 className="tabcon">Availability of Books:{user.availablity }</h1></div>
            <div className="lab1"><h1 className="tabcon">Quality of Books:{user.quality}</h1></div>
            {/* <div className="lab1"><h1 className="tabcon">ConfirmPassword:{user.conformPassword}</h1></div> */}
            <div className="lab1"><h1 className="tabcon">Quantity of Books:{user.quantity}</h1></div>
            <div className="lab1"><h1 className="tabcon">Availability of Staff :{user.staff}</h1></div>
            <div className="lab1"><h1 className="tabcon">Co-Operation of Staff:{user.cooperation}</h1></div>
            <div className="lab1"><h1 className="tabcon">Environment In The Library:{user.environment}</h1></div>
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
  
export default Report;