import {React,useState} from 'react'
// import './home.css'
import './after.css'
import LogoutIcon from '@mui/icons-material/Logout';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { pink } from '@mui/material/colors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import leo from './leo.png'
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
// import karthi from './karthi.png'
import { Link, useNavigate } from 'react-router-dom';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';
import Showbooks from '../Showbooks';
import Bookdetails from '../Bookdetails';
import { GALLERY } from '../Showbooks';
import Feedback from '../feedback';
export default function Afterlogin() {

    const navigate = useNavigate();
const logoutdel = (e) => {
  navigate("/",{replace:true})
}
    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
      }
    function formopen() {
        document.getElementById("fedbckform").style.display = "block";
        // document.getElementsById("fedbckform").style.display = "block";
      }
    function w3_open2() {
        document.getElementById("mySidebar2").style.display = "block";
      }
    function w3_open3() {
        document.getElementById("mySidebar3").style.display = "block";
      }
    function deleteAcc() {
        document.getElementById("deleteacc").style.display = "block";
      }
      
      function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
      }
      function cancel() {
        document.getElementById("deleteacc").style.display = "none";
      }
      function w3_close2() {
        document.getElementById("mySidebar2").style.display = "none";
      }
      function w3_close3() {
        document.getElementById("mySidebar3").style.display = "none";
      }
      const [id,setId]=useState(0);
      const [pass,setPass]=useState("");
  const SubmitHandlerdel =(e,pass)=>{
    e.preventDefault();
    axios.delete(`http://localhost:8080/deleteDetails/${id}`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
    alert("Deleted");
    document.getElementById("deleteacc").style.display = "none";
}

    function search_books() {
		let input = document.getElementById('afsrc').value
		input=input.toLowerCase();
		let x = document.getElementsByClassName(GALLERY);
		  let y=0;
		for (var i = 0; i < x.length; i++) { 
			if (!x[i].innerHTML.toLowerCase().includes(input)) {
				x[i].style.display="none";
        y++;
			}
			else {
        x[i].style.display="list-item";
			}
		}
    if(y==136)
    {
      window.alert("No Books Found");
    }
	}
  return (
    <div >

        <div className='header'>
           
                <div className='leo'>
                <img src={leo} alt="Leo" width="130" height="130"/>
                </div>
                <div class="sidebar" style={{display:"none"}}  id="mySidebar">
                <button onClick={w3_close} class="clsbtn">Close &times;</button><br/><br/>
                <button href="#" class="dd" style={{textDecoration:"none"}} onClick={w3_open2}>Profile<ArrowDropDownCircleIcon style={{marginLeft:".4cm"}}/></button><br/><br/>
                <button href="#" class="dd"style={{textDecoration:"none"}}onClick={w3_open3}>Sort Book By<ArrowDropDownCircleIcon style={{marginLeft:".4cm"}}/></button><br/><br/>
                <button onClick={formopen}class="ddd"style={{textDecoration:"none",}}>LogOut<br/><LogoutIcon style={{fontSize:"30px",marginLeft:".4cm"}}/></button>
                </div>


                <div class="sidebar2" style={{display:"none"}}  id="mySidebar2">
                <button onClick={w3_close2} class="clsbtn2">Close &times;</button><br/><br/>
                <Link to="/Update"><button href="#" class="dd2" style={{textDecoration:"none"}} >Update Details</button></Link><br/><br/>
                <button href="#2" class="dd2"style={{textDecoration:"none"}} onClick={deleteAcc}>Delete Account</button>
                </div>
                <div class="sidebar3" style={{display:"none"}}  id="mySidebar3">
                <button onClick={w3_close3} class="clsbtn2">Close &times;</button><br/><br/>
                <button href="#" class="dd2" style={{textDecoration:"none"}} >Authors</button><br/><br/>
                <button href="#2" class="dd2"style={{textDecoration:"none"}}>Genres</button>
                </div>

                <form class="deleteacc" style={{display:"none"}}  id="deleteacc" onSubmit={logoutdel}>
                    <p className='deltxt'>Delete Your Account</p>
                <p className='proll'>Enter RollNo </p><input type='number' class="nterroll" onChange={ e => setId(e.target.value)} style={{textDecoration:"none"}} placeholder='**'/><br/>
                <p className='ppass'>Enter Password </p><input type="text" className="nterpass"style={{textDecoration:"none"}}placeholder='********'/><br/>
                <button type="submit" onClick={SubmitHandlerdel} class="okbtn">Ok</button>
                <button onClick={cancel} class="clsbtn4" classN="clsbtn4">Cancel &times;</button>
                </form>
                
                <div className='tele'><TelegramIcon/></div>
                <p className='mail'>Email</p><br/><br/><p className='email'>727721euit071@skcet.ac.in</p>
                <div className='callicon'><CallIcon/></div>
                <p className='call'>Call</p><br/><br/><p className='num'>+91 8270846243</p>
                <div className="navigation">
                    <ul>
                        
                       <button> <Link to="/" style={{textDecoration:"none"}}><li style={{TextDecoration:"none"}}>HOME</li></Link></button>
                       <button> <Link to="/cat" style={{textDecoration:"none"}}><li>BOOKS</li></Link></button>
                       <button><Link to="/suggest" style={{textDecoration:"none"}}><li>SUGGEST</li></Link></button>
                       <button><Link to="/Notes" style={{textDecoration:"none"}}><li>Notes</li></Link></button>
                       <button><Link to="/about" style={{textDecoration:"none"}}><li>ABOUT</li></Link></button>
                       <button> <Link to="/contact" style={{textDecoration:"none"}}><li>CONTACT</li></Link></button>
                    </ul>
                </div>
                <div class="searchbar1">
                    <input className="srchin1" type="search" id='afsrc' name="search"onkeyup="search_books()"  placeholder="search here..."onChange={search_books}/>
                    <button className="srchbtn1">Search</button>
                    
                    </div>
                    <div className='profile'> 
                        <button class="profilebtn" onClick={w3_open}><AccountCircleIcon style={{fontSize:"70px"}}/></button>
                        </div>
                </div>
        <div className='middle'>
                  <div className="fedbckform" id="fedbckform"><Feedback id="fedbckform"/></div>
        <Showbooks/>
        <div className='bookdetails'><Bookdetails/></div>
                    
        </div>
        <br/><br/><br/><br/>
        <div className='affooter1'>
        <div className='footer'>
                <div className='karthi'>
                <div className='logotxt'><p className='k'>K</p>
                <p className='a'>A</p><p className='r'>R</p>
                <p className='t'>T</p><p className='h'>H</p>
                <p className='i'>I</p></div>
                </div>
                <div className='copy'><p>Copyright © 2023 Leo,Inc.</p></div>
                <div className='but'>
                <Link className='bottxt1' style={{textDecoration:"none",color:"black",borderBottom:"1px solid black"}}>Legal Stuff</Link><p className='or'>|</p>
                <Link className='bottxt2'style={{textDecoration:"none",color:"black",borderBottom:"1px solid black"}}>Privacy Policy</Link><p className='or2'>|</p>
                <Link className='bottxt3' style={{textDecoration:"none",color:"black",borderBottom:"1px solid black"}}>Security</Link></div>
                <div className='homeicon'>
                <div className='icon'>
      <GoogleIcon fontSize="large"color="primary" /></div>
        <div className='icon'>
     <FacebookIcon fontSize="large" color="primary"/></div>
        <div className='icon'>
     <InstagramIcon sx={{ color: pink[500] }}fontSize="large"/></div>
        <div className='icon'>
        <TwitterIcon fontSize="large" color="primary"/></div>
        <div className='icon'>
  <LinkedInIcon fontSize="large" color="primary"/></div></div>
        </div>
        </div>
    </div>
  )
}
