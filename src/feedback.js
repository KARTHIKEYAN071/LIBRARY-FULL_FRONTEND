import { React,useState } from 'react';
import "./feedback.css"
import axios from 'axios';
import { message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
export default function Feedback() {
  const navigate= useNavigate();
  const [name,setName]=useState("");
  const [date,setDate]=useState("");
  const [rules,setRules]=useState("");
  const [availablity,setAvailablity]=useState("");
  const [quality,setQuality]=useState("");
  const [quantity,setQuantity]=useState("");
  const [staff,setStaff]=useState("");
  const [cooperation,setCooperation]=useState("");
  const [environment,setEnvironment]=useState("");
  const SubmitHandler =(e)=>{
  e.preventDefault();
    const data = {
      name:name,
      date:date,
      rules:rules,
      availablity:availablity,
      quality:quality,
      quantity:quantity,
      staff:staff,
      cooperation:cooperation,
        environment:environment
    };
    axios.post('http://localhost:8080/addfeedback', data)
    message.success("Feedback Submitted");
    navigate("/",{replace:true})
}
  function close() {
    document.getElementById("fedbckform").style.display = "none";
  }
  
  
  return (
    
        <form className='feedbackform'>
            <div className='camndiv'>
                <h1 className='h22'>FEEDBACK FORM</h1>
            <input className="makeflx" type='text' placeholder='Enter Name/ID' onChange={ (e) => setName(e.target.value)} required/>
            <input className="makeflx" id="date" type='text'  value={Date()} onClick={ (e) => setDate(Date())} required readOnly/>
                        <div className='makeflx'>
  <p>Rules And Regulations : </p>
  <input type="radio" id="html" name="fav_language" value="Highly Satisfied" onChange={ (e) => setRules(e.target.value)} className='radio' required/>
  <label for="html" >Highly Satisfied</label>
  <input type="radio" id="css" name="fav_language" className='radio' onChange={ (e) => setRules(e.target.value)} value="Satisfied" required/>
  <label for="css">Satisfied</label>
  <input type="radio" id="javascript" name="fav_language" className='radio' onChange={ (e) => setRules(e.target.value)} value="Not Satisfied" required/>
  <label for="javascript">Not Satisfied</label>
</div>
            <div className='makeflx'>
  <p>Availability of Books : </p>
  <input type="radio" id="html" name="language" className='radio' onChange={ (e) => setAvailablity(e.target.value)} value="Highly Satisfied" required/>
  <label for="html">Highly Satisfied</label>
  <input type="radio" id="css" name="language" className='radio' value="Satisfied" onChange={ (e) => setAvailablity(e.target.value)} required/>
  <label for="css">Satisfied</label>
  <input type="radio" id="javascript" name="language"  className='radio' value="Not Satisfied" onChange={ (e) => setAvailablity(e.target.value)} required/>
  <label for="javascript">Not Satisfied</label>
</div>
            <div className='makeflx'>
  <p>Quality of Books : </p>
  <input type="radio" id="html" name="fav_languag" className='radio' value="Highly Satisfied" onChange={ (e) => setQuality(e.target.value)} required/>
  <label for="html">Highly Satisfied</label>
  <input type="radio" id="css" name="fav_languag" className='radio' value="Satisfied" onChange={ (e) => setQuality(e.target.value)} required/>
  <label for="css">Satisfied</label>
  <input type="radio" id="javascript" name="fav_languag" className='radio' value="Not Satisfied" onChange={ (e) => setQuality(e.target.value)} required/>
  <label for="javascript">Not Satisfied</label>
</div>
            <div className='makeflx'>
  <p>Quantity of Books : </p>
  <input type="radio" id="html" name="fav_langua" className='radio'value="Highly Satisfied" onChange={ (e) => setQuantity(e.target.value)} required/>
  <label for="html">Highly Satisfied</label>
  <input type="radio" id="css" name="fav_langua" className='radio' value="Satisfied" onChange={ (e) => setQuantity(e.target.value)} required/>
  <label for="css">Satisfied</label>
  <input type="radio" id="javascript" name="fav_langua" className='radio' value="Not Satisfied" onChange={ (e) => setQuantity(e.target.value)} required/>
  <label for="javascript">Not Satisfied</label>
</div>
            <div className='makeflx'>
  <p>Availability of Staff : </p>
  <input type="radio" id="html" name="fav_langu" className='radio' value="Highly Satisfied" onChange={ (e) => setStaff(e.target.value)} required/>
  <label for="html">Highly Satisfied</label>
  <input type="radio" id="css" name="fav_langu" className='radio' value="Satisfied" onChange={ (e) => setStaff(e.target.value)} required/>
  <label for="css">Satisfied</label>
  <input type="radio" id="javascript" name="fav_langu" className='radio' value="Not Satisfied" onChange={ (e) => setStaff(e.target.value)} required/>
  <label for="javascript">Not Satisfied</label>
</div>
            <div className='makeflx'>
  <p>Co-Operation of Staff : </p>
  <input type="radio" id="html" name="fav_lang" className='radio' value="Highly Satisfied" onChange={ (e) => setCooperation(e.target.value)} required/>
  <label for="html">Highly Satisfied</label>
  <input type="radio" id="css" name="fav_lang" className='radio' value="Satisfied" onChange={ (e) => setCooperation(e.target.value)} required/>
  <label for="css">Satisfied</label>
  <input type="radio" id="javascript" name="fav_lang" className='radio' value="Not Satisfied" onChange={ (e) => setCooperation(e.target.value)} required/>
  <label for="javascript">Not Satisfied</label>
</div>
            <div className='makeflx'>
  <p>Environment In The Library : </p>
  <input type="radio" id="html" name="fav_lan" className='radio' value="Highly Satisfied" onChange={ (e) => setEnvironment(e.target.value)} required/>
  <label for="html">Highly Satisfied</label>
  <input type="radio" id="css" name="fav_lan" className='radio' value="Satisfied" onChange={ (e) => setEnvironment(e.target.value)} required/>
  <label for="css">Satisfied</label>
  <input type="radio" id="javascript" name="fav_lan" className='radio' value="Not Satisfied" onChange={ (e) => setEnvironment(e.target.value)} required/>
  <label for="javascript">Not Satisfied</label>
</div>
           
            

 {/*<Link to="/">*/} <button onClick={SubmitHandler} className="feedbtn1" type="submit" value="submit">LOGOUT</button>{/*</Link>*/}
  <button onClick={close} className="feedbtn2" type="submit" value="Submit">CANCEL</button>
  </div>
</form>

    
  )
}
