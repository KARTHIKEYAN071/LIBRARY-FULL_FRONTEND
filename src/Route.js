import { Route, Routes } from 'react-router-dom'
import MyApp from './App'
import SignUp from './SignUp'
import std from './std/student'
import Std from './std/student'
import Showtable from './Showtable/Showtable'
import BookRedux from './bookredux/BookRedux'
// import App from './next'
// import Update from './update'
// import Delete from './Delete'
// import searchbar from './srchbar/src'
import Contact from './Contact.Page/Contact'
import Homepage from './ho_pa/Homepage'
import About from './About/About'
import Author from './Author/Author'
// import BookRedux from './bookredux/BookRedux'
import Afterlogin from './after/Afterlogin'
import Notes from './note/Notes'
import Update from './after/update'
import Adminlogin from './Admin/Adminlogin'
import { tableFooterClasses } from '@mui/material'
import Bookaddform from './Admin/Bookaddform';
import Updatebooks from './Admin/Updatebooks'
import Deletebook from './Admin/deletebook'
import Showbooks from './Showbooks'
import Bookdetails from './Bookdetails'
import UserComponent from './samplecheck'
import MyComponent from './logincheck'
import NavigationWrapper from './App'
import Security from './Springsecuritydemo'
import Adminloginpage from './Admin/Adminloginpage'
import Adminlogin2 from './Admin/Adminlogin2'
import Adminlogin3 from './Admin/Adminlogin3'
import Feedback from './feedback'
import Report from './Admin/Report'

function Routing() {
  return (
    <>
    <Routes>
     <Route path="/suggest" element={<BookRedux/>}/> 
     <Route path="/Reports" element={<Report/>}/> 
     <Route path="/feedback" element={<Feedback/>}/> 
     <Route path="/adminLogin" element={<Adminloginpage/>}/> 
     <Route path="/afteradminLogin" element={<Adminlogin/>}/> 
     <Route path="/afteradminLogin2" element={<Adminlogin2/>}/> 
     <Route path="/afteradminLogin3" element={<Adminlogin3/>}/> 
     <Route path="/check" element={<MyComponent/>}/> 
     <Route path="/bookdetails" element={<Bookdetails/>}/> 
     <Route path="/Showbook" element={<Showbooks/>}/> 
     <Route path="/deletebook" element={<Deletebook/>}/> 
     <Route path="/updatebook" element={<Updatebooks/>}/> 
     <Route path="/addbook" element={<Bookaddform/>}/> 
     <Route path="/show" element={<Showtable/>}/> 
     <Route path="/" element={<Homepage/>}/> 
       <Route path="/afterlogin" element={<Afterlogin/>}/>  
      <Route path="/book" element={<Std/>}/>  
     <Route path="/cat" element={<Author/>}/> 
     <Route path="/about" element={<About/>}/> 
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/Login" element={<MyApp/>}/>
    <Route path="/stdLogin" element={<NavigationWrapper/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
     <Route path="/Notes" element={<Notes/>}/>  
    {/* <Route path="/Update" element={<Update/>}/>  */}
     {/* <Route path="/delete" element={<Delete/>}/> */}
     {/* <Route path="/Login" element={<MyApp/>}/>  */}
   <Route path="/Update" element={<Update/>}/>  
   <Route path="/Security" element={<Security/>}/>  
    </Routes>
    </>
  )
}

export default Routing