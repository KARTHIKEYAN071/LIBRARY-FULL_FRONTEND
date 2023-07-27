import React, { Component } from 'react'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import "./bookdetails.css"
export default class  extends Component {
    close() {
        document.getElementById("maindiv").style.display = "none";
      }
  render() {
    return (
      <div className='maindiv' id='maindiv'>
        <div className='iidiv'>
            <div className='cs' onClick={this.close}><DisabledByDefaultIcon className='cb' style={{fontSize:"50px"}}/></div>
        </div>
      </div>
    )
  }
}
