import React from 'react';
import "./student.css"
import book1 from "./book1.1.png"
import book2 from "./adven.jpg"
import book3 from "./book3.png"
import book4 from "./book4.jpg"
import book5 from "./book5.jpg"
import book6 from "./book6.jpg"
import book7 from "./book7.jpg"
import book8 from "./book8.webp"
import book9 from "./book9.jpg"


export default function Std()
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
        <div className='body1'>
        <div className='budy'>
                    
                        <h3>BOOK CATEGORIES</h3>
                        <div className='searchbar1'>
                        <input id="searchbar" onkeyup="search_animal()" type="text"
        name="search" placeholder="Search Books.." onChange={search_books}/>
                        </div>
                    
                    <div class="gallery">
                <a className='aa'>
                    <img src={book2} alt="Adventures Books" width="192" height="262"/>
                </a>
                <div class="desc">Adventures Books</div>
                </div>
                    <div class="gallery">
                <a className='aa'>
                    <img src={book9} alt="Biography Book" width="192" height="262"/>
                </a>
                <div class="desc">Biography Books</div>
                </div>    
                    <div class="gallery">
                <a className='aa'>
                    <img src={book9} alt="Biography Book" width="192" height="262"/>
                </a>
                <div class="desc">Childrens Books</div>
                </div>    
                    <div class="gallery">
                <a className='aa'>
                    <img src={book3} alt="Fantasy Books" width="192" height="262"/>
                </a>
                <div class="desc">Fantasy Books</div>
                </div>
                    <div class="gallery">
                <a className='aa'>
                    <img src={book4} alt="Crime Book" width="192" height="262"/>
                </a>
                <div class="desc">Crime Books</div>
                </div>
                    <div class="gallery">
                <a className='aa'>
                    <img src={book5} alt="Mystery" width="192" height="262"/>
                </a>
                <div class="desc">Mystery Books</div>
                </div>
                    <div class="gallery">
                <a className='aa'>
                    <img src={book6} alt="Horror" width="192" height="262"/>
                </a>
                <div class="desc">Horror Books</div>
                </div>
                    <div class="gallery">
                <a className='aa'>
                    <img src={book6} alt="Horror" width="192" height="262"/>
                </a>
                <div class="desc">Story Books</div>
                </div>
                    <div class="gallery">
                <a className='aa'>
                    <img src={book7} alt="ScienceFiction Book" width="192" height="262"/>
                </a>
                <div class="desc">ScienceFiction </div>
                </div>
                    <div class="gallery">
                <a className='aa'>
                    <img src={book8} alt="Thriller Book" width="192" height="262"/>
                </a>
                <div class="desc">Thriller Books</div>
                </div>
        </div>
        </div>
    )
}
