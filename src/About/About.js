import React from 'react'
import './about.css'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import leo from './leo.png'
import student from './student.jpg'
export default function About() {
  return (
    <div>
        <div className='top1'>
        <div className='leoo'>
                <img src={leo} alt="Leo" width="80" height="80"/>
                </div>
            <p className='con1'>ABOUT</p>
            <Link to="/"><CloseIcon className='ion1'style={{fontSize:"40px"}}/></Link>
            </div>
            <div className='aboutmid'>
            <div className='aboutimg'>
                <img src={student} alt="student" width="100%" height="100%"/></div>
            <div className='abouttxt'><p className='ahead'>About Us</p><p className='abtcon'>We provide access to information and 
            resources that might otherwise be unavailable or unaffordable.
             It's a safe space for self-study, learning, and socializing</p>
            <div className='aboutbot'> <Link to='/contact' style={{textDecoration:'none'}}><button className='abtbut'>LEARN MORE</button></Link></div></div>
                <div className='nullclr'></div>
            </div>
    </div>
  )
}
