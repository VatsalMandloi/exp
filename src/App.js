import React from 'react';
import Nav from './components/nav'
import Dashboard from './components/dashboard'
import './App.css';
import './components/dash-style.css'

function App() {
  return (
    <div className="App">
     
      <Nav />
      <Dashboard />
      <div id="open-pay" class="modal-window">
    <div>
     
     
          <form action="" className='form'>
         
            <label htmlFor="">Add Pay detail</label>
           
            <input placeholder='Transaction Details' type="text" id='input' required />
           
            <input placeholder='Transaction Amount' type="number" id='input' required />
            
            <div> <a href="#" title="Close" class="modal-close">Close</a>
            
              <div className='add-btn'> <input type="submit" value="Add" /></div>
</div>
     </form>
     </div>
      </div>

      <div id="open-receive" class="modal-window">
    <div>
     
     
          <form action="" className='form'>
         
            <label htmlFor="">Add receiving detail</label>
           
            <input placeholder='Transaction Details' type="text" id='input' required />
           
            <input placeholder='Transaction Amount' type="number" id='input' required />
            
           <div> <a href="#" title="Close" class="modal-close">Close</a>
              <div className='add-btn'> <input type="submit" value="Add" /></div>
</div>
     </form>
     </div>
      </div>
    </div>
  );
}

export default App;
