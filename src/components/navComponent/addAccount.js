import React from 'react'
import '../navstyle.css'

export default function addAccount() {
  return (
 
    <div id='add-button'>
      
      <a className='effect' href="#open-modal">+</a>
  
      
      <div id="open-modal" class="modal-window">
    <div>
     
     
          <form action="" className='form'>
         
            <label htmlFor="">Add Account</label>
            <input placeholder='Enter name to recognize' type="text" id='input' required/>
           <div > <a href="#" title="Close" class="modal-close" >Close</a>
              <div className='add-btn'> <input type="submit" value="Add" /></div>
</div>
     </form>
     </div>
      </div>

    </div>)
}
