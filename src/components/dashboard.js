import React from 'react'
import './dash-style.css'
import Appbar from './dashComponent/appbar'
import Transaction from './dashComponent/transaction'
import Buttons from './dashComponent/buttons'

export default function dashboard() {
  return (

    <div >
      <Appbar />
      <Transaction />
      <Buttons />
    </div>
  )
}
