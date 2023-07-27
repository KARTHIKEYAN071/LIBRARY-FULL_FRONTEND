import React, { Component } from 'react'
import axios from "axios";
import Bookdetails from './Bookdetails';

import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import "./bookdetails.css"

export default class Showbooks extends Component {
    Combine(pera){
        this.open();
        this.ButtonClick(pera);
    }
     open() {
        
        document.getElementById("maindiv").style.display = "block";
      }
      close() {
        document.getElementById("maindiv").style.display = "none";
      }
    state = {
        data: [],
        targetId: 0,
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
        
        findUserById = (targetId) => {
            return this.state.data.find(user => user.bookid === targetId);
          };
        ButtonClick = (newTargetId) => {
            this.setState({ targetId: newTargetId });
          };
  render() {
    const { targetId } = this.state;
    const userToDisplay = this.findUserById(targetId);
    return (
      <div>
        <div className='maindiv' id='maindiv'> 
        {userToDisplay ? (
            
        <div className='iidiv'>
            <div className='cs' onClick={this.close}><DisabledByDefaultIcon className='cb' style={{fontSize:"50px"}}/></div>
            <div className="flex">
          <div className="bokgallery" key={userToDisplay.bookid} >
            <a className=''>
                <img src={userToDisplay.imageurl} alt="Thriller Book" width="320" height="400"/>
            </a>

          </div>
            <div class="desic">
                <div className='bokcon'><h6 className='h6'>Title : <h7 className="findtxt">{userToDisplay.title}</h7></h6></div><div style={{color:"white",fontSize:"15px"}}>-----------------------------------------------------------------------------------------</div>
                <div className='bokcon'><h6 className='h6'>Author : <h7 className="findtxt">{userToDisplay.author}</h7></h6></div><div style={{color:"white",fontSize:"15px"}}>-----------------------------------------------------------------------------------------</div>
                <div className='bokcon'><h6 className='h6'>Publisher : <h7 className="findtxt">{userToDisplay.publisher}</h7></h6></div><div style={{color:"white",fontSize:"15px"}}>-----------------------------------------------------------------------------------------</div>
                <div className='bokcon'><h6 className='h6'>Edition : <h7 className="findtxt">{userToDisplay.edition}</h7></h6></div><div style={{color:"white",fontSize:"15px"}}>-----------------------------------------------------------------------------------------</div>
                <div className='bokcon'><h6 className='h6'>Category : <h7 className="findtxt">{userToDisplay.category}</h7></h6></div><div style={{color:"white",fontSize:"15px"}}>-----------------------------------------------------------------------------------------</div>
                <div className='bokcon'><h6 className='h6'>Subject : <h7 className="findtxt">{userToDisplay.subject}</h7></h6></div><div style={{color:"white",fontSize:"15px"}}>-----------------------------------------------------------------------------------------</div>
                <div className='bokcon'><h6 className='h6'>Books Available : <h7 className="findtxt">{userToDisplay.noofbooks}</h7></h6></div><div style={{color:"white",fontSize:"15px"}}>-----------------------------------------------------------------------------------------</div>
                <div className='bokcon'><h6 className='h6'>Language : <h7 className="findtxt">{userToDisplay.language}</h7></h6></div>
                
                </div>
                </div>
        <div className="bookbtn"><button className="btn1">TAKE THIS BOOK</button><button className="btn2">RESERVE THIS BOOK</button></div>
        </div>
  ):(<></>)}
        
      </div>
            <div>
        {this.state.data.map(user => (
          <div className="gallery" key={user.bookid} onClick={() => this.Combine(user.bookid)}>
            <a className='aa'>
                <img src={user.imageurl} alt="Thriller Book" width="192" height="262"/>
            </a>
            <div class="desc">{user.title}</div>

          </div>
        ))}
                </div> 
      </div>
    )
  }
}
export const GALLERY="gallery";