import {React,useState} from 'react'
import "./deletebook.css"
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { message } from 'antd';
import axios from 'axios';
export default function Deletebook() {
  const [bookid,setBookid]=useState(0);
  const [title,setTitle]=useState("");
  function cancel() {
    document.getElementById("deletebok").style.display = "none";
  }
  const SubmitHandlerdel =(e,pass)=>{
    e.preventDefault();
    axios.delete(`http://localhost:8080/deleteBook/${bookid}`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
    message.success("Book Deleted Successfully");
  }
  return (
          
    <div>
        <form class="deletebok"   id="deletebok" >
                    <p className='deltxt1'>Delete A Book</p>
                <p className='proll1'>Enter Book ID </p>
                <input type='number' 
                class="nterroll1"  
                style={{textDecoration:"none"}} 
                placeholder='**'
                onChange={ e => setBookid(e.target.value)}
                /><br/><br/>
                <p className='ppass1'>Enter BookTitle </p><input type="text" className="nterpass1"style={{textDecoration:"none"}}placeholder='********'/><br/>
                <button type="submit"  class="okbtn1" onClick={SubmitHandlerdel}><DoneAllIcon/>&nbsp;&nbsp;Ok</button>
                <button   className="clsbtn41" onClick={cancel}>Cancel &times;</button>
                </form>
    </div>
               
  );
}
