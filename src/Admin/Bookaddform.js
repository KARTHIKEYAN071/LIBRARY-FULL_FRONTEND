import { React,useState } from 'react';
import axios from 'axios';
import "./addbook.css"
import { message } from 'antd';

export default function Bookaddform() {
  const [bookid,setBookid]=useState(0);
  const [title,setTitle]=useState("");
  const [author,setAuthor]=useState("");
  const [publisher,setPublisher]=useState("");
  const [subject,setSubject]=useState("");
  const [category,setCategory]=useState("");
  const [edition,setEdition]=useState("");
  const [noofbooks,setNoofbooks]=useState("");
  const [language,setLanguage]=useState("");
  const [imageurl,setImageurl]=useState("");
  const SubmitHandler =(e)=>{
    e.preventDefault();
    const data = {
        bookid:bookid,
        title:title,
        author:author,
        publisher:publisher,
        subject:subject,
        category:category,
        edition:edition,
        noofbooks:noofbooks,
        language:language,
        imageurl:imageurl
    };
    axios.post('http://localhost:8080/addBooks', data)
    message.success("New Book Added");

}

  return (
    <div className='addbookform'>
        <form>
            <label for="titlt">Book Title</label>
            <input type='text' name="title" onChange={ (e) => setTitle(e.target.value)}/><br/>
            <label for="id">Book ID</label>
            <input type='number' name="id" onChange={ (e) => setBookid(e.target.value)}/><br/>
            <label for="id">Author</label>
            <input type='text' name="author" onChange={ (e) => setAuthor(e.target.value)}/><br/>
            <label for="id">Category</label>
            <input type='text' name="Category" onChange={ (e) => setCategory(e.target.value)}/><br/>
            <label for="id">Image Url</label>
            <input type='text' name="Image Url" onChange={ (e) => setImageurl(e.target.value)}/><br/>
            <label for="id">Subject</label>
            <input type='text' name="Subject" onChange={ (e) => setSubject(e.target.value)}/><br/>
            <label for="id">Edition</label>
            <input type='text' name="Edition"onChange={ (e) => setEdition(e.target.value)}/><br/>
            <label for="id">No Of Books</label>
            <input type='text' name="No Of Books"onChange={ (e) => setNoofbooks(e.target.value)}/><br/>
            <label for="id">Language</label>
            <input type='text' name="price"onChange={ (e) => setLanguage(e.target.value)}/><br/>
            <label for="id">Publisher</label>
            <input type='text' name="Publisher"onChange={ (e) => setPublisher(e.target.value)}/><br/>
            <button type='submit' onClick={SubmitHandler}>Add Book</button>

        </form>
    </div>
  )
}
