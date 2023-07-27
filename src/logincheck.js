import React, { Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

class MyComponent extends Component {
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

  // Use arrow function to automatically bind 'this' to the class instance
  checkInputs = () => {
    const idInput = document.getElementById("idInput").value;
    const nameInput = document.getElementById("nameInput").value;

    const inputsMatch = this.checkInputsInData(idInput, nameInput);

    if (inputsMatch) {
      alert("found");
    } else {
      alert("Failed: ID and Name do not match.");
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="idInput">Enter ID:</label>
        <input type="text" id="idInput" />
        <label htmlFor="nameInput">Enter Name:</label>
        <input type="text" id="nameInput" />
        <button onClick={this.checkInputs}>Check Inputs</button>
      </div>
    );
  }
}

export default MyComponent;
//  const handleInputChange = event => {
  //   var ele = document.getElementsByName('box');
  //   for(var i=0;i<ele.length;i++)
  //   {
  //     if(ele[i].checked)
  //     {
  //   document.getElementById("result").innerHTML = "Login As "+ ele[i].value;
  //     }
    
  //   }
    
// };
