import React, { Component } from 'react';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import "./bookdetails.css"
import axios from "axios";

class UserComponent extends Component {
    state = {
        data: [],
        targetId: 1,
        };
        componentDidMount() {
            axios.get('http://localhost:8080/showBooks')
              .then(response => {
                this.setState({ data: response.data });
              })
              .catch(error => {
                console.log(error);
              });
    
            }
      Combine(pera){
        this.open();
        this.ButtonClick(pera);
    }
    open() {
        
        document.getElementById("show").style.display = "block";
      }
      // Function to find the user by ID and return the user object
      findUserById = (targetId) => {
        return this.state.data.find(user => user.bookid === targetId);
      };
    
      // Event handler for the button click
      ButtonClick = (newTargetId) => {
        this.setState({ targetId: newTargetId });
      };
    
      render() {
        const { targetId } = this.state;
        const userToDisplay = this.findUserById(targetId);
    
        return (
          <div>
            {userToDisplay ? (
              <div className='iidiv' id='show'>
              <div className='cs' onClick={this.close}><DisabledByDefaultIcon className='cb' style={{fontSize:"50px"}}/></div>
              <div>
          
            <div className="gallery" key={userToDisplay.bookid} >
              <a className='aa'>
                  <img src={userToDisplay.imageurl} alt="Thriller Book" width="192" height="262"/>
              </a>
              <div class="desc">{userToDisplay.title}</div>
  
            </div>
          ))
                  </div>
          </div>
            ) : (
              <p>User not found!</p>
            )}
    
            {/* Button to change the targetId on click */}
            {this.state.data.map(user => (
              <button key={user.bookid} onClick={() => this.Combine(user.bookid)}>
                Show User {user.bookid}
              </button>
            ))}
            {/* Add more buttons for other users as needed */}
          </div>
        );
      }
    }

export default UserComponent;
