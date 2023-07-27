import React from 'react'
import  './notes.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import NoteIcon from '@mui/icons-material/Note';
import './script'
function Notes() {
    
  return (
    <div className='notes'>
        <div id="modal">
    <div id="inner_modal">
      <textarea placeholder="Note..." id="user_input" maxlength="160"></textarea>
      <HighlightOffIcon id="hide" className='ii'/>
    </div>
  </div>
  
  <main>

    <header>
      <div class="container">
        <div id="header">
          <h1><NoteIcon style={{fontSize:"70px",color:"aqua"}}/>Take Notes</h1>
          <button id="add_note">Add Note</button>
        </div>
      </div>
    </header>
    
    <section>
      <div class="container">
        <div id="all_notes"></div>
      </div>
    </section>

  </main>
  <script/>
    </div>
  )
}

export default Notes