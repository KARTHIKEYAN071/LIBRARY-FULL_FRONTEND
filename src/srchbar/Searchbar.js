import React from 'react'
import './src.css'
function Searchbar() {
	 function search_books() {
		let input = document.getElementById('searchbar').value
		input=input.toLowerCase();
		let x = document.getElementsByClassName('books');
		  
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
	<div>
		<input id="searchbar" onkeyup="search_animal()" type="text"
        name="search" placeholder="Search animals.." onChange={search_books}/>
      
   
    <ol id='list' className='ol'>
    <li class="books"><a>HarryPotter</a></li>
    <li class="books"> <a>JungleBook</a></li>
    <li class="books"> <a>The Lord of the Rings</a></li>
    <li class="books"> <a>A Tale of Two Cities</a></li>
    <li class="books"> <a>The Chronicles of Narnia</a></li>
    <li class="books"> <a>John Wick</a></li>
    </ol>
	</div>
  )
};
export default Searchbar
