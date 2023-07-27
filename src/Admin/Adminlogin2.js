import React from 'react';
import './admin.css';
import MenuIcon from '@mui/icons-material/Menu';
import Showtable from '../Showtable/Showtable';
import HomeIcon from '@mui/icons-material/Home';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddIcon from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Bookaddform from './Bookaddform';
import Report from './Report';
import Updatebooks from './Updatebooks';
import Deletebook from './deletebook';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';
// import { VAL } from './Adminloginpage';
function Adminlogin2() {
//   if (window.location.pathname === '/adminLogin')
//   {
//   window.location.onload = ()=>{
//   var hamburgerr = document.querySelector(".hamburgerr");
// 	hamburgerr.addEventListener("click", function(){
// 		document.querySelector(".body").classList.toggle("active");
// 	})
// }
// }

function close3() {
    document.getElementById("sidebarad").style.marginLeft = "-225px";
    document.getElementById("section").style.marginLeft = "0px";
    document.getElementById("bgimg").style.marginLeft = "0px";

  }
  function open() {
    document.getElementById("sidebarad").style.marginLeft = "0px";
    document.getElementById("section").style.marginLeft = "225px";
    document.getElementById("bgimg").style.marginLeft = "-155px";

    // alert(VAL);
  }
  function people() {
      document.getElementById("addbookcon").style.display = "none";
      document.getElementById("updatebookcon").style.display = "none";
    document.getElementById("peoplecon").style.display = "block";
    document.getElementById("bgimg").style.display = "none";


  }
  function addbook() {
      document.getElementById("peoplecon").style.display = "none";
      document.getElementById("updatebookcon").style.display = "none";

    document.getElementById("addbookcon").style.display = "block";
    document.getElementById("deletebookcon").style.display = "none";
    document.getElementById("bgimg").style.display = "none";


  }
  function updatebook() {
      document.getElementById("peoplecon").style.display = "none";
    document.getElementById("addbookcon").style.display = "none";
    document.getElementById("deletebookcon").style.display = "none";
    document.getElementById("updatebookcon").style.display = "block";
    document.getElementById("bgimg").style.display = "none";

  }
  function deletebook() {
      document.getElementById("peoplecon").style.display = "none";
    document.getElementById("addbookcon").style.display = "none";
    document.getElementById("updatebookcon").style.display = "none";
    document.getElementById("deletebookcon").style.display = "block";
    document.getElementById("bgimg").style.display = "none";

  }
  function showreports() {
    document.getElementById("peoplecon").style.display = "none";
  document.getElementById("addbookcon").style.display = "none";
  document.getElementById("updatebookcon").style.display = "none";
  document.getElementById("deletebookcon").style.display = "none";
  document.getElementById("reports").style.display = "block";
  document.getElementById("bgimg").style.display = "none";

}
function home() {
    document.getElementById("peoplecon").style.display = "none";
  document.getElementById("addbookcon").style.display = "none";
  document.getElementById("updatebookcon").style.display = "none";
  document.getElementById("deletebookcon").style.display = "none";
  document.getElementById("reports").style.display = "none";
  document.getElementById("bgimg").style.display = "block";

}
  return (
    <body>
    <div class="wrapper">
    <div class="section" id='section'>
 <div class="top_navbar">
   <div class="hamburgerr">
     
       <button onClick={open} style={{background:"transparent",border:"none",cursor:"pointer"}} ><MenuIcon style={{fontSize:"30px"}}/></button>  
   </div>
 </div>
 <div class="containerr" id='containerr'>
 <div className='background' id='bgimg'></div>
    <div id='peoplecon'><Showtable /></div>
    <div id='addbookcon'><Bookaddform /></div>
    <div id='updatebookcon'><Updatebooks/></div>
    <div id='deletebookcon'><Deletebook/></div>
    <div id='reports'><Report/></div>

    
 </div>
</div>
     <div class="sidebarad" id="sidebarad">
            <div className='0' id='0'><HighlightOffIcon onClick={close3} style={{color:"red",marginLeft:"5cm"}}/></div>
         <div class="profilee">
             <img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSt4qqHEubkpY3Xm0awJMjYEDkr4ScMn1ltHtiOpSuInJq3jbyf5oyz5sA8x-_rugk8f_nj9TpVCRYNr_c" alt="profile_picture"/>
             <h3>THOR</h3>
             <p>Admin</p>
         </div>
         <ul>
             <li>
                 <a  class="active" onClick={home}>
                     
                     <HomeIcon/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="item">Home</span>
                 </a>
             </li>
             <li>
                 <a onClick={addbook}>
                     <span class="icon"></span>
                     <AddIcon/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="item">Add Books</span>
                 </a>
             </li>
             <li>
                 <a onClick={updatebook}>
                     <span class="icon" ><i class="fas fa-tachometer-alt"></i></span>
                    <UpdateIcon/> &nbsp;&nbsp;&nbsp;&nbsp;<span class="item">Update Books</span>
                 </a>
             </li>
             <li>
                 <a onClick={people}>
                     <span class="icon"><i class="fas fa-user-friends"></i></span>
                     <PeopleAltIcon/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="item">Peoples</span>
                 </a>
             </li>
             <li>
                 <a onClick={deletebook}>
                     <span class="icon"><i class="fas fa-database"></i></span>
                     <DeleteForeverIcon/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="item">Delete Books</span>
                 </a>
             </li>
             <li>
                 <a onClick={showreports}>
                     <span class="icon"><i class="fas fa-chart-line"></i></span>
                     <ReportIcon/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="item">Reports</span>
                 </a>
             </li>
             <li>
                 <a>
                     <span class="icon"><i class="fas fa-user-shield"></i></span>
                     <PersonAddIcon/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="item">Admins</span>
                 </a>
             </li>
             <li>
                 <a >
                     <span class="icon"><i class="fas fa-user-shield"></i></span>
                     <LocalPoliceIcon/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="item">Update Profile</span>
                 </a>
             </li>
             <li>
                <Link to="/Login" style={{textDecoration:"none"}} > <a >
                     <span class="icon"><i class="fas fa-user-shield"></i></span>
                    <LogoutIcon/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="item">LogOut</span>
                 </a>
                 </Link>
             </li>
            
         </ul>
     </div>
     
 </div>
 </body>
  );
}

export default Adminlogin2;
