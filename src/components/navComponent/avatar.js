import React from 'react'
import '../navstyle.css'
import data from '../data.json'

const accountlist = data.accounts;

export default function avatar() {
  return (
    <div className='container'>
      
      <ul>
        {accountlist.map(s => (<li className='avatar'>{s.name}</li>)) }
      </ul>

     
      </div>
  )
}
