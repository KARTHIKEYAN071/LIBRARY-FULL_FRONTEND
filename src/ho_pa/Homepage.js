import React from 'react'
import './home.css'
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
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import pic1 from './wall1.jpg'
import pic2 from './wall2.jpg'
import pic3 from './wall3.jpg'
import pic4 from './wall4.jpg'
import pic5 from './wall5.jpg'
import pic6 from './wall6.jpg'
import pic7 from './wall7.jpg'
import pic8 from './wall8.jpg'
export default function Homepage() {
  return (
    <div >
        <div className='header'>
           
                <div className='leo'>
                <img src={leo} alt="Leo" width="130" height="130"/>
                </div>
                <div className='tele'><TelegramIcon/></div>
                <p className='mail'>Email</p><br/><br/><p className='email'>727721euit071@skcet.ac.in</p>
                <div className='callicon'><CallIcon/></div>
                <p className='call'>Call</p><br/><br/><p className='num'>+91 8270846243</p>
                <div className="navigation">
                    <ul>
                        
                       <button> <Link to="/" style={{textDecoration:"none"}}><li style={{TextDecoration:"none"}}>HOME</li></Link></button>
                       <button> <Link to="/cat" style={{textDecoration:"none"}}><li>BOOKS</li></Link></button>
                       <button><Link to="/suggest" style={{textDecoration:"none"}}><li>SUGGEST</li></Link></button>
                       <button ><Link to="/Notes" style={{textDecoration:"none"}}><li>NOTES</li></Link></button>
                       <button><Link to="/about" style={{textDecoration:"none"}}><li>ABOUT</li></Link></button>
                       <button> <Link to="/contact" style={{textDecoration:"none"}}><li>CONTACT</li></Link></button>
                    </ul>
                </div>
                <div class="searchbar">
                    <input className="srchin" type="search" name="search" placeholder="search here..."/>
                    <button className="srchbtn">Search</button>
                    </div>
                   <Link to="/Login" style={{textDecoration:"none"}}> <div className='loginbtn'> <div className='lock'><AccountCircleOutlinedIcon style={{color:"wheat",fontSize:"30px"}}/></div><button>Login</button></div></Link>
                </div>
        <div className='middle'>
        <div id="slideshow">
<div class="slide-wrapper">
    <div class="slide">
        <h1 class="slide-number">
        <img src={pic7} width="100%" heigth="10cm"/>
        </h1>
</div>
    <div class="slide">
        <h1 class="slide-number">
            <img src={pic2} width="100%" heigth="10cm"/>
        </h1>
</div>
    <div class="slide">
        <h1 class="slide-number">
            <img src={pic3} width="100%" heigth="10cm"/>
        </h1>
</div>
    <div class="slide">
        <h1 class="slide-number">
            <img src={pic4} width="100%" heigth="10cm"/>
        </h1>
</div>
    <div class="slide">
        <h1 class="slide-number">
            <img src={pic5} width="100%" heigth="10cm"/>
        </h1>
</div>
    <div class="slide">
        <h1 class="slide-number">
            <img src={pic6} width="100%" heigth="10cm"/>
        </h1>
</div>
    <div class="slide">
        <h1 class="slide-number">

            <img src={pic1} width="100%" heigth="20cm"/>
        </h1>
</div>
    <div class="slide">
        <h1 class="slide-number">
            <img src={pic8} width="100%" heigth="10cm"/>
        </h1>
</div>
</div>
</div>
        </div>
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
  )
}
