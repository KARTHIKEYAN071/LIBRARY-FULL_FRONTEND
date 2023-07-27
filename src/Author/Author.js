import React from 'react';
// import "./student.css"
import './author.css'
import book1 from "./book1.1.png"
import book2 from "./adven.jpg"
import book3 from "./book3.png"
import book4 from "./book4.jpg"
import book5 from "./book5.jpg"
import book6 from "./book6.jpg"
import book7 from "./book7.jpg"
import book8 from "./book8.webp"
import book9 from "./book9.jpg"


export default function Author()
{
    function search_books() {
		let input = document.getElementById('searchbar').value
		input=input.toLowerCase();
		let x = document.getElementsByClassName('gallery');
		  
		for (var i = 0; i < x.length; i++) { 
			if (!x[i].innerHTML.toLowerCase().includes(input)) {
				x[i].style.display="none";
			}
			else {
				x[i].style.display="list-item";                 
			}
		}
	}
    return (
        <div className='body11'>
        <div className='budy1'>
                    
                        <h3>AVAILABLE BOOKS</h3>
                        <div className='searchbar1'>
                        <input id="searchbar11" onkeyup="search_animal()" type="text"
        name="search" placeholder="Search Books.." onChange={search_books}/>
                        </div>
                    <div class="gallery1">
                <a className='aa1'>
                    <img src={book1} alt="Engineering Book" width="192" height="262"/>
                </a>
                <div class="desc1">Engineering Book</div>
                </div>
                    <div class="gallery1">
                <a className='aa1'>
                    <img src={book2} alt="Adventures Books" width="192" height="262"/>
                </a>
                <div class="desc1">Adventures Books</div>
                </div>
                    <div class="gallery1">
                <a className='aa1'>
                    <img src={book3} alt="Fantasy Books" width="192" height="262"/>
                </a>
                <div class="desc1">Fantasy Books</div>
                </div>
                    <div class="gallery1">
                <a className='aa1'>
                    <img src={book4} alt="Crime Book" width="192" height="262"/>
                </a>
                <div class="desc1">Crime Books</div>
                </div>
                    <div class="gallery1">
                <a className='aa1'>
                    <img src={book5} alt="Mystery" width="192" height="262"/>
                </a>
                <div class="desc1">Mystery Books</div>
                </div>
                    <div class="gallery1">
                <a className='aa1'>
                    <img src={book6} alt="Horror" width="192" height="262"/>
                </a>
                <div class="desc1">Horror Books</div>
                </div>
                    <div class="gallery1">
                <a className='aa1'>
                    <img src={book7} alt="ScienceFiction" width="192" height="262"/>
                </a>
                <div class="desc1">ScienceFiction</div>
                </div>
                    <div class="gallery1">
                <a className='aa1'>
                    <img src={book8} alt="Thriller Book" width="192" height="262"/>
                </a>
                <div class="desc1">Thriller Books</div>
                </div>
                    <div class="gallery1">
                <a className='aa1'>
                    <img src={book9} alt="Biography Book" width="192" height="262"/>
                </a>
                <div class="desc1">Biography Books</div>
                </div>       
        </div>
        </div>
    )
}
