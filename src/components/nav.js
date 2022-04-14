import React from 'react'
import Hamburger from './navComponent/hamburger'
import Avatar from './navComponent/avatar'
import AddAccount from './navComponent/addAccount'
import './navstyle.css'

export default function nav() {
   
  return (
      <div className='nav'>
          <Hamburger />
          <Avatar />
          <AddAccount />
    </div>
  )
}
